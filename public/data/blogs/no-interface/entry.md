# No, you don't (always) need an interface

Interface segregation is a solid (pun definitely) principle, but it is just that:
_A principle._

It basically means that a client (some code) should not depend on something it doesn't need.

The original and official definition of the principle is:

> Clients should not be forced to depend on methods
> that they do not use.

The chapter starts with a more lengthy definition:

> The ISP [Interface Segregation Principle] acknowledges that there are objects
> that require noncohesive interfaces; however, it
> suggests that clients should not know about them
> as a single class. Instead, clients should know
> about abstract base classes that have
> cohesive interfaces.

-- Robert. C. Martin (aka Uncle Bob): Agile Software Development - Principles, Patterns, and Practices (2003))

Is is probably not the most clear principle in the history
of computing, but it does beat [the definition of the Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle).

> **NOTE:** _interface_ in the above definition does NOT necessarily mean the _interface_ language construct now available in many languages.

It should be obvious that it is only (made into) a problem in object-oriented programming. In
function-oriented programming the problem sort of just goes embarrassed
away. And since you can practice
function-oriented programming in just about any
language, this is a problem that you really should
not have. And furthermore: You could simply stop having objects that
require noncohesive interfaces ;)

There are, of course, valid use cases for an interface. All of them
have in common that you actually do have _multiple implementations_
of the interfaces. Some of the most obvious are:

- Factory pattern
- Strategy pattern
- (Reusable) Libraries

But what about the famous (and very solid) O: [Open-Closed Principle](https://en.wikipedia.org/wiki/Open–closed_principle)? This principle absolutely makes sense _if
you are writing a library used by others who do not have access to the source
code._

It is worth noting than when [Bertrand Meyer](https://en.wikipedia.org/wiki/Bertrand_Meyer) came up with the O-principle, refactoring was generally done
with search-replace. In these modern times you have very
effective tools assisting you with refactoring, so modifying a class/module shouldn't really be an issue, wherefore interfaces mostly will not be
a necessity.

> (It is _also_ worth noting that Bertrand wasn't only talking about classes, but
about _software entities_: Classes, modules, functions, methods and so on)

## AAM = Abstract Academical Mess

When navigating a code base it is usually simple
to follow methods and properties. In Visual Studio you
can simply press F12 and voila you're there.

Unless it's an interface, of course. You can then
choose to "Go to implementation". Unless you
have multiple implementations of that interface.
That could be the case if you have e.g. decorators
for a class. A well known method for extending a class
without putting otherwise unneeded stuff into it.

But then you cannot - at compile time - easily figure
out what your code does. You have to look through
your (probably long) list of dependency injection
registrations. The application has become an _Abstract
Academical Mess.*

"But cannot the client [of the interface] be oblivious to the implementation?", you might ask.

"It could", I might answer, but I won't, because it probably isn't.

If one of the implementations of an interface choose to do something that requires the network, should the client be aware of this?

Ideally not, but what if the client is e.g. time sensitive?
Or fault sensitive? You can, of course, argue that the
implementation must behave well, but an interface does not
say anything about how implementations should behave.

If the interface segregation principle should make some sort of sense I think
it should be extended to that clients - on top of methods (and properties) - should not depend on _functionality_ they don't need, e.g. networking and databases
and possible weird timing issues following the use of those.

But interfaces cannot say anything about this. And the clients cannot
express their expectations either.

## Mocking

Just. Say. No.

A mock implementation of an interface used for a unit test is generally
not a valid use case for creating interfaces. And if you have an interface
just for being able to create mock objects you may have fallen
victim to [Test Induced Design Damage](https://dhh.dk/2014/test-induced-design-damage.html).

In general: If you cannot test something without mocking (some of) it's
dependencies you should stop and reconsider your design.

If the "real" object implementation talks over the network your
test will no be fulfilling, anyway. Unless, of course, you try to mimick network issues and errors in your mock object - then you might get closer. But mimicking
the various timing issues would be a nightmare.

And since you're unit testing mostly business logic, which
really shouldn't talk to anyone else, especially
not anyone on the network, you don't need mock objects
and hence you don't need interfaces.

## I'm confused, what to do?

You then ask.

Yeah, I know the feeling!

Well, you could pick up [The red book](https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577), learn yourself some of those DDD-principles (more principles, but remember: [DDD is not architecture](https://bradirby.com/ddd-is-not-architecture/)).

This might be overdoing it, but some of the principles
are really good in this scenario. Especially
aggregates.

One of the reasons you have an abundance
of interfaces is due to the need for persistence and other
infrastructure concerns and it has happened
that such an interface has been injected into
e.g. an aggregate (or other business logic), so
it (the aggregate) can take care of all that nasty business (hehe) itself.

But business logic should not have infrastructure concerns. When "sending" your aggregate a command
(calls a method on it, that is) it manipulates itself correspondingly and returns
a set of events (and possibly commands) that describes what just happened and what
the aggregate wants to happen according to business rules (e.g. sending an
email).

And _those_ events and commands you can test!

It is then up to your infrastructure layer to handle passing on events and
commands. And of course also persisting the aggregate. It really doesn't
matter whether you are using e.g. [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) or [Event Sourcing](https://www.event-sourcing.dev/what-is/).

**NOTE:** I'm not necessarily saying that the aggregate
class itself should know about events.
That functionality can be split into separate Command classes which know how
to manipulate the aggregate accordingly - in this way you see a _collection of classes_ (a module!) as an aggregate. There is basically nothing wrong with that.

**IMPORTANT!** It is **vital**, though, that
**the aggregate at all times ensures it's own validity!** This is the most
important property of an aggregate. Using unit tests for ensuring this
is obvious and you do not need to mock anything for doing this.

Seeing domain aggregates this way is an example of
[Functional core, imperative shell](https://www.javiercasas.com/articles/functional-programming-patterns-functional-core-imperative-shell).

## Anemic Domain Model

Some would argue that splitting
an aggregate and it's methods into separate
command classes would result in [an anemic Domain model](https://thedomaindrivendesign.io/anemic-model/).

I do not agree: This would be the case only if you
claim that a domain aggregate must be implemented by one class instead of possibly more in a module oriented fashion. I'm on the verge of thinking
that the module oriented way would mean simpler code
due to generally smaller classes. It _is_ called a Domain _Model_, you know ;)

## Further reading

[Dan North takes a serious stab at SOLID](https://dannorth.net/2021/03/16/cupid-the-back-story/#why-every-single-element-of-solid-is-wrong)
