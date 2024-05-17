# Versioning in an Event Sourced System - a review

**Rating**

[Rating: ⍟⍟⍟⍟◯](/blogs/how-am-i-doing-my-reviews)

[A leanpub book by Greg Young](https://leanpub.com/esversioning)

## Who is it for?

Anyone (probably mostly developers and architects) wanting 
to or already running an event sourced system.

## What is it about?

It is about how to version events and event streams.

## The review

The book is unfortunately not finished and it seems it will
never be. It is still a diamond mine when it comes to 
information about versioning. I have trie to distill a little bit
of the knowledge in this review, but you really need to
read the entire document to get all the sides of all the
diamonds!

If you have the slightest interest in event sourcing
(and you really ought to have) you simply must
read this book!

> The days of maintenance windows and big bang releases are over. 
Instead, we now focus on releasing parts of software, and often 
end up wanting to run multiple versions of software side by side.
We can no longer update every consume when a producer is released.
We are forced to deal with versioning issues. 
We are forced to deal with 24/7/365 operations.

Event sourced systems with proper versioning helps alleviate
many problems

Events are immutable, because *the ability to rewrite
an event often opens up massive holes in security*.

One should strive for making changes *additive* and
non-breaking.

Greg takes us through several ways to version events, first: 

**Basic Type Based Versioning**

In this strong schema you
most often version by appending
_v1, _v2, _v3 to your event (class) names.

There are, of course, several issues with this. If you write
a _v2 to the event log without all consumers being able to
handle that version, those consumers will fail, because
it cannot deserialize the event.

An attempt at a solution named *Double Write* where you write
both the old event and the new event will risk some consumers
reacting twice the - in principle - same event.

**Weak Schema**

A better approach is some kind of weak and easily 
extendable schema like JSON. 

A JSON-event should be *mapped* to the instance, not
deserialized.

To better support e.g. renaming a property, you can 
use a wrapper.

**Wrapper**

Here you don't directly map the JSON, but wrap it
with properties, reading/writing from the underlying
JSON document.

This allows you to preserve unknown/unhandled properties
through a serialization following a deserialization.

The wrapper needs more code and is probably slower, but
gives the ultimate flexibility.

Most systems use the *Weak schema* approach, though.

## Atom

Consuming events using the Atom-protocol, where an
Atom-feed would contain all the events (in a paged form)
allows for each event to have a distinct, unique URL
further allowing for optimal cache usage.

Greg walks us through a few scenarios using Atom
and shows us how to handle versioning here.

# General Versioning Concerns

How do one version *behaviour*? The fact that 
domain logic changes over time can make your head
spin, but the key to solving that particular 
problem is to have the result of the changing parts
in the event. The event should contain the *output*, not
the *input*.

## Changing Semantic Meaning

An event must NOT at any time change the
semantics of its fields!

# Whoops, I Did It Again

What happens when you make an error and an 
event contains incorrect data? The event is
immutable and cannot be changed.

The short answer is: *compensating action*.

The long answer is much longer. You firstly
have to figure out how much went wrong 
because of the error. You may e.g. have sent
an email with incorrect information in it.

Compensating actions should probably
be modelled along with your domain. Because
what actually happens when you make errors?
Model it!

To figure out what went wrong you may
want to create a new, temporary projection.

# Copy and Replace

Events are immutable, but streams are not. You
can create a new stream from an old while
manipulating the data.

This is of course easier to do on a stopped system
but there are also patterns for doing it on a live
system.

## Stream boundaries are wrong.

When the context changes or the modeling went
hay-wire you then look into merging streams
or splitting streams. Both are scary to do
on a running system.

## Copy-Transform

It is suggested to make releases do a full 
copy and possible transform of the existing
streams. In this way you will be very practiced
when the shitty events hit the fan ;)

This is only a valid method when the stream
is not "to big". 

## Versioning Bankrupty

Here you "close the books" once in a while
on a stream.

When migrating from a RDBMS you can use
an *Initialized* event to signal the
state of the start of the stream.

# Internal vs External Models.

Often external events have to live up to some
standards, which would be cumbersome to work with
internally, wherefore external events look
different, have other fields, they may even
have different granularity. All done by
projections.

External events should preferably not change, and
then only in slow and backwards compatible ways.

# Versioning Process Managers

Process Managers represent business processes
which spans more than a single transaction.

It is rare to change a business process, but rather
a *new* business process is introduced. This also
allows flows already in progress to move on
unhindered, if necessary.

Sometimes the changes will also apply to existing
Process Mananagers, and it is therefore a good
idea to have the Process Manager
react to an *EndYourselfDueToTakeover* message by
simply ending itself after sending a *TakeoverRequested" 
event, which the new Process Manager can use as a 
starting point.

It is also vital to note that event Process Managers
shouldn't be long running, if it can at all be
avoided. It is better to split a complicated workflow
into more Process Managers which then can be updated
independently.

---

# Conclusion

This resume/review was difficult to write since
the book is basically a mess. It is not finished
and will never be, which is unfortunate.

The information in the book is vital when doing
event sourced systems. You need to be aware
of the pitfalls.

Greg knows his stuff, no question about that, and
simply due to the nature of the information
provided and the excellense of it, the book
gets four stars.