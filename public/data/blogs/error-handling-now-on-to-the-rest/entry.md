# Error handling - Now on to the REST

*This blog post was [originally posted on my company website](https://softwarepassion.eu/error-handling-part-4-now-on-to-the-rest/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was
with only a few additions, highlights, clarifications and corrections of typos.

The .NET Web API has moved on quite a bit in the 10 years since this post,
but the general principles still apply.

---
This is part 4 of a 4-part series:

1. [Error handling - The easy way](/blogs/error-handling-the-easy-way)
2. [Error handling - Keeping it easy](/blogs/error-handling-keeping-it-easy)
3. [Error handling - As easy as sliding in SOAP](/blogs/error-handling-as-easy-as-sliding-in-soap)
4. [Error handling - Now on to the REST](/blogs/error-handling-now-on-to-the-rest)

----

After the 
[slippery SOAP adventure](/blogs/error-handling-as-easy-as-sliding-in-soap)
it is time to look at a more forward looking way of exposing your API to the world: REST. Again the discussion has root in the .NET world and uses WEB.API as the underlying engine, explaining the principles. And again the principles are equally applicable to other languages, frameworks and platforms.

Returning an error from a REST Service is basically as simple as returning a 
[HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). 
How you do that is naturally implementation dependent, but we still have to figure out what status code to return when. Taking 
[the first article](/blogs/error-handling-the-easy-way) as a starting point we could produce a mapping to status codes like the following table:

| Exception |	HTTP Status Code | 	Description |
|-----------|--------------------|--------------|
|DuplicateKeyException  | 409 Conflict | Duplicate key
|DeadLockedException 	| 409 Conflict | Deadlock
|DataUpdatedException   | 409 Conflict | Concurrency conflict
|TimeoutException 	    | 504 Gateway Timeout |	Timeout
|AuthorizationException | 403 Forbidden   | Not authorized
|InvalidDataException 	| 400 Bad Request | Invalid data
|TruncatedDataException | 400 Bad Request | Truncated data
|ProviderInaccessiblexception | 502 Bad Gateway | Provider inaccessible
|System.Exception | 500 Internal Server Error | Internal server error

This is a mapping that might be more natural if it had been created the other way around, starting with HTTP Status Codes and then inventing exceptions matching those. And it is a mapping that might not always be fitting your scenario. But remember that it reflects a general view on the status codes.

Besides returning an HTTP status code to the client it can be helpful to return some more information, which can help the client figure out what went wrong and maybe retry with a corrected request. In my most recent project we returned an error structure like this:

```` c#

/// <summary>
/// The response structure returned in the body from the service when an error occurs.
/// </summary>
public class ErrorResponse
{
    /// <summary>
    /// The http response code.
    /// </summary>
    public int code { get; set; } 

    /// <summary>
    /// Will contain the value "error".
    /// </summary>
    public string status { get; set; }

    /// <summary>
    /// Gets or sets further information about the error.
    /// </summary>
    public object data { get; set; }

    /// <summary>
    /// Gets or sets the message id of the log message which was logged in connection with the error.
    /// </summary>
    public Guid? messageId { get; set; }

    /// <summary>
    /// Gets or sets the correlation id of the log message which was logged in connection with the error.
    /// </summary>
    public Guid? correlationId { get; set; }

    /// <summary>
    /// Gets or sets a short description of the error.
    /// </summary>
    public string error { get; set; }
}
````

**NOTE:** Nowadays (2024 and onwards) this should probably be handled with
the [ProblemDetails](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.problemdetails?view=aspnetcore-8.0) class.

This would, in our project, be converted to JSON, but could as well be converted to XML. The main point of the structure is that both the code, status and data properties are available no matter whether the response was a success or failure.

We also had an `ExtendedErrorResponse`, which – in development and test – could be requested by sending along a custom header. This response would include detailed information about any exceptions, which would ease debugging.

The project used WEB.API and we had to figure out a way to generalize the above handling of exceptions and map them to responses. This turned out to be fairly easy in WEB.API: Create a class derived from `ApiControllerActionInvoker`, implement the `InvokeActionAsync` method in a manner similar to this:

```` c#

/// <summary>
/// Asynchronously invokes the specified action by using the specified controller context. 
/// </summary>
/// <param name="actionContext">The controller context.</param>
/// <param name="cancellationToken">The cancellation token.</param>
/// <returns>A task representing the invoked action.</returns>
public override async Task<HttpResponseMessage> InvokeActionAsync(HttpActionContext actionContext, CancellationToken cancellationToken)
{
    Contract.Requires(actionContext != null);
    Contract.Ensures(Contract.Result<Task<HttpResponseMessage>>() != null);

    StatisticsContext statisticsContext = null;
    OperationContext operationContext = null;
    var request = actionContext.Request;
    try
    {

        statisticsContext = StatisticsContextSession.GetStatisticsContext(request);
        StatisticsStartRequest(request, statisticsContext);

        var commonRequestParameters = GetCommonRequestParameters(actionContext);

        operationContext = SetControllerOperationContext(commonRequestParameters, request);

        var filterTrees = GetServicelagController(request).CreateODataFilterTrees().ToList();
        var allowedTreeNames = GetAllowedODataFilterTreeNames(actionContext, filterTrees);
        ODataFilterVerifier.ParseAndCheckODataFilter(commonRequestParameters, filterTrees, allowedTreeNames);

        ParseAndCheckAuthorization(request, commonRequestParameters, operationContext, applicationIdChecker);

        // Here the task that executes the actual APIController method is created
        Task<HttpResponseMessage> actionTask =
            InvokeControllerActionAsync(operationContext, actionContext, statisticsContext, cancellationToken);

        // and executed
        var response = await actionTask;*

        StatisticsEndRequest(statisticsContext, request, response);

        return response;
    }
    catch (Exception exception)
    {
        var response = ErrorResponseMapper.LogErrorAndCreateErrorResponse(
            actionContext.Request,
            operationContext,
            statisticsContext,
            exception,
            configuration.AllowExtendedErrorInformation == AllowExtendedErrorInformation.Yes);

        StatisticsEndRequest(statisticsContext, request, response);
        return response;
    }
}
````

To register this class in WEB.API you would – e.g. in `WebApiConfig` do something like this:

```` c#
        config.Services.Replace(
            typeof(IHttpActionInvoker), 
            new MyActionInvoker(...parameters...));

````

I have left out quite a few details not necessary for understanding the actual error handling, just to suggest that this method is a nice place to do a lot of pre- and post request handling. We needed, for instance, statistics on what services where called when and by who. Call timings were also quite easy to do like this.

The error handling is, of course, done in `catch (Exception exception)`, which here delegates the responsibility to an `ErrorResponseMapper`, which basically takes care of mapping the exception to the HTTP Status Code as described in the table above.

To allow for custom, non-generalized status codes we created a `HttpResponseMessageException` (derived from `UnrecoverableException`), which allows for the individual api controllers to throw any custom exception, requesting that a specific HTTP Status Code is returned:

```` c#
/// <summary>
/// An exception thrown when a Controller wants to respond with a specific <see cref="HttpStatusCode"/>.
/// </summary>
[Serializable]
public class HttpResponseMessageException : UnrecoverableException
{
    /// <summary>
    /// Initializes a new instance of the <see cref="HttpResponseMessageException"/> class.
    /// </summary>
    /// <param name="code">The <see cref="HttpStatusCode"/> to return to the client.</param>
    /// <param name="message">A message with details.</param>
    public HttpResponseMessageException(HttpStatusCode code, string message)
        :base(message)
    {
        Code = code;            
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="HttpResponseMessageException"/> class.
    /// </summary>
    /// <param name="code">The <see cref="HttpStatusCode"/> to return to the client.</param>
    /// <param name="innerException">The inner exception, which caused this exception to be created.</param>
    public HttpResponseMessageException(HttpStatusCode code, Exception innerException)
        : base(string.Empty, innerException)
    {
        Code = code;
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="HttpResponseMessageException"/> class.
    /// </summary>
    /// <param name="code">The <see cref="HttpStatusCode"/> to return to the client.</param>
    /// <param name="message">A message with details.</param>
    /// <param name="innerException">The inner exception, which caused this exception to be created.</param>
    public HttpResponseMessageException(HttpStatusCode code, string message, Exception innerException)
        : base(message, innerException)
    {
        Code = code;
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="DuplicateKeyException"/> class.
    /// </summary>
    /// <param name="info">The <see cref="T:System.Runtime.Serialization.SerializationInfo" /> that holds the serialized object data about the exception being thrown.</param>
    /// <param name="context">The <see cref="T:System.Runtime.Serialization.StreamingContext" /> that contains contextual information about the source or destination.</param>
    protected HttpResponseMessageException(SerializationInfo info, StreamingContext context)
        : base(info, context)
    {
        Contract.Requires(info != null);

        var code = info.GetInt32(CodeKey);
        Contract.Assume(Enum.IsDefined(typeof(HttpStatusCode), code));
        Code = (HttpStatusCode)code;
    }

    /// <summary>
    /// When overridden in a derived class, sets the <see cref="T:System.Runtime.Serialization.SerializationInfo" /> with information about the exception.
    /// </summary>
    /// <param name="info">The <see cref="T:System.Runtime.Serialization.SerializationInfo" /> that holds the serialized object data about the exception being thrown.</param>
    /// <param name="context">The <see cref="T:System.Runtime.Serialization.StreamingContext" /> that contains contextual information about the source or destination.</param>
    /// <PermissionSet>
    ///   <IPermission class="System.Security.Permissions.FileIOPermission, mscorlib, Version=2.0.3600.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" version="1" Read="*AllFiles*" PathDiscovery="*AllFiles*" />
    ///   <IPermission class="System.Security.Permissions.SecurityPermission, mscorlib, Version=2.0.3600.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" version="1" Flags="SerializationFormatter" />
    ///   </PermissionSet>
    [SecurityCritical]
    public override void GetObjectData(SerializationInfo info, StreamingContext context)
    {
        base.GetObjectData(info, context);
        info.AddValue(CodeKey, Code);
    }

    /// <summary>
    /// Gets the <see cref="HttpStatusCode"/> intended for the client.
    /// </summary>
    public HttpStatusCode Code { get; private set; }

    private const string CodeKey = "Code";
}

````

It could be used something like this:

```` c#
throw new HttpResponseMessageException(
    HttpStatusCode.BadRequest,
    "Unsupported $Filter query: " + commonRequestParameters.Filter,
    exception);

````

The `ErrorResponseMapper` then takes care of mapping this to an `ErrorResponse`.

## Summary

I have in this series tried to shed some light on how to build a generic error handling (micro-)framework into your application. If you do this you will always have some default error handling in place, which then can be individualized when necessary along the way.

I hope you see that the process is really not that complicated, you just have to use the features that the languages and frameworks give you.

Having the default error handling in place, allows you to REST peacefully at night 😉
