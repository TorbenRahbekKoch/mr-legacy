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
aims to _Minimize coupling between slices, and maximize copuling within a slice_.

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
