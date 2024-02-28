# Error handling - keeping it easy

*This blog post was [originally posted on my company website](https://softwarepassion.eu/error-handling-part-2-keeping-it-easy/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was
with only a few additions, highlights, clarifications and corrections of typos.

---

This is part 2 of a 4-part series:

1. [Error handling - The easy way](/blogs/error-handling-the-easy-way)
2. [Error handling - Keeping it easy](/blogs/error-handling-keeping-it-easy)
3. [Error handling - As easy as sliding in SOAP](/blogs/error-handling-as-easy-as-sliding-in-soap)
4. [Error handling - Now on to the REST](/blogs/error-handling-now-on-to-the-rest)

----


In [the last part](/blogs/error-handling-the-easy-way) I discussed error handling in the repository/data access layer. The ideas in there are equally valid for any lower layer in the application. When moving up the ladder to higher levels, the principle is the same. Let me consider the layer which in [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) is called Application Services, where the orchestration of ports, adapters, repositories and domain objects is handled. I will also touch on handling errors in the domain objects/aggregate roots. Please note that when I use the phrase domain object it can mean any of value object and entity.

## Aggregate Roots

This is a concept from Domain Driven Design – an Aggregate Root is a so-called consistency boundary and very often also a transaction boundary (in the database-sense of the word). Note: The transaction is not controlled from within the Aggregate Root, which (ideally) knows nothing of the database. Rather, the transaction is controlled by the Application Service.

Of course, errors may happen in a domain object. You could feed it incorrect data, call a method, when the object is in an incorrect state for that method to be called, and so on.

To my knowledge there are two main ways of signalling errors in a domain object/an aggregate root.

1. Throw an exception
2. Publish an (error) event

And of course any combination of the two.

### 1. Throwing an exception

If you are in the habit of using e.g. [Code Contracts](https://research.microsoft.com/en-us/projects/contracts/) you will get either a Code Contract exception, which can only be caught by catching [System.Exception](https://msdn.microsoft.com/en-us/library/system.exception.aspx) or by using the generic variant, where you’d normally choose to throw a 
[System.ArgumentException](https://msdn.microsoft.com/en-us/library/system.argumentexception.aspx) or 
[System.ArgumentNullException](https://msdn.microsoft.com/en-us/library/system.argumentnullexception.aspx). You could, of course, choose your own `InvalidDataException` to standardise the handling. These kinds of errors are rarely recoverable.

You can also have other kinds of errors, e.g. trying to withdraw to large an amount from an Account. This is a domain logic error, which should be clearly separated from the above, which more can be said to be a program logic error.

The main object to obtain by signalling errors in a domain object is to avoid domain events published within the transaction/consistency boundary (as started by the Application Service) to be persisted. This could very well result in corruption of state. Exceptions is a very effective and easy to understand way of doing this. If the Application Service catches any exception it simply won’t commit the transaction is has opened.

If you have any kind of argument validation – using Code Contracts or manual approaches – on your domain objects (and you probably really ought to), you will eventually run into validation exceptions. This means that your Application Service somehow should catch these, if not for anything else, then for logging purposes. The population of these domain objects, which are used as arguments for methods on the Aggregate Root, should happen outside the transaction boundary.

It can, as can so much else, be discussed whether argument validation is domain logic or not. As a rule of thumb, I’d say that argument validation on aggregate root methods is considered domain logic, but the validation should rather be kept inside other domain objects or simple [DTO’s](https://en.wikipedia.org/wiki/Data_transfer_object). This also makes it possible to safely populate the objects outside the transaction boundary, without worrying about domain events being published when not applicable.

### 2. Publish an (error) event

Since it’s quite normal to use domain events from within domain objects it makes sense to extend this to also use domain events to signal domain logic errors. The hard part of this is to make sure that we have not published domain events which would be invalidated by the domain logic error.

This is where the common sense of using small aggregate roots comes in. If your Application Service calls more than one method on your aggregate root, you might consider a redesign. If it only calls one method, it is up to that single method to make sure that when a domain event is published it is valid in a global sense. In general this is done by publishing only one of two events: one on success and one on failure. To be fair, there might be more than one failure type, though.

An interesting approach is to *return* the domain event from the method instead of publishing. This totally relieves the domain object of any responsibility related to infrastructure.

## Application Services

There are (at least) two parts to the handling of errors in an Application Service. The one part is where it’s calling your own code. Here you have total control over what exceptions you want to throw, or even whether you want to use specialized return codes instead of exceptions. You can also choose to use events to signal errors. This suggests the need for some kind of Saga for each service the Application Service exhibits.

I will suggest using exceptions, since it’s easier to generalize the handling of these, and the generalization is important, if you want to have consistent and manageable error handling.

If you’re using third-party components, where the error handling may be different and possibly widely inconsistent, I think you should wrap the component in a thin layer, which normalizes and standardizes the errors which leaves the layer.

You will need to standardize the exceptions you want to exit the Application Service. It may be that you need more exceptions than previously discussed, because different scenarios need different detail information passed on to the user of the Application Service. But you should keep the top hierarchy to the minimum, like this:

![Exception classes - Top Hierarchy](/data/blogs/error-handling-keeping-it-easy/top-exception-classes.png)

Having just a small number of errors at the top of the pyramid makes it considerably more manageable for the user of the layer in question to handle most errors in the same way, and then give special attention only to a very specific small number of errors.

There are, in general, two ways of generalizing the error handling in an Application Service. One is to use Commands and inheritance, having the generalized error handling in a base class. The other is to use methods with nice, meaningful names and, in these methods, wrap the executing code in a Func<> parameter to an error handler method. And then there are any number of combinations of these two methods.

I prefer the one with Commands and inheritance, since you then cannot forget to add the error handling code. It’s there, it’s been written once for all your Application Services. Job well done. If you want to return any error information from your application service – and most likely you will – both approaches will work. Catching an exception or subscribing to an error domain event is comparatively the same amount of work. But as suggested above you can not fully avoid a try-catch in your application service, this part is the part you will want to generalize in an ApplicationService base class.

And if you boil down your error handling approach to a few common cases, as described in this and the previous post, that generalized code can be written once and for all. Then you only have to specially handle some very specific cases for each aggregate root.

As noted above you can choose to signal errors out of the Application Service with exceptions, return codes or with events. Exceptions are easy to understand, you don’t need an event infrastructure of any kind. Return codes are messy, I suggest not to use them.

Events are a very elegant way of signalling anything. It decouples everything and you can have other parts of the code listening in on the events, without being the instigator of the action causing the event.

You will need some kind of event infrastructure, though. This can be a simple in-memory thingy or a mean beast like 
[NServicebus](https://www.particular.net/). The various implications of using events is a discussion another post. It’s not that hard, not that difficult, you just need another mind set.

Hey! Catch! 😉
