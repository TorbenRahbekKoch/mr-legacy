# Software Architecture: The hard parts - a review

**Rating**

[Rating: ⍟⍟⍟⍟◯](/blogs/how-am-i-doing-my-reviews)

![Book cover](/data/blogs/software-architecture-the-hard-parts/software-architecture-the-hard-parts.jpg)\

## Who is it for?

Just like [Fundamentals of Software Architecture](/blogs/fundamentals-of-software-architecture)
this is also for developers aspiring to be an architect, of course, but I believe
that the book is more aimed at existing architects.

## What is it about?

This is basically about all the trade-offs in software architecture. With lots
of examples and patterns it helps you to develop and improve your skills in analyzing
those trade-offs.

## 1. What happens when there are no "Best Practices"?

One should think that no best practices is a good thing,
since the road to mediocrity is [paved with best practices](https://business.simplicable.com/business/new/why-best-practices-are-mediocre).

But since *architects rarely experience common problems
but costantly struggle with decision making in 
novel situations* the headline makes perfekt sense. 

No known situations => no best practices for those situations.

The book is a generic book about software architecture and it mostly
avoids giving implementation specific advice, instead it focuses
on the decision proces.

Therefore the chapter gives some basic definitions about e.g.
data (operational and analytical). 
[Architecture Decision Records](https://adr.github.io/) are recapped
(ADRs where covered thoroughly in *Fundamentals of Software Architecture)
and *Architecture Fitness Functions* gets a deeper treatment, although
*Buliding Evolutionary Architectures* probably has the comprehensive
walk-through, along with the actual definition.

Just before introducing the common case used throughout the book: *The Sysops Squad Saga* a list of some simplistic architectural definitions is given to
be used through the book: Service, Coupling, Component, Synchronous communication, 
Asynchronous communitation, Orchestrated coordination, 
Choregraphed coordination, Atomicity, Contract. 

The common case is about a monolithic system which has various issues and
needs to be re-architected.

## Part I. Pulling things apart

### 2. Discerning coupling in Software Architecture

Scattered throughout the book are (fictive) conversations
between various developers and architects about how to
go about this monolith.

The chapter starts of with one of these conversations, moves on to
discussing coupling and architecture quanta. Concepts vital to
splitting up a monolith.

Various architectures are shortly discussed, e.g *micro frontend*. For
a deeper discussion you should read *Fundamentals of Software Architecture*.

A figure (2-13) visualizes the coupling (heh) between Coordination, 
Communication and Consistency along with a table listing
several (8) saga types for distributed architecture.

Rounding of the chapter with the Sysops Squad talking about
quanta and coupling.

### 3. Architectural Modularity

*Architectural modularity* is about how the system is organized; which
architecture it uses, e.g. monolith, microkernel, distributed or what 
have you. 

It is also about the various -ilities, such as maintainability,
deployability, testability, scalability and so on, since the
ease with which these are handled are closely connected to how
well architected the system is.

A fellow craftsman, Alexander von Zitzewitz 
[has defined a metric](https://blog.hello2morrow.com/2018/12/a-promising-new-metric-to-track-maintainability/)
for the maintainability of a system. He also provides the tool
Sonargraph-Explorer (same website) which can compute the metric
(and loads of others) for e.g. C# or Java projects. There's also
a (quite pricey) Architect-edition.

Scalability and elasticity is not the same. Elasticity is about
*how fast* the system handles changes in the load. If services
have a small *mean-time to startup* (MTTS) the overall system
can react faster to spikes. Elasticity is dynamic whereas
scalability is more a static concern, since it is more connected
with deployment modularity.

For both high levels of scalability, elasticity, availability and 
fault tolerance it is essential to keep synchronous communication
between services to an absolute minimum or in general simply prefer
asynchronous communication. 

Remember: *If your microservices must be deployed as a complete set in  
specific order, please put them back in a monolith and save yourself
some pain*.

The chapter leads and ends with conversations in the Sysops Squad Saga. 
These conversations are helpful in relating the concepts to real life,
although I feel they do dumb it down a bit and (most likely unintended) 
shows a big divide between architects and developers. 

### 4. Architectural Decomposition

This is not about throwing your architecture onto the compost heap
to rot ;)

It is about *how* you break apart a monolithic application *if* it
is at all decomposable. Two main methods are *tactical forking* and
*component-based decomposition*.

*A big ball of mud* is inherently difficult to break up, because there 
is a lot of coupling. 

There are some formulas (by Robert Martin) for calculating 
*abstractness* and *instability*, the last is derived from
efferent coupling and afferent coupling. Both measures can then be
used to calculate *Distances from the Main Sequence* for the
components in the application. This in turn can be used to
determine how hard it will be to restructure the application.

Component-based decomposition naturally needs clearly defined
components in the application and if it doesn't have this some
work needs to be done (this will be covered in chapter 5).

Tactical forking is an interesting technique, where you decompose
a copy (of the source code) deleting the parts not needed for the
module wanted. 

Even though the code itself may still be a mess, there is less
of it, and it might therefore now be feasible to do a 
component-based decomposition of the remains.

### 5. Component-Based Decomposition Patterns

If the code base is sufficiently well-structured it is a viable
option to throw the decomposition patterns at it:

- Identify and Size Components
- Gather Common Domain Components
- Flatten Components
- Determine Component Dependencies
- Create Component Domains
- Create Domain Services

And in that order!

Before describing the patterns the book introduces
Architecture Stories (in opposition to User Stories), which I 
find silly. I see no need to write the needed/wanted
steps in story format: *As an architect...*

Each pattern is described and fitting (pun intended) architecture 
fitness functions are listed. After each pattern is described
the Sysops Squad Sagas adventures with the pattern is described.

There are no actual surprises in the chapter, but it is obvious
that if the system had been written as the patterns recommend
if would already be in a state for splitting up. So the patterns
with their fitness functions are also very usable as general
architecture and coding guidelines.

One pattern stands out as very important: *Determine Components Dependencies*, 
since this can be used to determine whether it is at all
feasible to split up the monolith.

Well, one surprise, perhaps; The Sysops Squad Saga is really
not in that bad a state ;)

### 6. Pulling Apart Operational Data

As if it wasn't hard enough to split up the monolithic code base
you also have the job of splitting up the database belonging to it.

Good lucky with that ;)

*Data integrators* and *data disintegrators* are considered when
figuring out how to split the database.

*Data disintegrators* provide guidance for splitting up the database 
and some drivers for this is:

- Change control
- Connection management
- Scalability
- Fault tolerance
- Architectural quanta
- Database type optimization

All of which are explained thoroughly and then the *data integrators* - reasons
for *keeping* data to together:

- Data relationships
- Database transactions

Obviously there are far fewer reasons to keep data together than split it up ;)

When doing the actual splitting up - decomposing the data - there is a recommended
five-step process for doing so.

1. Analyze Database and Create Data Domains
2. Assign Tables to Data Domains
3. Separate Database Connections to Data Domains
4. Move Schemas to Separate Database Servers
5. Switch Over to Independent Database Servers

None of these steps are particularly easy and even though step 3 does include
looking at the code, since it involves changing each service to use it's own
connection (user/pw) there may still be some cross-domain database access
left lurking in the code. I have seen insanse amounts of inline SQL which
would made it very hard to split data up. I'm up for the challenge, just call ;)

After successfully finishing step 5 you are now in a position to 
change what database type each service should use. Just as 
[Fundamentals of Software Architecture](/blogs/fundamentals-of-software-architecture)
rates several properties of various architecture types this book
moves on to rate several properties of various database types:

- Ease of learning curve
- Ease of data modeling
- Scalability/throughput
- Availability/partition tolerance
- Consistency
- Programming language support/product maturity, SQL support, and community
- Read/write priority

The following types of databases are rated:

- Relational databases
  - E.g. Oracle, MS SQL, MySQL, PostgreSQL
- Key-Value Databases
  - E.g. MemcacheDB, Redis
- Document Databases
  - E.g. MongoDB (many relational dbs has some support for document storage, as well)
- Column Family Databases
  - E.g. Apache Cassandra, Scylla
- Graph Databases
  - E.g. Neo4J
- NewSQL Databases
  - E.g. CockroachDB
- Cloud Native Databases
  - E.g. Snowflake, Amazon Redshift, Azure CosmosDB
- Time-Series Databases
  - E.g. Timescale, InfluxDB

Who knew that some many types of databases exists. And more will probably
follow in the years to come.

The chapter ends with the Sysops Squad having successfully (and
almost magically, it seems) split up their database, as well.

### 7. Service Granularity

The age-old question: How micro is a microservice?

Distinguishing between *granularity* (size) and *modularity*
(cohesion/coupling related) is important and there are some
*granularity disintegrators*, which guides towards breaking
a service into smaller pieces:

- Services scope and function
- Code volatility
- Scalability and throughput
- Fault tolerance
- Security
- Extensibility

As well as *granularity integrators*:

- Database transactions
- Workflow and choreography
- Shared code
- Database relationships

Finding the balance between all of these is naturally difficult
and will take a lot of back and forth and "what is more important".
It all depends.

## Part II. Putting Things Back Together

### 8. Reuse Patterns

*Code Reuse is a normal part of software development*, but it of course depends *when* and *how*. 

As the least favorite way of *reusing* code *Code Replication* is mentionen. It is 
strictly not *reuse of code* but rather *reuse of logic*. The authors recommend
looking at other ways before choosing code replication.

A rather common way is to use a *Shared Library*. That is of course also what
we do at a higher level with e.g. Nuget packages. When using a shared library
*granularity* should be taking into account. The more functionality put into
a library the bigger the risk for consumers when the library is updated.

It is important to always use *versioning* to clearly manage the 
dependencies consumers have on the library.

I believe that having a (heavily used) shared library mandates 
product management processes, taking into account e.g. deprecation
strategies.

It is also possible to use a *Shared Service*, which at first seems easier, but
the risk management is different. Where a *shared library* is shared at compile
time a shared service works at runtime. 

Versioning a service is also generally a mesh. And naturally there are
performance considerations: latency is higher and resilience is lower.

Especially when using microservices the concepts of *Sidecar* and
*Service Mesh* are good fits for functionality such as logging
and monitoring.

Ending with a short discussion of when Code Reuse does make sense, the consensus
is that generally code resuse should be in the areas around infrastructure rather
than domain concepts. Especially in a microservice architecture domain concepts
should follow bounded contexts anyway.

The Sysops Squad Sagas in this chapter are actually quite good. One sentence
stands out:

> It's not about opinions. It's about analyzing the trade-offs

### 9. Data Ownership and Distributed Transactions

Figuring out who owns data (usually a table in some database) and especially
who *writes* to that table is essential. Having multiple writers wreaks
havoc with e.g. caching strategies, wherefore it is important to be
strict about it. 

The chapter discusses *Assigning Data Ownership* starts out with the
easy one: *Single Ownership Scenario*, where there is only one
service wanting/needing to write to a table. 

*Common Ownership Scenario* is where most (or all) of the services
needs to write to a table. The book mentions an Audit table
as an example. The usual solution to this problem is to have
a specific service - in this case an Audit service - owning
the data and all writes goes through this service, either
synchronously or asynchronously. 

Moving on to *Joint Owner Scenario* where multiple services
(but not most/all) writes to the same table. An example (also from the book)
is an Inventory service needing to update the number of products
available. Various techniques for solving this are discussed: 

*Table Split Technique* where the table is split into multiple
tables, each part being owned by its own service. This then 
needs some sort of synchronization from the Product service 
to the other services, when products are added and deleted.

*Data Domain Technique* where two or more services
own the (Product) table together with the increased 
governance needed for managing this.

*Delegate Technique* where one of the existing services
becomes the de facto owner of the table and the other
services access the table through the owner. This access
can be both synchronous and asynchronous. 

There are two types of ownership in the Delegate Technique:
*Primary domain priority* and *operational characteristics priority*.
The first assigns the ownership to the service where
the table best fits into the domain. The second uses
technical constraints like performance to decide on ownership.

It is also possible to use the *Service Consolidation Technique*
where two or more services are combined into one service creating
a more coarse-grained service with the trade-offs this will
bring about.

Distributed Transactions - no acid needed to melt this
fantasy. When having multiple services - micro or not - there
is no such thing as atomic transations.

The chapter quickly introduces ACID (Atomicity, Consistency,
Isolation, Durability) and why it is generally impossibly in any
distributed environment. Well, technically distributed transactions
are *somewhat* possible. The MS DTC 
(Microsoft Distributed Transaction Coordinator) uses 
[Two-Phase Commit](https://en.wikipedia.org/wiki/Two-phase_commit_protocol) - see
also [Martin Fowler on Two-Phase Commit](https://martinfowler.com/articles/patterns-of-distributed-systems/two-phase-commit.html).
However, this is not really applicable to services with
separate data ownership.

Instead it is necessary to look towards *Eventual Consistency* using
three patterns: *background synchronization*, *orchestrated request-based*,
and *event-based*.

*Background synchronization* is usually implemented with some kind
of scheduled batch job. Unfortunately this pattern has the risk of
tightly coupling different bounded contexts, both technically
(deployment, etc) and by having duplicatated business logic.

*Orchestrated Request-Based* tries to ensure that all 
data is up date while the user is waiting. This can be done
by using an Orchestrator service. The responsiveness suffers, of course,
since the user must wait while all services get up to speed. Error
handling can also be quite complex, along with what to tell the user
when something goes wrong.

*Event-Based* is the most reliable eventual consistency pattern, although
it also easily gets into some complicated situations when things goes wrong.

### 10. Distributed Data Access

Having now figured out who owns data and have the right to write,
we need to figure out who needs read access and how.

The most basic way is the *Interservice Communication Pattern*, 
where you simply are asking the owning service
for the data. If you don't need data often, and even may
survive the owning service being down, then this is a fair
idea. 

On the other hand, if you are doing [N+1 queries](https://planetscale.com/blog/what-is-n-1-query-problem-and-how-to-solve-it) this is
a very bad, expensive, slow technique. The network latency
will kill the performance.

Other problems are that the services will be tightly 
coupled because other services will fail if the owning service
is down. Furthermore the owning service needs to scale
if the other services scale.

Forth comes the *Column Schema Replication Pattern*, where you
duplicate/replicate the relevant table fields into other tables
(and possibly other databases). This method is of course
riddled with the various replication problems, no matter
how the replication is done.

Enter the *Replicated Caching Pattern*, which must be
said to be on the advanced part of the stage. With this
pattern each service needing the data has an in-memory
cache, which is keept up to date using preferable
asynchronous messaging.

One issue is that the owning service needs to be running
when the dependent services start. Another issue is
of course the amount of data. If many services need
a copy it can consume substantial amounts of memory.

The *Data Domain Pattern* alleviates some problem, by
putting the needed shared data into a database schema which is
then shared among the services. 

This naturally demands the data to be in the same database, but
the various services are then, to some extent, independent
of each other and the performance is as good as the underlying
database.

More services are affected when updates to the schema occurs
and it may be more difficult to govern the access, especially
write access, to the data. 

### 11. Managing Distributed Workflows

A repeat of the figure 2-13, visualizing the coupling forces:
communication, consistency, and communication opens the chapter
of managing workflows for business.

The *Orchestation Communication Style* is the first way to 
manage a workflow. Orchestration is good for modeling
complex workflows with many error paths and similar
boundary conditions.

I think it is important to note that workflows clearly
can end up in states where it is necessary for a human
to interact. The system must have interaction points
for this to be possible.

Some of the advantages of an orchestrated workflow:
Easier error handling, state is easily queryable

Some disadvantages: Coupling; the orchestrator
is obviously coupled to all the involved services. 
Also the orchestrator may become a performance bottlenect.

Moving on to *Choreography Communication Style* which has
no central coordinator. Each service involved in a workflow
must be able to handle the various happy and unhappy paths
involving it.

Some advantages of this are less coupling, although each service
must be able to inform the following services, so they pick
up the workflow.

No central workflow owner makes state management and
thereby state queries complicated.

It is important to be able to determine *where* a workflow
is. Has the order been sent? Payment received? And so on.
*Workflow State Management*, which in orchestrated solutions
is fairly straight forward. The orchestrator knows the lay of
the, well, workflow.

In a choreographed workflow, there is an option of
using the *Front Controller Pattern*, where the first
service involved also has responsibility for the state.

Using *stateless choreography* where all services must be
queried is also an option, but rather complex. And someone
must know what services to query about what. And which service
does the querying?'

*Stamp coupling* sends state along with the events
sent to the following services. Each services decorates
the event with more state, so the current service contains the 
full picture. Still, you need to know what service the 
workflow is at to know what service to query. At face value
this seems a rather useless option.

A lot of these possibilities are covered later in the book. I 
hope they make more sense then.

As previously stated *orchestration* is usually better when
the workflow is complex with many paths, whereas *choreography*
fits simple, mostly happy path, workflows.

### 12. Transactional Sagas

Nothing Icelanding about it, but as workflows sort of tell
a story, so do we need some way of keeping track of
where in the story we are.

Transactional Sagas in distributed architectures can
have either *synchronous* (s) or *asynchronous* (a) communication,
*atomic* (a) or *eventual* (e) consistency, and the coordination
can be *orchestrated* (o) or *choreographed* (c).

Since these are binary spectrums we end up with 8 types
of sagas, their being useful in different scenarios, a list
of the patterns follows. Please read the book for nasty
details of the patterns.

**Epic Saga Pattern** (sao)

An adept pattern for when the workflow is of high
complexity with lots of non-happy paths and esoteric
boundary conditions.

**Phone Tag Saga Pattern** (sac)

If a workflow is fairly straightforward with no or few
error/boundary conditions, this might be a fitting pattern.

**Fairy Tale Saga Pattern** (seo)

In this pattern the responsibility for managing transactions
has been moved to the individual services, hence the
eventual consistency, minimizing the complexity of the
orchestrator.

**Time Travel Saga Pattern** (sec)

Being a choreographed pattern this works best
for simple workflows.

**Fantasy Fiction Saga Pattern** (aao)

This is generally not a good pattern. The
complexity inherent in asynchronous communication
is not a good match for atomic consistency.

**Horror Story Pattern** (aac)

This pattern is even worse than *Fantasy Fiction*, 
since the asynchronous communication is now between
the partaking services. 

**Parallel Saga Pattern** (aeo)

Using an orchestrator makes this pattern a better fit
for complex workflows. It scales well, but may
give problems in the areas of race conditions,
deadlocks, and other fascinating problems of 
distributed architectures.

**Anthology Saga Pattern** (aec)

Being the exact opposite to *Epic Saga*, this
pattern is well suited for simple workflows
needing very high performance.

Workflows/sagas generally need some kind of
*state management* and I think this applies
whether the workflow is distributed or not.

State machines are obviously a good tool for
managing the state and correspondingly 
state diagrams are a suituable design tool.

It depends on the kind of saga used where
the state actually resides. When having an
orchestrator it comes naturally where choreographed
workflows are quite different. 

### 13. Contracts.

Services need to talk each other and they need to 
know how to do that. This is where (among other places)
contracts come into play. They can be *strict* or *loose*
or anywhere on the spectrum in between, if you want to.

An example of a loose contract format is simple JSON. 
A strict format could be the corresponding JSON Schema
or XML Schema.

Somewhere in between comes e.g. GraphQL, which I tend
to think of as a dynamic read model. 

Strict contracts couples services closer together, since
they all need to change when the contract changes. Loose
contracts allow some leeway before dependent services
must change.

An interesting approach is *Consumer-driven contracts* where
dependent services via a contract tell the provider what they need.
This is a compile-time feature and the provider then provides 
an endpoint with the exact information requested. 

Sometimes a service just published everything about an
entity, simply to *be sure*. This will often backfire, though,
since it results in a tighter and therefore brittle contract.
This is also referred to as *stamp coupling*.
Another disadvantage is unneeded use of bandwidth when
unnecessary data is sent to the consumer.

### 14. Managing Analytical Data.

Analytical data are obviously different from 
operational data. This chapter walks through various
approaches for obtaining analytical data - mostly
in a microservice environment.

**The Data Warehouse**

Probably a rather well-known pattern, all kinds of
data from different systems are loaded into a big - usually denormalized - database.
This can be done with batch jobs or other several
other methods, getting more and more complicated
with more microservices, each possibly with its
own type of database.

The layout of the database may have little in common
with the original data, since the database is optimized
for query performance rather than domain knowledge. This
makes it a hard job to create reports from it.

**The Data Lake**

So instead of going shopping for data, we go for a swim.

Instead of stacking data neatly on shelves we simply
pour - mostly untransformed - data from the various 
systems into a lake, and then do the transformation
on query time.

The data again bears little resemblance to the original, 
domain-oriented data, so querying is difficult, and querying
may need to take into account flawed data, cleansing data 
and so on.

As The Data Warehouse, a lake is also a technical
way to partition data, rather than domain partitioned.

**The Data Mesh**

So, instead of making a mess of it all, we leave it up
to the indvidual microsservices to expose analytical
data, possibly with a sidecar pattern, which can 
ensure security, compliance and so on.

Combined analytical reporting can then be done
by querying several microservices for their exposed
analytical data.

The analytical data part of the microservice
is its own quantum - a Data Product Quantum (DPQ), which
has some common types:

**Source-aligned (native) DPQ**

Provides analytical data from one architecture
quantum - typically a microservice.

**Aggregate DQP**

Provides data from several inputs.

**Fit-for-purpose DPQ**

A specific, custom purpose DPQ.

### 15. Build Your Own Trade-Off Analysis

Everything in architecture is a trade-off. 

The book has worked through several architecture 
patterns, describing the Qualms of Sysops Squad
under the way.

The last chapter helps you doing your own 
trade-off analysis on *your* architecture.

It is important to become good at *qualitative* analysis
since you simply won't have enough to compare against to
do an effective *quantitive* analysis.

Using MECE (mutually exclusive, collectively exhaustive)
is a way to ensure that you cover - if not all - then enough
ground to make a decision.

Don't simply compare generic attributes of the architecure. 
The previous chapters help you uncover those, but it
is vital that you always consider the context 
(e.g. business drivers) since this may sway the decision
in another direction.

If is often usefull to model various cases to help analyse
the trade-offs with each of them. 
And if other - especially non-technical - people need to
weigh in on the decision you need to boil the technical 
details down to a choice between business outcomes instead.

In particular architects should avoid any form for
evangelism and instead hone their skills in trade-off
analysis.

Everything in architecture is a trade-off.

## Conclusion

This is a long read (a tad above 400 pages), but most of the
book is due to lists of patterns and techniques quite
accesable.

The boil it down the *hard parts* are the trade-off
analyses necessary to end up at a reasonable
architecture.

I think the book does a rather good job of covering the
grounds of trade-offs. 