# Understanding Event Sourcing - a review

**Rating**

[Rating: ⍟⍟⍟⍟◯](/blogs/how-am-i-doing-my-reviews)

![Book cover](/data/blogs/understanding-eventsourcing/understanding-eventsourcing.png)

I'm reading [the Leanpub edition from 15th November 2024](https://leanpub.com/eventmodeling-and-eventsourcing).

It is written by the (now) great [Martin Dilger](https://www.linkedin.com/in/martindilger/).

Forewords by Mr. Eventmodeling Adam Dymitruk and Gabriel N. Schenker.

See also [my reading list](/pages/reading-list) and [resources](/pages/resources)

# Who is it for?

Well, I'd say it is for anyone involved in developing software, especially if you are
involved in designing the software. How you are involved is not that
important.

# What is it about?

Obviously about event modeling and event sourcing. But just as much about a mindshift when
developing software. Designing and modeling the software as a group effort. Developers, designers,
business people. You know. The people who know how the processes of the business works.

---

# The Review

## Forewords

Both forewords sell the book very well, especially if you happen to already
know Adam Dymitruk.

## Why I care

Is an introductory chapter by Martin himself highlighting some of the problems
in software development. Problems which still exist today even though
solutions have been promised over and over.

## Part I - Foundations

### 1. Why you should care

Fair question. And the answer is: Because information is the new gold. You simply
cannot afford to throw away data, which can help you make informed business
decisions.

### 2. Event Sourcing - what is it?

Also a fair question. Answered by children selling old toys :)

Event sourcing is about capturing what has happened, and holding on to it
for dear life. Instead of thinking in data we must start thinking in
behavior.

Events are (especially through the use of Event Modeling) almost
directly translatable to code.

Events are facts. Immutable facts. You can't change history (unless
you happen to have a certain Delorean).

Just as business entities in a relational database has a unique id
the list of events for a specific customer also have a unique id.
This is called an event stream.

Event streams can be projected into various views. And you can always
create new views.

There seems to be a slight of misconceptions about event sourcing, which
Martin easily counters.

- Event sourcing is complex
- Event sourcing is not performant
- Event-sourced applications are tightly coupled and become extremely painful to develop after the initial phase
- Event streaming and event sourcing is the same thing
- Event sourcing needs special tools

### 3. Planning Systems using Event Modeling

Planning is generally good, because it is expensive to save a day of planning
with a month of coding. Also: Never assume shared understanding.
Mis-communication, misunderstandings and wrong assumptions make projects fail.

Any process, and thereby any system, can be described using atomic building blocks.

There are a few key elements in Event Modeling:

- Events - orange
- Commands - blue
- Screens - well, screen coloured...
- Read Models - green
- External event - yellow

Similarly there are a few key patterns:

**State Change Pattern:**

A screen (the user) sends a command, which validates and whatever and sends
an event.

**Read Model Pattern:**

Read models feed screens and background processes. And the read models
themselves are fed by previous events. This is therefore also the only
data you can actually query.

**State View Pattern**

This is when a screen (or background process) query from the system.

**Automation Pattern**

A background process reads from the read model and does its thing. An
automation is represented by a gear/cog symbol.

**Translation Pattern**

When receiving an external event it is often necessary (and advisable)
to translate it to an internal event.

The **Information Completeness Check** is used to ensure that
read models only contain data that is available from previous events.
This check can be automated in e.g. [prooph Board](https://prooph-board.com/).

**Given/When/Then**

Very good for describing _State Change_ and _State View_ in detail. Make
sure to make good use of these.

It is a good question when to use event modeling. Most systems can
be modeled like this. Even existing systems.

New systems of course benefit massively from event modeling.

### 4. CQRS, Concurrency, (eventual) Consistency

A refresher for some, an initiation for others on the subjects
of CQS, CQRS, concurrency, consistency (at some time).

If you, at some time, like me, have wondered what is the difference
between CQS and CQRS? CQRS is the principle of CQS applied on the
architectural level.

Consistency can also be considered at several levels, but is is probably
most interesting when talking about different data stores being in sync.

Eventual consistency is useful for performance and scalability.

What is it with event sourcing and CQRS? Are they really intertwined?
Not necessarily, but they are a good fit together. CQRS can easily
stand on its own, but it is far more likely that you will you use
CQRS when using event sourcing.

Concurrency is also a problem when using event sourcing. Optimistic
locking is a common strategy. Each event stream has a version, which
often is just the index of the last event in the stream.

When appending a new event we can compare versions of the stream
before creating the event and now.

(This is a bit unclear in the chapter, but maybe later chapters will
clear this up in detail)

### 5. Internal versus external data

Basically about the importance of keeping internal and external
events separate. The external events represent the API to your
system and should be versioned.

Greg Young wrote [the seminal piece on versioning](https://leanpub.com/esversioning),
and - although he never quite finished it - it is essential knowledge
when preparing your events for versioning.

### 6. The anatomy of an event-sourced application

Just as event modeling has some basic building blocks, so do
an event sourced application.

Of course there are events, commands and read models. But we also need
command handlers, query handlers (or projectors), event handlers,
aggregates and streams.

We also need to decide whether to use synchronous or asynchronous
communication. A system, which starts out as asynchronous is
way easier to scale later on. That also means that APIs should
be asynchronous.

### 7. Event streaming, event sourcing and stream design

Just making it extra crystal clear that event streaming
and event sourcing is not the same. Does the job by
e.g. explaining what Kafka is and what it is used for.

Event streaming and event sourcing can absolute play
nice together. Events/records from event streaming can be
translated into domian events. It is not clear at this point
how this is done. Maybe a later chapter reveals the secret.

Keep your event streams small, e.g. by using _Closing the books_ pattern.

The swimlanes in event modeling are used to separate events
into streams, giving some "natural" boundaries.

If you cannot find a way to "naturally" get short streams, you may want
to use snapshots, but that should be the last option.

### 8. Domain Driven Design

It seems that DDD and Event Modeling "are a match made in heaven". I think
he may be right. Especially the ubiquitous language and bounded contexts.

Event Modeling - because it is done with both technical and business people
in the same room - allows us to talk about the system in terms that everybody
understands. Thereby giving us a ubiquitous langauge.

The swimlanes gives us bounded contexts.

Aggregates. The mysterious beings of DDD. What the frack is an aggregate?
There are a lot of technical definitions containing words like entity,
invariants, transaction scope and what have you. No wonder business people get a tired
look in their face when we start talking :)

The business rules for an aggregate can be expressed with
Given/When/Thens from chapter 3.

There are of course (famous) books dedicated to DDD. We should all read
them.

### 9. Handling transactions in distributed systems using Sagas

[Sagas or long lived transactions](https://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf)
have been around for a while.

In distributed systems you generally don't have transactions and there are
primarily two ways of controlling updates to multiple data sources:
orchestrated and choreagraphed. One creates massive coupling, the other
one really necessitates knowing what you're doing, since each service
must be able to handle several up-stream failures. But there is no
free lunch.

No matter what you do, try to keep it simple. That's one of the best
advices around.

### 10. Vertical Slicing

_Vertical Slice Architecture_ - most likely coined by
[Jimmy Bogard](https://www.jimmybogard.com/vertical-slice-architecture/)
aims to _Minimize coupling between slices, and maximize coupling within a slice_.

This is really just the traditional layered architecture taken to the extremes.
Each slice is layered, but self-contained. Therefore it is not a problem that the
slice internally has high coupling.

The chapter defines coupling in this way: "Every time you change one thing, you always have
to change this other thing."

The code for a slice is most often placed within one directory, keeping things close.
If the UI is a different tech-stack (e.g. React) that code is often in another project,
but still the structure should be kept the same.

Event modeling and vertical slice architecture are a perfect match. Every process
step can essentially be implemented as a vertical slice.

Of course there _can_ be dependencies between slices. But those dependencies
are clearly defined through an interface.

Having the slices being so independent makes it easy to work on many parts of the
code base without stepping on any ones toes. It eases onboarding and testing is
easy using the Given/When/Thens of the event model.

It may give somewhat more code duplication, but rarely is business logic duplicated
(I guess).

The tooling used should be up to the job. Dependencies (or rather: lack thereof) must
be enforced by tooling.

## Part II - Modeling the System

### 11. Brainstorming

The "Project Paradox": You need to make a lot of decisions early on in a project,
which is where you have the least knowledge to base those decisions on.

So how do we solve this? By making it much more clear what it is we want to do
before actually doing anything that is costly to reverse.
We may have to model! (Bonus points for where the twisted reference is from!)

Having a rather large group starting out from a list of general requirements we start by collecting events,
remember the past tense. Then ordering them in a timeline that makes sense.

### 12. Modeling Use Cases with Wireframes

Let's frame the wires with a small group of people. Some think wireframing is
good, other's don't. I see the value in having something clearly visual for
those who thrive with visual aids.

### 13. "Given/When/Then" Scenarios

The business has rules. The model has to reflect them. Given/When/Then (GWT) originates
from behavior-driven development (BDD). Remember Cucumber/Gherkin, anyone? It
also very much resembles the ideas from
[Specification by Example](https://gojko.net/books/specification-by-example/).

GWT functions as the systems tests and are defined together with the
business stake holders.

_Given_ is a list of events, which brings the system into a specific state.
_When_ always defines a command. _Then_ defines one or more events coming
from the command execution, or it specifies an error from an intentionally
invalid state.

You can use a white sticky note to provide additional context for a GWT.

### 14. Use Case: Clear Cart

Where we - using the information completeness check - discover
that we miss some information and talk about whether
"aggregateId" is to technical for the business (it probably is), so
let's call it "cart-id" instead.

Being a developer it is a challenge to talk about read models without
thinking of tables or generally how they are stored. Interesting as that
may be, it is not important when modeling. It is, as they say, an
implementation detail.

### 15. Use Case: Submit Cart

Not much having a cart lying around if you can't send it somewhere.
When submitting the cart it is very likely that other systems might be
interested in this. The order system, for instance.

This is very _external events_ come into play. Again it is vital
to distinguish between internal and external events. Other systems just
need to know that the cart is submitted with what in it. They don't
care (and shouldn't) about all the history leading up to the cart being
submitted.

To create an external event we need a read model with the necessary data,
an automation processor, which does the translation and a command
that processes the data and creates the external event. And remember, dear
developers (me included), the implementation of the processor is not
important, yet.

When providing GWTs for an automation _Then_ is skipped.

### 16. Use Case: Inventory Changed

Since we are surprisingly not at the center of the world we may have
to react to external events. They can happen to us via e.g. API call
or message bus or what have you. This is not interesting when doing
the modeling.

We need the _translation pattern_ from chapter 3, which is built using
the external event entering an automation processor, which translates
the event to an internal event, which may or may not look like the
external event.

In this particular use case we receive an event from the _Inventory_
system and therefore also add a swimlane for that system.

This use case also shows us using read model in more than one slice.
Again, it can be hard to not think about the implementation, but it
is important not to.

If you are familiar with DDD you'll recognize the translation
pattern as an
[anti-corruption layer](https://martinfowler.com/articles/refactoring-external-service.html).

### 17. Use Case: Price Changed

When the price isn't right, it must be changed! The pricing system
will then send an (external) Price Changed event, which the cart system
can then react on.

In this Use Case we find out that we have forgotten about "Cart sessions".
And this is generally something to look out for. _If people in workshops
are using terms that are not reflected in the model, it is something to
investigate_.

One new thing that now happens is that the Price Changed event will impact
a read model which we already have defined. That is not uncommon and nothing
to worry about. Just update the read model, do an information completeness
check and you're good to go.

### 18. Structuring an Event Model

Event Models can become fairly big and unwieldy, so it is essential to somehow
structure them. Martin uses chapters and sub-chapters on top of the model to divide
them into easily recognizable sections.

Miro boards are very useful for Event Models, and you can of course have multiple
models on one board. Here you can place a pink sticky note on the left, describing
the business context for the model.

One question often coming up, especially from developers, is "error handling", here
called Alternative Flows. How do we model loops and conditions? Since the
model must read as a timeline from left to right, we don't. Instead we model them
as GWTs when possible or separate flows when GWTs don't suffice. On e.g. Miro boards
it is possible to have links to other boards and places on boards.

## Part III - From zero to running software

### 19. Technology Stack

Well, we have defined the system with it's events, screens, queries, translators and
other automations. And the vertical slicing we have from the model is used as work items,
so we don't need ticket systems or backlogs.

Now we have to choose the tecnology used for implementing. In the book is used the following:
Kotlin, Spring Framework, Spring Modulith, Spring Data, Test Containers, JUnit,
PostgreSQL.

### 20. Brief introduction to Axon

Axon is a framework for building event sourced application. It has a "real"
Event Store but can also use e.g. PostgreSQL.

Axon uses the term aggregate to denote a stream. They are basically the same thing. Code
wise an aggregate is marked using an annotation.

Command handlers can defined inside an aggregate, marked with another annotation. Fairly standard.
You can define whether a command creates new instances of an aggregate.

Naturally you also need Event Handlers, of which there are several:
Subscribing Event Processor, Streaming Event Processor. Not surprisingly an event handler
is also marked with an annotation.

### 21. Implementing the first slice - "Add Item"

Slicing and dicing! Or rather, since we've already sliced, we are just going to dice. I think...

There's a github with the source for the book. Recommend it!

In the book it looks like Martin is implementing it all by hand, but he does admit to
using code generation a lot. Clever dude!

He presents the code structure, it is in Kotlin, and it of course uses the Vertical
Slice Architecture.

We start out by implementing the "Add Cart Item" slice, and aggregate, commands and events
are introduced. Some of it are of course inherent to the Axon framework.

Axon also makes it easy to test the slices. It is interesting to see how aggregate ids
are initialized. That can sometimes be a puzzle to figure that out.

The rule with maximum three items in the card is implemented by counting _ItemAdded_-events.

### 22. Implementing state view slices using Live-Projections

A _Live report_ or _Live projection_ is a query which is calculated from the events
every time it is requested. This is rarely too slow. If it is you can chose a
stored projection.

The code in the is highly dependent on the Axon framework but the principles used
are very simple.

Axon does not provide any help for testing queries, so the has an example of a more
manual approach using Test Containers. It gets the job done.

### 23. Implementing Remove-Item and Clear-Cart

In here it is stated very clearly that the command handler is not responsible
for changing the state and attributes of the aggregate. The job of the command
handler is _to enforce invariants, validate business rules and apply the correct
events in case all rules apply_.

_The sole purpose of the command handler is to make a decision whether a command can
be processed by validating the existing state of the system._

_The only purpose of the event-sourcing handler is to evolve the state of the aggregate._

_An aggregate's internals only changes because of events that occured, never because of an action._

Just to make that clear!

### 24. Example Integration with Apache Kafka and Translations

External events are, naturally, modeled as an external event, here using a yellow sticker,
which is not "official" notation. Maybe it will be?

The command handler is (here) called by Kafka with a command, which is internal to the
package. It is an implementation detail of the slice. As is the fact that the data
for the slice comes from Kafka. If you are thinking of
[Ports and Adapters/Hexagonal Architecture](<https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)>)
I'd say that a translator slice is a port and adapter in one. As stated before
it can also be seen as an anti-corruption layer.

### 25. Implementing a database projection for inventories

Yet another translation, but this one is going to end up in a projection, which can be
seen as a stored view if you are thinking in classic database terms.

By the way: I really like that I can follow along in the code!

A projection should not be normalized or need joins or anything complex if it can
be avoided. What database you use, how you access it and so on can be decided
on a slice by slice basis.

The Axon processor type used here is a Tracking-Event-Processor.

There are some thoughts on error handling. And one important aspect here is that
how you handle errors may very well be a business decision. Some errors might be okay!

You can choose to simply ignore errors. If the error is because the database
is "down" you can retry. You can move the message to a dead letter queue. Or what have you.

Then it is simple to implement the projection using a standard event handler, which puts
data into the database. Easy-peasy.

Querying the projection is just as easy as querying any other database.

### 26. Implementing Automations

An automation is something that somehow runs automatically, and does stuff. There! I said it! In case
you were wondering!

The implementation in this chapter really shows that we repeat the patterns
over and over. As Martin puts it: "using strategic copy & paste will become one
of your strongest tools over time". And code generation can be considered
a kind of copy/paste.

This is a longer chapter, since the automation consists of several slices. But this also
makes it very clear that the slicing model, the vertical slice architecture, together
with event sourcing makes is easy to make a decision because it is fairly cheap to
change it later on. Only that slice is impacted.

There is quite a few code examples in this chapter. Nice.

The automation in the chapter can in some circumstances send multiple commands and it
is for a start using eventual consistency. In this implementation that eventual
consistency might cause some missed events. Whether that is okay is - at least partly - a
business decision. The automation has no actual error handling. Again, it can be a
business decision whether this is a problem.

There are some suggestions for handling the eventual consistency problem here. One is
of course to make it immediately consistent by using a (distributed) transaction. This
solution of course doesn't scale well, but it works.

Another options is to make it into a live model. In this case an in-memory projection
is suggested. A cache, basically.

### 27. Submitting the Cart

No fun in just carting around. Let's bring order!

An interesting twist here: We should not be able to submit an empty cart. This should obviously
not be possible from the UI neither. Normally one would do a lot of work to ensure that this
invariant/business rule is only in one place. But since our slices are so small and
all the code for it is kept close, there is really no harm in having this rule in both the
UI and the backend.

We do run into the "Dual Write" problem, since we need to write on e.g. a service bus that
something happened, and we also need to store an event in the event store. If this is not
taken care of correctly you'll have some interesting bugs to find.

One classic method for handling this is the "Transactional Outbox"-pattern. Instead of writing
to two different thingies (e.g. DB and message queue) we write the business entity to the database
along with a record (in a separate table) and then a separate process takes care of the
actual sending to the message bus.

It is worth noting here that this only partly solves the problem, as it just postpones the
Dual Write for later. The separate process must obviously keep track of how far it has gotten
in the list of events to send, and at the same time actually sending the event.

This underlines the importance of events being idempotent. There is no exactly-once delivery.

If looking at Azure there are several services that offer this pattern out of the box. You
can write to CosmosDB and having it send a message for you. I'm sure AWS has similar
offerings.

The receiving service can use a similar pattern: "Transactional Inbox". Here the incoming
messages are stored in a table instead of being processed directly. This can be used for
de-duplication of events.

Error handling: Yeah, it happens. Shit breaks. Eror handling is, as have been mentioned
previously, not just a technical decision. It is also a business decision.

Dead Letter Queues I personally see as the last stop. But they can, of course, be used
strategically as any other infrastructure service. I do think, though, they can be useful
if errors are modelled explicitly where DLQs can be part of the technical implementation.

### 28. Handling breaking changes

Break it, you will. Fix it, you shall.

In an event-sourced system you'll typically intentionally break things by introducing
a new version of an event.

Again I will refer to
[Greg Young's seminal work on versioning](https://leanpub.com/esversioning) for an extensice
workout of versioning.

One very essential part - the holy grail, so to speak - of event-sourced systems is the
ability to replay events. Do not start
building a system without having this ability from the get-go!

The framework - Axon - used in the book has an API for that use case.

## Part IV - Implementation Patterns

### 29. What this part is about

Part IV is a pattern catalog. The examples are a simple To Do application.

### 30. Pattern: Database Projected Read Model

We used one previously. It is modeled with a green sticky note.
A database projected read model is basically a precalculated query.

### 31. Pattern: Live Model

We used one previously. Still modeled with a green sticky note.
This read model builds projections on the fly directly from
event streams. It works best from one event stream although you
can, of course, choose to use several streams, just be aware that
order can be an issue here, so try to avoid it.

Since you always build the data on-the-fly it is not bothered
by any eventual consistency issues.

### 32. Pattern: The (partially) synchronous projection

This is the one where we keep a part of the read model in memory in order to have a
immediately consistent read model without actually storing it. A query cache.

### 33. Pattern: The Logic Read Model

Can you have logic in a read model? Yes, you can. Should you? It depends.

One rule to follow is: no side effects. The data for the calculation should
be available in the events.

### 34. Pattern: Snapshots

Snapshots can be used to optimize performance when you, for some reason, have
long event streams, where it becomes too costly to read all of them for every
request. It can be viewed as a cache of sorts.

Since a snapshot is a technical concern it is not modeled explicitly.

It is better, of course, to limit the length of the stream, e.g. by
_Closing the books_, making snapshots an exception.

### 35. Pattern: "Processor-TODO-List" - Pattern

Automations for the people! Let's to do it!

The most complex part of event-sourced systems are automations, but _any
process can be implemented as a series of process steps that are
conducted in order_.

The to do list (read model) for a processor will be a read model, and this is therefore
also part of the modeling for it. Typically the processor will issue commands
that end up sending events that feed into the to do list for a processor. Beware that this
is also typically eventually consistent with the dragons this may reveal.

How often the processor should look at the to do list is probably a business decision.

### 36. Pattern: The Reservation Pattern

Reserve and execute. A typical use case for this pattern is ticket reservation or when signing
up for a service: ensuring a valid and unique email address.

The implementation of the example clearly shows the advantage of having a framework.

### Part V - The missing chapters

He just won't stop writing! :D

I will update this part as the missing chapters stops being missing.

### 37. Why the missing chapters?

Fair question...

The book itself got huge, and there are still many unanswered questions which for now
are scattered in blogs and forum. The missing chapters are where this will be brought
together.

### 38. Handling Metadata

Data about data. Where did it come from. What did it experience along the way.

Combining metadata with logging/monitoring gives a solid foundation for reasoning about
the system. Especially trace, correlation and causation ids are good metadata to have.

Axon, of course, provides helpful helpers to help with metadata.

### 39. Handling Security

Security, access control, authentication, authorization, identity and access. To
model or not to model. Basically, if who the user is doesn't affect the flow of data in the system
then you should probably not model security. That is, if logging in is not a business flow, it
is likely "just" technical concern.

What you typically will do is to have information about the logged-in user as metadata on commands.
Again a framework helping you do this is, well, helpful.

Doing this will help you separate domain logic and security concerns (which is a sort of
infrastructure).

### 40. GDPR - Handling sensitive Data

GDPR is (partly) about the right to access data and the right to be forgotten.

Event sourcing poses a challenge: How do you delete data when the past is immutable? Well, for
start you can choose _not_ to store data: data minimalism.

For the data we _need_ to store we can use _Crypto Shedding_ or _Forgettable Payload_.

### 41. Handling the UI

Sometimes you just have to manhandle that UI!

You click a button, moments later the screen is updated and show new and
possibly exciting information. Other times, you click the button, a spinner
appears and nothing happens. We all know the woes and throes of
synchronous communication.

When using asynchronous communication (and by extension eventual consistency)
you may click the button and have no
idea on when and if the screen is updated. What to do. What do to.

It is fairly logical. When you don't know when something is ready, you'll have to
poll for it or get told by it. It is NOT the solution to fall back to immediate
consistency.

A BFF (Backend For Frontend) _can_ be a solution, but it basically just moves the
problem and BFFs can themselves turn into massive beasts creating (unnecessary) coupling
between slices.

When we introduce polling for getting updated data, we need to somehow know, when the data
has been updated. Event Streams and projections can have ids or a correlation id can be used.

Is is perfectly fine for a command handler to return this id to the client, so the client
can now what to query for. This is called _fenced_ polling.

Whether the actual polling is done by the client (in cases with web clients, typically)
or the server is not that important. On the server you can use some kind of reactive
way, where you basically wait for things to happen without using resources. How to do this
varies between platforms, of course.

You can also use Server-Sent Events instead of polling. Websockets is also a possibility
but you seldomn need the two-way communication.

---

# Conclusion

Having read the now seminal work on event modeling and eventsourcing the first time it feels a bit like
when I first read Lord of the Rings. It took me a while, I felt in good hands, I experienced
a thrilling adventure and I'm now saying goodbye to good friends. And just as I couldn't remember
every little detail of Lord of the Rings I cannot remember every little detail of
event modeling and event sourcing. But now I at least have one place to go to,
one place to look it up.

Is it a perfect book? No, of course not. Could it have used professionel editing? Absolutely.
Does it need it? No, not really.

It is above 500 pages but in general it is an easy read, and it has pictures! Due to the value
it offers, and how much such a work is needed, I give it 4 stars.

This book is a must read for anyone involved in developing software. If you haven't read it, get started.
And when you have finished reading it, read it again.

And spread the word. There IS now a better way to develop software!
