# Understanding Event Sourcing - a review

**Rating**

[Rating: ?](/blogs/how-am-i-doing-my-reviews)

![Book cover](/data/blogs/understanding-eventsourcing/understanding-eventsourcing.png)

I'm reading [the Leanpub edition from 15th November 2024](https://leanpub.com/eventmodeling-and-eventsourcing).

It is written by the (now) great [Martin Dilger](https://www.linkedin.com/in/martindilger/).

Forewords by Mr. Eventmodeling Adam Dymitruk and Gabriel N. Schenker.

See also [my reading list](/pages/reading-list) and [resources](/pages/resources)

I'm uploading this review as I go along - hold on tight, there's many chapters:)

# Who is it for?

I'll get to that.

# What is it about?

I'll get to that, too.

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
