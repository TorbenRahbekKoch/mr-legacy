# Software Architecture Patterns for Serverless Systems - a review

**Rating**

[Rating: ⍟⍟⍟◯◯](/blogs/how-am-i-doing-my-reviews)

![Book cover](/data/blogs/software-architecture-patterns-for-serverless-systems/patterns-for-serverless-systems.jpeg)

## Who is it for?

Someone like me, who wasn't exactly sure what this
_serverless_-thingy is about.

An architect who needs input on how to move into the
cloud or on how to best utilize the cloud.

## What is it about?

In short: It is about how you can take best advantage of the
cloud by going serverless-first.

It is very AWS-specific, but all the concepts
are applicable to any cloud provider, even though the
actual implementation will wary.

![Any cloud provider](/data/blogs/software-architecture-patterns-for-serverless-systems/clouds.jpg)

Fun fact: The word _serverless_ occurs 221 times in the
book.

---

# The review

## 1. Architecting for Innovation

An introductory chapter laying the land of the book.

_Our architecture must enable change_ to be able to
innovate (fast enough).

_Lead time_ must be brought down by e.g. mitigating risk,
leaving the detailed, technical decisions to the
team, better software development life cycle
methodologies (e.g. true agile), automate deployments,
improved software architecture, improved testing,
reducing inter-team dependencies and communication.

The author walks us through a bit of integration
history of how various, otherwise autonomous,
systems were kept in sync. This is of course
a lead up to the architecture proposed by
said author:

At first look it is a bit over the top, but I will
let the rest of the 700 pages (!) determine that.

One of the aims of the architecture is to
_limit the blast radius of honest mistakes_. A
fine goal.

First of all all services are autonomous, owning
all the resources it needs to work when other
services does not. Services are grouped into
subsystems and services consist of functions.

There are three types of autonomous services:
Backend for Frontend (BFF),
External Service Gateway (ESG), and Control Service.

The autonomous services are loosely connected through
an _event hub_. Between the hub and the services
we place _bulkheads_ - corresponding to
Anti-corruption layers in Domain-Driven Design.
The bulk heads _buffers outgoing changes_ and
_caches incoming data_.

A series of services will implement the
_Command, Publish, Consume, Query (CPCQ) flow_.

_Intra-service_ communication is synchronous
communication within a service
whereas _inter-service_ communication is
asynchronous (through the event hub).

Using an _event-first_ strategy and spicing
it up with _idempotence_ and _order-tolerance_
will give severely resilient systems.

I look forward to how especially _order-tolerance_
is handled, but I suspect it will be part of the
_caches incoming data_, which will allow for
reordering of non-sequential events.

_Serverless is self-service_. I get the gist
of the claim, but strictly speaking; setting
up your own server is self-service, too. But if
you - in both situations - are starting
from scratch, there probably will so much
more to know, before setting up your own
server in comparison to simply procuring
the needed services in a serverless environment.

_Observability_ is (one) key to moving fast. When
experimenting you have to have metrics to determine
the outcome of the experiment.

## 2. Defining Boundaries and Letting Go

This feels like another introductory chapter ;)

Boundaries exist at multiple levels: subsystem, service,
and function levels.

The author will use DDD, SOLID and Hexagonal Architecture and
apply them differently on the subsystem level (macro architecture),
the service level (micro architecture), and the
function level (nano architecture).

We are then walked through a short DDD-intro:
Bounded context, Domain aggregate, and Domain event.

The SOLID principles are listed: Single Responsibility,
Open-Closed, Liskov Substitution, Interface Segregation,
Dependency Inversion.

This book actually does a fair job explaining the
principles, better than Robert Martin himself.

Under Interface Segregation _internal domain events_
and _external domain events_ are mentioned.
They are used for _intra-subsystem communication_ and
_inter-subsystem communication_, respectively.

Dependency Inversion is used in an domain event-first way
here. Using domain events as contracts the services
are no longer directly dependent on each other, as long
as the contracts are upheld.

To discover the events in the system you can
use Event Storming, or any other discovery technique
such as Event Modeling or Domain Storytelling.

We also need to define the subsystems, services and functions;
our boundaries. Subsystems may be found by looking
at _actors_, since a subsystem should be responsible
to only one actor. _Business capability_ is another
method of discovery. _Data life cycle_ - that is, who
is using the data throughout the system - is yet
another way. _Legacy systems_ are a natural subsystem
(although they obviously may be responsible to several actors).

**Creating subsystem bulkheads**

There are various ways to create bulkheads.
Cloud accounts are a natural bulkhead, which
should be leveraged as much as possible.

If each subsystem runs under a different account
it also eases monitoring ad observability.

_Within_ a subsystem the services will communicate
using _internal domain events_. These will be
easier to change than the _external domain events_
which function as a contract and therefore should
be changed rarely and only with great care.

Using the terminology from hexagonal architecture
the _external domain events_ represent the _ports_, which
are implemented using the _External Service Gateway pattern_
using _ingress_ and _egress_ gateways.

**Dissecting an autonomous subsystem**

_Each autonomous subsystem is responsible to a single
primary user or a single cohesive group of users_.

The UI will be implemented as a micro frontend (to
be covered in a later chapter).

Each subsystem will have its own event hub to use
for communication between the services of the subsystem.

The event hub is covered in a later chapter, but the
service patterns are introduced (again) in more detail.

In the Backend for Frontend pattern there are some
functionality (materialized views) which sounds very much like
event projections. The External Service Gateway
have some of those, too.

The Control Service is used to orchestrate
business processes and sounds very much like
a saga pattern.

**Dissecting an autonomous service**

I found it peculiar that a service is recommended
to have its own source code repository. My first
thought would have been that the entire subsystem
is a code repository. But then again. The services
can be deployed independently, which will reduce
coupling. I guess that which event hub to use is then mostly
a configuration matter.

Also each service has its own CI/CD pipeline.

A service comes with a set of cloud resources called
a _stack_, which is declaratively defined (probably within some
predefined limits). The deployment manager then compares current
stack with the new stack and makes necessary changes.

Each service will own its data using a database
that best fits its needs.

It may be a bit unclear what the difference is
between a service and a subsystem. The _bulkheads_
are part of the subsystem (a cross-cutting concern), but
must still be deployed
somehow. I hope the book clears that up later.

There's some more confusion around the
micro/nano/hexagonal stuff, which I also hope is
explained later in the book.

## 3. Taming the Presentation Tier

It's a wild beast - it sure needs taming, first
by looking at the pendulum of the UI:
client-side versus server-side rendering or
build-time versus runtime rendering, web versus
mobile, online versus offline.

Since the author already has hinted at the preference
for micro frontends it is no surprise that this
chapter goes down that road. The vehicle of
transportation is e.g. [Jamstack](https://jamstack.org/) -
let's jam (JavaScript, API, Markup) some UI ;)

Just as we want to break up the backend into
managable pieces, the same applies to the frontend.

Each subsystem will have its own main entry point
providing access to all the features. The features
are divided into micro applications and stitched
together by the main entry point - making it all
seem like one consistent application.

The UI may be different depending on device
type, user type, by version.

We are walked through a nice, thorough example of how
to use jamstack with micro frontends.

How to interact between various micro frontends are
covered, as well, although it is pointed out that
you should aim to avoid that.

The example is extended to cover offline
scenarios (PWA - Progressive Web Apps) using
service workers.

Doing live updates with websockets or live
polling is an obvious case to cover, too.

## 4. Trusting Facts and Eventual Consistency

This a long and fairly technical chapter, describing
a lot of the technical implementation details.

In this chapter you have to be walking in a straight
line; keeping track of services, functions, subsystems,
events, queues, busses, streams, event lakes and what have you; and
what talks to what when and how is quite a sobreity test.

_Staged Event-Driven Architecture (SEDA)_ is a way
to divide a process into stages, each with an
input queue. _SEDA_ is used at the _service level_ where
the _event hub_ provides the queues (streams).

At _function level_ we have a _stream processor function_
which uses asynchronous non-blocking I/O.

In _SEDA_ each stage should to a comparable amount of work.
Also, each stage must perform an atomic unit of work. That is:
update exactly one resource.

In an eventually consistent system _transparency_ is vital.
The user must know whether data is stale and by how much.

A stage produces an event when it completes an atomic
unit of work. That event makes the completion _a fact_.
_Facts are the lifeblood of an eventually consistent
system_. These facts are stored indefinitely (as it
is in _fact_ event sourcing),

A system is designed by carefully having stages
reacting to and producing new events.

The _CAP theorem_ is brought online (hehe) because
users favor availability. The prefer to keep working
and having the system work everything out by itself.
Being offline can be a partition, and being offline
poses quite a challenge if you want to use e.g.
a leasing system for avoiding concurrent edits.

To lessen the problems with concurrent edits it is
important that stream processors are order tolerant
and idempotent (covered in a later chapter).

Queues and stream processors are a natural fit
for parallelism and
[Little's Law](https://en.wikipedia.org/wiki/Little%27s_law)
can be used to help figuring out the necessary
amount of parallel processors. Ordering naturally seems
more complicated with parallel processors.

Each autonomous subsystem has one event hub (note that
this most likely corresponds to Azure Event Grid).

Each event producer (aka upstream service) simply publishes events on _the bus_ which is then
connected to _the event hub_, which has a ruleset for
routing events to specific consumers via channels. The event bus decouples
the producers from the specifics of the event hub.
Consumers (aka downstream services) consume (naturally)
events from the hub through a specific channel.

It is understood that the bus is considered a
highly available service. AWS EventBridge and
Azure Event Grid fits this bill.

We need an _event envelope_ to wrap around the
_domain events_ which af the lifeblood of an
event-first system. There is a fine example of how
one may look.

It may be quite beneficial to have both internal
and external event types. Internal events are for
inside the subsystem and external for between subsystems.

In a section about _Routing and channel topology_ various
considerations about event size, event count, fault events
and capacity limits are discussed.

When discussing the event sourcing pattern it is a
relief that the author admits that it may make a
system more complex. But on the other hand it
results in a system flexible enough to be worth
the hazzle. It is noteworthy that _event sourcing
is a key mechanism to create an architecture than enables
change because it allows us to change the system
by adding services without modifying others_.

Now let's go fishing in the _event lake_, which together
with the event hub is at the heart of every autonomous
subsystem. Into the lake is poured every event sent
through the hub and it is stored forever, which of course
sets high expectations to the durability of the lake.

Over time events can be migrated to a slower storage
through e.g. _Closing the Books pattern_. It is also
advisable to replicate the lake into other regions
and even into other accounts, so there is a possibility
for disaster recovery.

Maintaining a lake _per subsystem_ helps limiting
access since only the subsystem account can access it.
Using something called _envelope encryption_ (covered
in a later chapter) sensitive data can be controlled.

When _replaying events_ (to e.g. seed a new service or
to repair a broken service) it is of utmost importance
that it is now broadcast through the event hub. It should
be sent directly to a specific listener function.

_Event streams_ (or channels) is a source of events and
they act like a temporal event store for downstream
consumers.

When reacting to an event (stream) it is necessary
to write the new calculated data to _exactly one_ data store.
And the
bus is in this regard a data store. The reason is
that we do not have distributed transactions. So if
you are in a situation where you need to save some data
in a database (for e.g. a read model) AND publish a new event,
you must first publish the event and then have another
consumer writing that data to the database. This works
because the bus can for all purposes be considered
a trustworthy partner.

When consuming events it is preferably to consume
them as a stream (where you get a batch of events, instead
just one at a time). This allows for e.g. reordering
events, when they are out of order. Consuming them
in this stream processing way is an example of
function-level _Staged Event-Driven Architecture (SEDA)_.

There is talk of _Unit of work_, where we inside
a function record e.g. how
much of a batch we have processed. There are fine
examples on how to do this in the book.

One way of handling failures is to simple _map_ the
failure to an event, which includes the original event
and failure information and publish that to the bus.
We then have a failure handler, which can notify us
e.g. through dash boards, email, what have you. Quite
elegant.

_SEDA_ and _Little's Law_ are mentioned again when
discussing throughput in a stream processor.

The chapter rounds of with a discussion of pipelines,
multiplexing, sharding, batching and grouping.

All in all a quite technical chapter with a lot of
insights on how to manage and consume event streams.

## 5. Turning the Cloud into the Database

Data is heavy! The more data a system has, the harder
it may be to change, complexity gravitates towards
data.

Again this is a very technical chapter and rather
long.

After talking about some of the traditional ways to
store data (typically a relational database) the author
moves on to talk more about the data life cycle (create,
use, analyze, archive). Note, that there is no _delete_.
This is event sourcing where data generally aren't deleted.

A Backend for Frontend-pattern is implemented for
each actor, domain aggregate and life cycle phase
combination. This sounds a lot and without having
actually done a similar exercise, it feels mind blowing.

Data is _created_ in the system in various ways. Some is
entered manually by a user, some enters from other
systems. In the _create phase_ it is important to use
datastores and data formats optimized for writing. Streams
are good candidates - this is the _stream-first_ variation
of Event Sourcing. If we write it to a database
it is essential that the database provides a
_Change Data Capture (CDC)_ feature. This is the
_database-first_ variation of Event Sourcing.

It can be beneficial to look at the rate at which
we create data. This makes it possible to distinguish
betwen _slow_ and _fast_ data.

In the _use phase_ we have downstream services which
_use_ the data created upstream. The actors who
create and the actors who use data usually have different
requirements. The downstream services can create
materialized views with prejoins.

Key-value stores, search engines and object storage
are tooted as a great for these kinds of data.

In the _analyze phase_ we have services analyzing
the data coming in from upstream services. It is
here we produce insights and data for dash boards.

The _archive phase_ is where we, yes, archive
data because we don't have an operational need
for them anymore. An interesting concept is here
that archiving is simply a downstream service
consuming events and storing them into an archive.
That is; we continuously archive data giving
the upstream services the freedom to delete data
at will.

All this data understandably raises the concern
of storage space (and costs), wherefore the author
looks at the amount of (automatic) data duplication
inside a traditional relational database.

The CQRS pattern is laid on the table and and it is
discussed how to improve it, e.g. by using
_system wide CQRS_. It is rather unclear what
_system wide_ means in this context. Is it a
subsystem or multiple subsystems?

CQRS dictates that
queries should be separated from commands and here
we do that with materialized views, which act
as an inbound bulkhead.

Because we have live archiving we can use
the TTL (Time To Live) feature of the cloud
database to automatically delete old, unused data.

Because _exactly-once_ delivery of messages is
unrealistic we must implement idempotence and
on top of that; order tolerance, because
events may arrive out of order.

We need _deterministic identifiers_ to ensure
idempotence and then generally use
an UPSERT to enter data into the database.

_Inverse optimistic locking_ uses an _oplock_
field (very similar to the ETAG in HTML) to check whether
the current database entity
is of a newer version than the one we
are holding. If our event is out of date we simply
drop it.

By using a _micro event store_ and adding another
stream processor we can effectively combine events
from several sources.

To optimize the materialized views for optimal
performace the _single table design technique_ is
used. Here we "abuse" that schemaless tables basically
can have any type of record in each row and all
the records with one common _partition key_
corresponds to an aggregate root. Then we
can read all the records for that key in one
request.

Some examples of _single table design_
shows the force of the technique.

A deeper explanation of _Change Data Capture (CDC)_
follows and how it can be used to do
database-first event sourcing. The CDC is in
essence a stream processor that we don't have
to implement ourselves.

Deletes are handled using _soft delete_ and
_ttl_.

_Latching_ is a technique used when having
two versions of the same service to avoid
having infinite loops in the event streams.

## 6. A Best Friend for the Frontend

Everybody needs a a best friend, even if
you're just a facade.

Again, there's some confusion about what
a "system" is.

BFFs are there support end users. And one BFF service
is responsible for one user activity. And _activity_ is
here quite vague, but it generally corresponds to having
one BFF service for each micro-app or mobile application.

The on-going restaurant example has some fine examples on
where to cut it.

The author claims that it is typical to use the same
programming language in the frontend and backend. I have
no idea whether this is true, but choose to be sceptical.

Just as any other service in our "system" a BFF is
an autonomous service with its own datastore.

_The all-important job of a BFF service is to provide
a human actor with the ability to execute a specific set
of queries and/or commands_.

This job is fulfilled by using query and command functions
in the best Function-as-a-Service style.

Also _listener_ and _trigger_ functions are used to
consume and produce events.

For each actual business oriented function we
also have a _handler_ and a _connector_ function
which abstracts the environment in which we run.

The business function then works with a _Model_ - a
small slice of the domain model.

There is a fine discussion about when to use
REST and GraphQL.

There are - of course - several kinds of BFF Services:

CRUD BFF, List-of-values (Lov) BFF, Task BFF,
Search BFF, Action BFF, Dashboard BFF,
Reporting BFF, Archive BFF.

## 7. Bridging Intersystem Gaps

Well, sometimes there's a legacy to be
fullfilled. We need to talk to other
systems, some of which may be out of (our)
control.

Here at the macro level the _External Service Gateway (ESG) Pattern_ will with the aid of ports and adapters
help us out.

The _Domain Events_ can be considered
_ports_ and the ESG services themselves
are the _adapters_

Each ESG adapts one single external system and
is a separately deployable automonous service which
also have its own repository.

An ESG functions as a bulkhead and can
use e.g. _circuit breaker_ to avoid
overpowering the external system and to
protect itself.

External systems can of course be both downstream and
upstream and how we connect to it
is entirely up to the external system. Does
it have an API? Webhook? A SQL database? Is it
sync/async?

It is up to the ESG to shield the rest of the
system (the entire set of subsystems) from all that,
and the ESG is most likely in itself a separate subsystem, in
practice mimicking (parts of) the external system.

When integrating with other systems at the same cloud
provider you are free to use whatever event bus it has available.

But if you are integrating with systems located
at another provider, you may not be as lucky. Usually
the integration will be done with an ESG employing
API calls and using webhooks.

If the external system is a so-called legacy
system (without any proper integration points) you
only means is often using direct SQL. Both ingress
and egress. In egress scenarios a circuit breaker
may often come in handy to avoid overloading the
external system. Ingress may use polling from the
external database comparing with what is already
synchronized. This is a long-running process
so it cannot be a function. A serverless container
is the choice here.

In the situation where you would want other systems
to take on the burden of integrating with your system
you can create an API, for other systems to call you
and a _Service Provider Interface (SPI)_
to allow for notifying other systems.

The calls can be both events and commands and the
notifications can be webhooks and simple queries.
For queries it may be advantageous to use
graphql.

Integrations still need to account for idempotence, and
enriching data, e.g. a customer when given only a customer id
is also often necessary.

The _latching_ technique previously mentioned
may also be applicable here.

_Slow data_ may be refreshed on a scheduled basis, whereas
_fast data_ should be closer to real time.

## 8. Reacting to Events with More Events

As if one was not, but no worry, all is under
control!

This chapter turns the attention to _control services_
which work as _mediators_ between BFFs and ESGs and contains
the rules and business logic of the organization.

_Control services_ react to events by producing more events
by using a continuous _action-event-reaction loop_.

The events produced are _higher-order facts_ infered from
the consumed _lower-order facts_.

A _listener_ function _collects_, _correlates_, and
_collates_ events in a micro events store to ensure
idempotence, order tolerance and correlation.

From there the
_trigger_ function _evaluates_ rules against the
collected and collated events. Proper higher-order events
are then emitted.

The _collect_ part decides what events to collect.
Then _correlate_ - by using a micro event store* correlates
multiple events, e.g. with a *single table design\*.

_Collate_ uses the micro events store to ensure
order tolerance. It is important to have identifiers
that enables us to know in which order events was
generated. A UUID version v1 is a good candidate.

The trigger function will _evaluate_ each time a
event is inserted into the micro events store. There
are naturally many ways to evaluate the events and
eventually (see what I did there?) _emit_ a new
_higher order_ event.

Remember to use the _time to live (ttl)_ of the
database to remove events from the micro events
store when they are no longer needed.

_Orchestrating business processes_ - that is;
managing a long-lived flow of activities, ensuring
the execution in a specific sequence can be done
with to general approaches: _choreagraphy_ and
_orchestration_.

Basic processes can be modelled with _choreagraphy_
but there limits which are quickly reached after which
_orchestration_ steps on stage. That role is played
by a _control service_, which orchestrates the proces
by - as usual - reacting to events by producing
new - orchestrating - events.

It is important to understand that this is the only
thing the process service does. A workflow starts
with an _entry_ event, e.g. because a user clicks
a button, which makes the BFF send an _entry event_, which
triggers the workflow in the process service.

The process service then sends orchestration events
and it couldn't care less who responds to them. A flow
stops when someone sends the _exit event_.

_Fan-out_ and _forks and joins_ are examples of
_parallel execution_.

_Sagas_ can be implemented by using
_compensating transactions_ and _abort events_. A
compensating transactions is definitely not the
same as a _rollback_. The previous events still
exist.

And _abort event_ is emitted from a boundary
service (BFF and ESG) when it is unable
to complete its work.

A saga can be modelled with either choreagraphy or
orchestration, but as soon as the sagas is more
complicated than trivial one should choose
orchestration.

_Event-sourcing snapshots_ are useful when it gets
too expensive to recalcuate the aggregates/state
from events over and over again. This is of course
a very real concern in stateless, serverless functions.

A BFF service is free to do this, of course, since
it materializes its own views. But if you have a lot
of BFFs this may turn out to be all in all too
costly.

It is possible to use _control services_ to collect
events and then emit _higher-order snapshot_ events.
BFFs can then use these to materialize views.

As it has already been established distributed
transations doesn't scale well, wherefore we have
been forced to look in other directions, especially
_eventual consistency_.

To make _eventual consistency_ easier Pat Helland
in his paper [Building on Quicksand](http://arxiv.org/pdf/0909.1788)
describes _ACID 2.0_: Associative, Commutative,
Idempotent, Distributed.

If events fulfill these properties (with especially
distributed as an obvious one) it makes calculating
the current state (and thereby snapshots) much easier,
since ordering of the events doesn't matter.

_More complex event processing_ happens when we
handle more events for each decision made.
_Decision tables_ are an effective tool for
figuring how to handle multiple events.

It may be difficult to know when "you're done", if
an exit event never shows up. _Expired_ events
can help you here.

## 9. Running in Multiple Regions

_Sooner or later a given cloud provider
will experience a news-worthy regional disruption_.

This is why you may want to have your system
running in multiple regions using either
_primary/hot-secondary_ or _active/active_
topology.

Since we build our UI as offline-first
we are already somewhat prepared for a disruption.

Eventual consistency may turn into _protracted_
eventual consistency.

A regional failover should be automatic and for
this to happen we need to check the regional
health. The _regional health check service_ is
run in each region checks availability of all
the cloud services we use, to give us a picture
of the general health. It also periodically sends
_tracer events_ through various services. If it
haven't heard anything from the previous tracer
when pinged again it returns 5xx error.

Regional routing and CDNs are essential to
smooth failovers. CDNs are especially used
for html/css/etc. for the BFFs.

In each region there is a systematic dns name
for the apis (and bffs), which can be interpolated
to a global dns name.

One way to keep both (or more) regions
in sync (eventually): Using a _global bus_ with
automatic health check that decides which way
events flow.

When replication data across regions we can
choose to replicate change events or domain events.
It is recommended, though, to not use domain
events as we are then in practice performing
duplicate processing of every domain event
in each additional region.

Furthermore it is recommended to replicate not
at the bus level but at the datastore level.

_Change event replication is much more straightforward
than domain event replication_. A _change event_ is the
event emitted by the datastore's CDC (Change Data Capture)
streams.

Many cloud datastores such as DynamoDB, S3, Azure Cosmos DB
support replication across regions, which means you
don't have to worry (much) about it. You do have to make sure, though,
that there is a region field so you can avoid triggering
on writes from other regions.

It is worth noting that this replication is something each
service should consider; if the service needs to run
in multiple regions that datastore should be configured
to replicate.

When an actual region fails it is time for a failover.

For _queries_ it is preferred to return stale data
over no data. The application _must_ be transparent
about the age of the data and the state of the system.
A caching strategy called _stale-while-revalidate_ is
a key technique for a smooth user experience during
a failover.

A user issues _commands_ and when a region fails
the API will give a 5xx or maybe even timeout.
It is necessary to update the local cache of the
data in the browser (probably means necessitates
duplicating some business logic) and mark it
as _pending_ and being transparent to the user
about this.

A _trigger_ flow of a service can fail in many
ways and there is nothing much we can do
other than relying on the protracted
eventual consistency which we have worked
so hard to ensure.

Also _listeners_ may fail and here, too, there
is not much to do about it.

Another interesting aspect is _external systems_
which may not even have multi-regional setups. And
if they do it may be problematic if the external
system is not _order tolerant_.

_Cron jobs_ are still needed and are
implemented using control services. We have to
be sure that we don't execute them in all regions, since
that would lead to duplicate work. One region
should serve as the _primary_ and the results should
be replicated to the other regions.

## 10. Securing Autonomous Subsystems in Depth

If you don't want a gloomy day when your data end
up on the web, you have to be sure, and secure.

Even though it in itself
is not enough, running serverless does help, since
a lot of the security infrastructure is take care
of by the provider.

Security is built around accounts which have
to be secured. One important aspect here is
to not manually configure anything: Use
automation: use _accounts-as-code_.

It should be going without saying that
the production environment and non-production
environment does NOT share accounts.

We need some standard roles (and permissions), e.g.
Super user, Power User and Read-only.

MFA (Multi-factor authentication) is mandatory.
Access keys for developers should, of course, not be shared, should not be put into source control, should be rotated
periodically and should require MFA, as well.

_Securing CD/CD pipelines_ is as a starting point
done by limiting the permissions of the pipeline.
There are probably differences on how the pipelines
of the various providers work, but AWS have a very neat
security feature: An account can _assume_ a role, which
means that the account itself doesn't need any permissions
apart from being able to login. When the account needs
to do something specific it _assumes_ a role (if allowed)
which has the needed permissions. So it is to no use for
an attacker to compromise the account since the various
role names has to be known, too.

The pipeline should use only access keys, and they
can usually be stored as a secret in the CI/CD tool.
It should not be logged and it should be rotated.

The chapter is very, very specific to AWS, but still
the general patterns of security absolutely applies to
other providers, which of course also have e.g. firewalls
and CDNs.

When _securing the perimeter_ it is adviced to
look at [OWASP](https://owasp.org/www-project-top-ten/).

_Web Application Firewall_ (or similar) should
be configured to avoid e.g. SQL Injection,
cross-site scripting (XSS). All calls to a BFF or
ESG should be encrypted, since we are commonly
passing along a JWT bearer token.

In AWS, the serverless services require HTTPS. CDNs
doesn't require it but should be configured to have it.

Authentication is done using the OpenId Connect (IODC)
protocol.

Each autonomous subsystem should have its own user
pool and security configuration. This allows for
some subsystems to have e.g. social logins whereas
others don't.

User roles can be used to do conditional rendering
in the UI and likewise to protect routes.

A BFF service should _always_ verify the
JWT token received. The cloud provider might
have infrastructure in place to do that.

_Securing access to individual data records_ can
be a challenge, but should be taken _very_ serious.
Serverless systems are _very_ often multi-tenant, so
querying data for the wrong user is an easy trap to
fall in.

As always use the _least privilege_ principle.

When storing data it should be encrypted at
the application level using e.g.
_envelope encyrption_.

_Deleting data according to GDPR_ can be done
using _crypto-shredding_ where we basically
encrypt a data key with a _subject-specific_ key.
When the _subject_ is deleted we simply delete
the corresponding key. The data key can now not
be decrypted.

ESGs connects to external systems in a variety
of ways: username/password, access keys, api keys,
and probably other esoteric ways. These should of course
not be stored with the ESG but instead be stored
in a Keyvault.

## 11. Choreographing Deployment and Delivery

Let's prepare a dance for the stage and
audience.

It is of course very neat with all the fancy
architectural traits of our system but they
are up to no good if we cannot deploy our
code, safely, without interrupting anything for
our users; we need zero downtime deployments.

_Continuous discovery_ allows us to perform
experiments to discover the right solution.
We need regression tests to experiment, so
we can make sure that the experiment does not
break anything else.

_Continuous testing_ include static analysis,
unit testing, integration testing, contract
testing, end-to-end testing, smoke testing
(synthetics), and anomaly detection.

No matter how much we test we are surely
going to mess up at some time, so _risk
mitigation_ is essential.

Deploying only small changes and _decoupling
deployment from release_ helps a lot. Using
_feature flags_ (in various disguises) lets
us deploy code that stays dormant until we
explicitly enable it by flipping a feature
flag, of which there are several types e.g.: natural,
keystone, artifical,

Having strict _observability_ allows us
to _fail forward fast_ when we do mess up.

To achieve zero-downtime deployments we need
to apply _The Robustness principle_, also
known as [Postel's Law](https://en.wikipedia.org/wiki/Robustness_principle) together with
leapfrogging deployments (and a considerable
amount of governance - the so-called planning).

From here on the author moves in to the
terrain of planning using concepts such as
story mapping, story planning and task roadmaps.

He describes a development workflow with creating a
branch, pull request, merge to master, canary
deployment, feature flipping to help ensure
that we don't break other stuff while working
on a feature.

The canary deployment and feature flipping
are essential tools in the experiment. When
we feel safe we haven't broken anything we
can then do a _general availability_ release,
where the feature is enabled for all users.

The CI/CD pipelines should naturally
run all tests, no matter whether it is
[solitary or sociable tests](https://martinfowler.com/bliki/UnitTest.html).

The usual testing pyramid is replaced
with a testing honeycomb where the focus
is integration testing. Since our entire
architecture is built around sensiblwe
decoupling principles the integration testing
is done using _contract testing_, where VCR-tools
(yes, it IS Video Cassette Recorder) are used
to record one end of the conversations and mock
tools then replay this. We can then ensure that
we don't make obvious breaking changes to a contract.

End to end testing is implemented by
_transitive end-to-end testing_, where
we test a selected "series" of services.
This is clearly not put together without serious
effort and has some maintenance overhead where
the services included should be carefully
considered. High-risk (costly when down) would
be among the most desirable to test.

A process for implementing _regional canary deployments_
is discussed and the chapter is rounded of with
a description of \*synthetics" where we
continuously (scheduled) smoke-test our system
with synthetic data.

## 12. Optimizing Observability

There's no need to go anywhere if we cannot see
where we are going, so let's Dashboard the heck out of it...

![Dashboard](/data/blogs/software-architecture-patterns-for-serverless-systems/dashboard.jpg)

With serverless we don't need to worry about monitoring
infrastructure, the provider does that. This allows us to
shift our focus to monitoring the applications/subsystems/services
to see what they are doing when.

Cost is one of the drivers for moving stuff into the cloud, but
obviously not the only one. And cost is complicated. It's not
just how much does it cost to run it, it's also how much it
costs to build it. Nevertheless, cloud cost is a metric (the
costs to build is a derivative from e.g. lead times), which
is fairly easy to measure, since the provider most definitely
makes sure to do exactly that.

We can break down that cost by subsystem/service/function etc. to
be aware of where valuable optimizations might be applicable.

Cloud cost can be divided into _expected_, _unexpected (hidden)_,
and _governance_. There seems to be some empiri that they
often account for about one third each.

_Governance_ covers things such as auditing, backups, and
observability.

_Unexpected_ is logging, encruption, replication, data tranfers,
and what have you.

_Expected_ includes cloud services, e.g. functions, messaging,
and datastores.

It is also an important observation that the
_Total Cost of Ownership (TCO)_ of serverless-first tends
to be lower than non-serverless especially because costs
in non-prod environments scale to zero when not in use.

We also have a lot of observability that allows us to spot
possibilities for optimization.

All this attention to cost is called _FinOps_. Mr. Wardley
had
[some initial thoughts](https://www.linkedin.com/pulse/why-fuss-serverless-simon-wardley/)
about that in 2016.

[It is recommended](https://www.datadoghq.com/blog/monitoring-101-collecting-data/)
grouping observability data into _work metrics_,
_resource metrics_, and _system events_.

_Resource metrics_ describe how our services use resources
(obviously), such as CPU, memory, datastores, streams,
and so on.

[The USE method](https://www.brendangregg.com/usemethod.html)
divides these into _Utilization_, _Saturation_, and _Errors_.

_Utilization_ is worth monitoring, so we know when we
are getting close to the capacity limits of given resources.
This could be something like concurrent function invocations.

_Saturation_ is when we exceed some capacity limits and
throttling sets in.

_Errors_ can be grouped into _retriable_ and _non-retriable_.

We clearly don't want to watch the monitoring all day long,
so we need to have the system watching it for us.

When the system spots something of interest (well, something _we_
deemed interesting) it records a _system event_. Some system
events - or possibly a stream of them - may warrant that the
team responsible should be alerted. But be weary of
_alert fatigue_.

_[The RED Method](https://grafana.com/files/grafanacon_eu_2018/Tom_Wilkie_GrafanaCon_EU_2018.pdf)_ recommends monitoring
metrics for _rate_, _error_, and _duration_ for each service.

Using some kind af machine learning will make it possible to
look into _anomaly detection_, to make the system figure
out what may be interesting.

We now have a well-founded basis for knowing what the system
is doing, but what are the users doing?

_Real User Monitoring (RUM)_ is easy to add to a web application
and allows us to see e.g. page view counts, page times, etc.

It is, though, also very valuable to have _synthetic users_
which massage the system (via a browser) on a scheduled
basis. These users take a lot of work to setup, so be sure
to focus the work on important parts of the system.

Having all these data allows us to _tune continuously_ looking
at e.g. function memory allocation, cold starts, timeouts
and retries, and cache-control. All ways to improve performance,
user satisfaction and costs.

## 13. Don't Delay, Start Experimentation.

We want to see that _ExperimentationStarted event_ on the bus!

The chapter is basically a (very short) summary of the book
together with some valuable advice on how to get started.

Look at the development as product-oriented, instead of
project-oriented.

Look into the right tools for the job, e.g.
since JavaScript/TypeScript is good for the frontend it
seems obvious to continue that into the BFF (node also
has very short startup times, so cold starts are not a problem).

Use the right datastore for the job, well, for the data.

The chapter rounds off with a few paragraphs on how to best use more than one provider.

---

# Conclusions

It is fascinating how _fairly_ easy it is to do
serverless with AWS. By easy I am refering
to how little code (yaml/JavaScript) it takes
to accomplish some rather complicated tasks. The
(JavaScript) libraries from AWS seem to be
very mature and extensive. It is clear that AWS
is the oldest in the game.

Now on to the three stars, which seems like
not a lot. There are two main reasons:

Reason 1: The author has a tendency to - especially further on
in the book - to say "here is a piece of code that
does this and that" and then lists some yaml or
JavaScript, which you have no idea what does
if you happen to not be an expert in AWS. This
seems unnecessary and honestly a bit lazy. He
does have, though, an
[extensive repository](https://github.com/jgilbert01/templates)
with all the code samples (still mostly AWS specific, though).

The author also assumes, obviously, that you
_all_ your services are JavaScript running on node. That may
not be the case.

Reason 2: The book is simply too long (680 pages). It is a hard
read, because it is so long. If the book was 150-200 pages shorter I would probably have given it 4 stars.

That said: The book has immense amounts of
invaluable concepts, principles and guides on how to
develop in a serverless environment. Coupled
with guides and documentation from _your_
favorite provider this book definitely helps
you set sail safely in those perilous
skies.
