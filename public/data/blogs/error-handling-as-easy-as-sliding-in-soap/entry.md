# Error handling - As easy as sliding in SOAP

*This blog post was [originally posted on my company website](https://softwarepassion.eu/error-handling-part-3-as-easy-as-sliding-in-soap/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was
with only a few additions, highlights, clarifications and corrections of typos.

And yeah, in 2024 SOAP is rarely encountered, but there
*are* loads of legacy systems, which still use SOAP.

---

This is part 3 of a 4-part series:

1. [Error handling - The easy way](/blogs/error-handling-the-easy-way)
2. [Error handling - Keeping it easy](/blogs/error-handling-keeping-it-easy)
3. [Error handling - As easy as sliding in SOAP](/blogs/error-handling-as-easy-as-sliding-in-soap)
4. [Error handling - Now on to the REST](/blogs/error-handling-now-on-to-the-rest)

----


One way to expose your API to the world is via a SOAP-interface. Yes, I know it’s old and out-of-fashion, but there’s fantasillions of installations using SOAP and for some bizarre reason new installations are popping up everyday. So for good measure I will discuss how you keep the slick error handling introduced 
[previously](/blogs/error-handling-the-easy-way) and generalize this in your SOAP API.

I will discuss this in the light of the 
[Microsoft WCF beast](https://msdn.microsoft.com/en-us/library/ms731082.aspx), but the discussion is – I guess – equally applicable for other SOAP frameworks.

## SOAP Faults

SOAP has an 
[official way](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/#_Toc478383507) of signalling error conditions to it’s users – the SOAP Fault and WCF has the [FaultContract attribute](https://learn.microsoft.com/en-us/dotnet/api/system.servicemodel.faultcontractattribute?view=dotnet-plat-ext-8.0) for this. It is used on the methods of a 
[ServiceContract](https://learn.microsoft.com/en-us/dotnet/api/system.servicemodel.servicecontractattribute?view=dotnet-plat-ext-8.0) to signal what types/classes can be returned with error information.

In my endavours with SOAP I have chosen to return one of two FaultContracts: `RecoverableFault` and `UnrecoverableFault`. In some situations it might be useful to have a `UserRecoverableFault`, as well.

I want to show you a sample implementation of `RecoverableFault` here and discuss pros and cons of it. Please note that it has been a while, since I have used this, so it may not 100% reflect the content of the previous articles and it is definitely not as matured:

```` c# 
/// <summary>
/// Describes a recoverable fault, which is a fault than can be recovered by correcting data and/or retrying.
/// </summary>
[DataContract]
public class RecoverableFault
{
    /// <summary>
    /// Initializes a new instance of the <see cref="RecoverableFault"/> class.
    /// </summary>
    /// <param name="faultType">Type of the fault.</param>
    /// <param name="exceptionDetails">The exception details.</param>
    public RecoverableFault(RecoverableFaultType faultType, string exceptionDetails)
    {
        FaultType = faultType;
        ExceptionDetails = exceptionDetails;
    }

    /// <summary>
    /// Gets the type of the fault.
    /// </summary>
    /// <see cref="RecoverableFaultType"/>
    [DataMember]
    public RecoverableFaultType FaultType { get; private set; }

    /// <summary>
    /// Gets or sets a generic description of the id of the entity, which the fault referes to, if available. Can be left empty.
    /// </summary>
    [DataMember]
    public string EntityId { get; set; }

    /// <summary>
    /// Gets or sets the name of the entity to which the fault refers, if available. Can be left empty.
    /// </summary>
    [DataMember]
    public string EntityName { get; set; }

    /// <summary>
    /// Gets or sets the name of the key in cases of DuplicateData FaultType.
    /// </summary>
    [DataMember]
    public string KeyName { get; set; }

    /// <summary>
    /// Gets the exception details, if any were available. Can be used for debugging and logging purposes.
    /// </summary>
    [DataMember]
    public string ExceptionDetails { get; private set; }

    /// <summary>
    /// Returns a <see cref="System.String"/> that represents this instance.
    /// </summary>
    /// <returns>
    /// A <see cref="System.String"/> that represents this instance.
    /// </returns>
    public override string ToString()
    {
        return "RecoverableFaultType.{1}{0}EntityId:{2}{0}EntityName:{3}{0}KeyName:{4}{0}Details:{5}".FormatInvariant(
                Environment.NewLine,
                FaultType,
                EntityId,
                EntityName,
                KeyName,
                ExceptionDetails);
    }
}
````

Note the `ExceptionDetails` property. This is something I would only leave in if the SOAP API is for internal use only. Having exception details may risk exposing implementation details, such as usernames, connection strings, etc. to the client, which is something that we really don’t want 😉

The `EntityId`, `EntityName` and `KeyName` properties surely suggests that this 
particular Fault has been used primarily for database related problems.

The `RecoverableFaultType` is a simple enum, which underlines the above assumption:

```` c#
/// <summary>
/// A categorization of Recoverable Faults.
/// </summary>
public enum RecoverableFaultType
{
    /// <summary>
    /// The data being updated/deleted was already deleted by another user.
    /// </summary>
    DataDeletedByAnotherUser,

    /// <summary>
    /// The data being updated/deleted was already updated by another user.
    /// </summary>
    DataUpdatedByAnotherUser,

    /// <summary>
    /// The data being added already exists.
    /// </summary>
    DuplicateData,

    /// <summary>
    /// The database dead locked while applying the changes.
    /// </summary>
    Deadlocked,

    /// <summary>
    /// There was a time out while applying the changes.
    /// </summary>
    Timeout    
}
````

This enum can used for simple case-switching in the client, when trying to determine a valid action for the error.

The `UnrecoverableFault` could be modeled along these lines:

```` c#

/// <summary>
/// Description of a unrecoverable error.
/// </summary>
[DataContract]
public class UnrecoverableFault
{
    /// <summary>
    /// Initializes a new instance of the <see cref="UnrecoverableFault"/> class.
    /// </summary>
    /// <param name="message">The message.</param>
    /// <param name="errorDetails">The error details.</param>
    /// <param name="parameters">The description of parameters to the method where it all went wrong.</param>
    /// <param name="logId">The log id.</param>
    public UnrecoverableFault(string message, string errorDetails, string parameters, Guid logId)
    {
        Message = message;
        ErrorDetails = errorDetails;
        Parameters = parameters;
        LogId = logId;
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="UnrecoverableFault"/> class.
    /// Use this constructor when you really do not want to provide the client with any detail information. When
    /// given the logId the client can instruct support to look for the given logId in the log.
    /// </summary>
    /// <param name="logId">The log id.</param>
    public UnrecoverableFault(Guid logId)
    {
        LogId = logId;
    }

    /// <summary>
    /// A friendly description of the error. May be empty.
    /// </summary>
    [DataMember]
    public string Message { get; private set; }

    /// <summary>
    /// Details about the error. Could be exception details.
    /// </summary>
    [DataMember]
    public string ErrorDetails { get; private set; }

    /// <summary>
    /// Gets a description of the Parameters to the method where the error happened. Typically obtained with
    /// MethodDescriptor.Describe().
    /// </summary>
    [DataMember]
    public string Parameters { get; private set; }

    /// <summary>
    /// An id for a potential error log.
    /// </summary>
    public Guid LogId { get; private set; }

    /// <summary>
    /// Returns a <see cref="System.String"/> that represents this instance.
    /// </summary>
    /// <returns>
    /// A <see cref="System.String"/> that represents this instance.
    /// </returns>
    public override string ToString()
    {
        return "LogId:{1}{0}Message:{2}{0}Details:{3}{0}Parameters:{4}".FormatInvariant(
            Environment.NewLine,
            LogId,
            Message,
            ErrorDetails,
            Parameters);
    }
}
````

The only really interesting about this is the `LogId` property, which in this specific system refers to a Log Entry in the log-database. So this can used for correlating errors. There are more effective ways to do this, but this was how it was done here.

## Generalizing the SOAP service implementations

Having these rather generic Faults is all well and good, but we have to have an easy way of applying them. This was handled by two classes `ServiceMethodHandler` and `ServiceMethodHandlerImplementation`:

```` c#
public static class ServiceMethodHandler
{
    public static void Execute(Func<string> methodDescriptor, Action action)
    {
        ServiceMethodHandler.Execute<bool>(
            methodDescriptor,
            () =>
            {
                action();
                return true;
            });
    }

    public static TReturn Execute<TReturn>(Func<string> methodDescriptor, Func<TReturn> action)
    {
        return new ServiceMethodHandlerImplementation<TReturn>(methodDescriptor, action).Execute();
    }         
}

internal class ServiceMethodHandlerImplementation<TReturn>
{
    public ServiceMethodHandlerImplementation(Func<string> methodDescriptor, Func<TReturn> action)
    {
        this.methodDescriptor = methodDescriptor;
        this.action = action;
    }

    public TReturn Execute()
    {
        Log.ThreadCorrelationId = Guid.Empty;
        try
        {
            return action();
        }
        catch (RecoverableException exception)
        {
            var methodDescription = methodDescriptor();
            Log.Warning(exception, methodDescription);
            throw new FaultException<RecoverableFault>(ExceptionToFault.RecoverableFaultFromRecoverableException(exception));
        }
        catch (UnrecoverableException exception)
        {
            var methodDescription = methodDescriptor();
            Log.Error(exception, methodDescription);
            throw new FaultException<UnrecoverableFault>(
                new UnrecoverableFault(
                    "UnrecoverableException executing the action.",
                    exception.ToString(),
                    methodDescription,
                    Log.ThreadCorrelationId));
        }
        catch (Exception exception)
        {
            var methodDescription = methodDescriptor();
            Log.Error(
                exception,
                "This exception here suggest a program logic error.{0}{1}",
                Environment.NewLine + Environment.NewLine,
                methodDescription);

            throw new FaultException<UnrecoverableFault>(
                new UnrecoverableFault(
                    "This exception here suggest a program logic error.",
                    exception.ToString(),
                    methodDescription,
                    Log.ThreadCorrelationId));
        }
    }

    private readonly Func<string> methodDescriptor;
    private readonly Func<TReturn> action;
}
````

This is also fairly old which therefore does not have any checks for the `UserRecoverableException`. The only really quirky thing about this class is the *Func methodDescriptor*. This is used to describe the method calling `ServiceMethodHandler` in the case of errors. This is used for logging purposes. The `ServiceMethodHandler` class is used in the SOAP service implementations like this:

```` c#
    public void PublishAndSubscribe(Message message, Subscription subscription)
    {
        ServiceMethodHandler.Execute(
            () => MethodDescriptor.Describe(message, subscription),
            () => manager.Publish(message, subscription));
    }
````

`MethodDescriptor.Describe(...)` is helper method which formats the given parameters in a nice, pseudo-readable way, which then can be logged. It can be very nice to have the values of parameters in the log, when debugging problems in production.

The bulk action of this specific service is the line `() => manager.Publish(message, subscription) . And all the error handling has been generalized with the `ServiceMethodHandler` class.

It *is* really that simple to generalize your error handling!
