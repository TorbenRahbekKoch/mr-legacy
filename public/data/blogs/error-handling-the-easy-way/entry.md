# Error handling - the easy way

*This blog post was [originally posted on my company website](https://softwarepassion.eu/error-handling-the-easy-way/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was
with only a few additions, highlights, clarifications and corrections of typos.

---

This is part 1 of a 4-part series:

1. [Error handling - The easy way](/blogs/error-handling-the-easy-way)
2. [Error handling - Keeping it easy](/blogs/error-handling-keeping-it-easy)
3. [Error handling - As easy as sliding in SOAP](/blogs/error-handling-as-easy-as-sliding-in-soap)
4. [Error handling - Now on to the REST](/blogs/error-handling-now-on-to-the-rest)

----



## Error handling
Error handling is boring. Error handling is hard. Error handling is tedious. There is a lot of work involved. You have to think about it everywhere. And you will never be quite finished with it. But by standardizing and generalizing error handling you will save a lot of work, because all in all – a lot of errors should be handled in exactly the same way.

The discussion here is rooted in Windows, .NET and SQL Server, but the principles and considerations are equally valid on any platform.

There are two kinds of audience to an error: computers and people. And there are basically two kinds of errors: recoverable and unrecoverable. And the recoverable errors can as well be divided into two kinds: One requiring user intervention and one that can basically be recovered by trying again. This means we end up having three main groups of errors:

1. Unrecoverable errors
2. Recoverable errors requiring user intervention
3. Recoverable errors not requiring user intervention

### Unrecoverable errors

This is the kind of error that neither a user or a client application can recover in any way. It will sometimes be a configuration or a program logic error, but it could also be a network which is down. There is nothing the client currently can do about it.

### Recoverable errors requiring user intervention

Typical causes can be a user-entered-value, which caused e.g. a database unique constraint on e.g. a username column to act up. The user can correct the problem by entering another value for the field causing the problem.

### Recoverable errors not requiring user intervention

Here we have situations like time out errors, database dead lock problems. All these can (usually) be corrected by automatically retrying the operation. The user need not be involved (at least, not at first).

## Exceptions versus return codes

I really don’t want to poke the religious war here, simply want to state what my opinion is: If a method call returns and doesn’t blow up in your face, the call is considered as succeeded and no error occurred. Simple as that.

You can forget to check return codes, which will usually result in your application failing in spectacular ways, far away from where the error originated. You can also, of course, forget to catch an exception, but an unhandled exception will, usually, cause your application to crash disgracefully, but at least near where the error occurred.

So I use exceptions, even for error conditions, which are not only not exceptional but are actually expected to happen.

# The joy of layering

An application typically has several layers, no matter whether it is a classic desktop application or a web-application with service and database layers and what have you. The layering actually helps us standardize error handling, because we can choose a set of errors that we’ll allow crossing the layer boundary.

Let’s consider some typical layers.

## Database layer

A huge number of errors can occur when working with a database. The discussion here should not in any way be considered exhaustive, Murphy is way more inventive than I am.

When using the word client here, I typically mean the code that is actually using the layer.

### Duplicate Key

When you want a column (or more columns) in a database table to be unique, you create a unique constraint. If you happen to violate this constraint when trying to insert or update data, you will, if using SQL Server and the .NET platform receive a [SqlException](http://msdn.microsoft.com/en-us/library/system.data.sqlclient.sqlexception.aspx), which indirectly will inform you of the problem, due to having a number of properties as shown below:

|Property |	Value |	Description
|---------|-------|------|
| Number  |	2627  |	SQL Server error code |
| Class   |	14 	  |[Severity level in SQL Server]
| Errors  |	SqlErrorCollection |	List of detailed error descriptions
| Message |	Violation of UNIQUE KEY constraint ‘*name of constraint*’. Cannot insert duplicate key in object ‘*name of table*’. The statement has been terminated. |

If you name your constraints consistently you can retrieve the root of the problem from the Message property. SQL Server cannot effectively figure out – in the general case – which column caused the problem, since unique constraints can span several columns.

Its worth noting that if you happen to use Entity Framework, the SqlException will be the InnerException of an [System.Data.UpdateException](http://msdn.microsoft.com/en-us/library/system.data.updateexception.aspx).

The gist of this example is that this kind of error is probably a user recoverable error, if you can give your user the right information. I’d suggest that you have a base RecoverableException, inherit a UserRecoverableException from this, and again inherit a DuplicateKeyException with properties EntityName and DuplicateFieldName, which would detail where the problem lies.

The UI could then use this information to tell the user how to proceed to correct to the error.

### Invalid Data

When checking the data for e.g. consistency or field lengths before entering them into the database, you may encounter some problems with the data. It could also be the database throwing a constraint violation error. This would cause a `SqlException` with the Number property set to 547.

Since its in general hard to figure out exactly what went wrong we will consider this a program logic error and throw an InvalidDataException, which is inherited from UnrecoverableException.

### String or binary data would be truncated

When you try to put to many data into a column, SQL Server will naturally complain about this. In .NET this will result in a 
[SqlException](http://msdn.microsoft.com/en-us/library/system.data.sqlclient.sqlexception.aspx) with the Number property have the telling value 8152, but no other information is available. SQL Server is not kind enough to tell us, which column we’re happily trying to fill to much information into. This seems rather unhelpful, and since we don’t have this information we don’t have any other choice than making this an UnrecoverableException. The problem is of course a design flaw in the software, which would be hard to rectify on run time anyway. We will throw a TruncatedDataException.

### OptimisticConcurrencyException

This exception is from Entity Framework, which can detect this situation if the table(s) involved have a rowversion column. The error occurs when the user tries to update (or delete) data that have been modified (or deleted) by another user.

In general, this must be considered a UserRecoverableException and I would suggest specializing this situation into a DataUpdatedException. Your usage scenario determines what kind of properties you would put onto this exception. The UI-handler could handle this situation by loading the new data and doing a compare to discover what data has been changed.

If you are able to detect it you can additionally specialize into a DataDeletedException.

### Transaction was deadlocked

In a highly concurrent (and probably badly designed) environment it is likely that enough locking contention occurs in the database so SQL Server has to kill a session, so a command doesn’t get to finish. This will result in a `SqlException` with the Number property set to 1205.

These situations can often be resolved automatically by the client by retrying the command. It is therefore a `RecoverableException`, which I would specialize into a DeadlockedException.

### Timeouts

Timeouts can be said to be a close relative to the dead locks, but the error is not detected by SQL Server which, as such, does not care how long it takes to run a query. In .NET the situation is brought to our attention by the ADO.NET layer which has a command timeout setting for the connection. When this timeout is reached, the command is cancelled and a `SqlException` is abused to signal the problem with the `Number` property set to `-2` (yes, minus two!).

If you are using Entity Framework you should catch a 
[System.Data.EntityCommandExecutionException](http://msdn.microsoft.com/en-us/library/system.data.entitycommandexecutionexception%28v=vs.110%29.aspx) and look at `InnerException`, where the `Number` property is `-2`, as above.

Usually this problem can be rectified by running the command again, but always remember to log the error (with the time spent on the command).

This is a `RecoverableException`. Specialize it with `TimeoutException`.

### Other weird Entity Framework exceptions

A few other Entity Framework exceptions worth mentioning: 
[System.Data.EntityException](http://msdn.microsoft.com/en-us/library/system.data.entityexception%28v=vs.110%29.aspx)
typically suggests an authorization problem. The account does not have access to the database. This can also be caused by an incorrect connection string.

[System.Data.EntityCommandExecutionException](http://msdn.microsoft.com/en-us/library/system.data.entitycommandexecutionexception%28v=vs.110%29.aspx)
usually means that there is a mismatch between the database and the Entity Framework model (the .edmx). Can be caused by forgetting to update the model after changing the database.

[System.Data.EntityCommandCompilationException](http://msdn.microsoft.com/en-us/library/system.data.entitycommandcompilationexception%28v=vs.110%29.aspx) also suggests some kind of mismatch between the database and the Entity Framework model.

All these exceptions are, of course, unrecoverable on run time and this should be signalled by throwing a `ProviderInaccessibleException` which is a specialization of `UnrecoverableException`.

## Putting it under one roof

I usually create or reuse a `DataAccessHandler` class, which handles all the various database problems I come across and map them to one of these exceptions – or a subset of them:

- DataDeletedException
- DataUpdatedException
- DeadlockedException
- DuplicateKeyException
- InvalidDataException
- AuthorizationException
- ProviderInaccesibleException
- TimeoutException
- TruncatedDataException

And since all these exceptions are inherited from `UnrecoverableException`, `RecoverableException` and `UserRecoverableException` the catching and handling of them can be done quite nice and tidy.

## Wrapping up – for now

I have discussed error handling in a data access layer – and especially error reporting out of the layer using exceptions. In coming posts I will discuss the corresponding issues in Application Services, SOAP service layers and REST service layers.

I will end this post with a smashingly beautiful class diagram of the exceptions suggested:

![Exception classes](/data/blogs/error-handling-the-easy-way/exception-classes.png)
