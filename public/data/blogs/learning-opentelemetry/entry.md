# Learning OpenTelemetry - a review

**Rating**

[Rating: ⍟⍟⍟◯◯](/blogs/how-am-i-doing-my-reviews)

![Book cover](/data/blogs/learning-opentelemetry/learningopentelemetry.jpeg)

I'm reading the [O'Reilly ebook](https://learning.oreilly.com/library/view/learning-opentelemetry/9781098147174/).

It is written by Ted Young and Austin Parker.

See also [my reading list](/pages/reading-list) and [resources](/pages/resources)

# Who is it for?

Anyone wanting to get their feet wet with OpenTelemetry.

# What is it about?

It is about OpenTelemetry. The concepts, the philosophy, the
architecture.

---

# The Review

## 1. The State of Modern Observability

What are you doing?? A sane question to be asking your application, although
it might be ill-equipped for answering it. Telemetry (user, performance) is
needed to properly answer. But observability is not just observing. It is
also _what_ to observe. And it is about collecting, correlating and analyzing
the observations.

Three classic elements in application telemetry are logs, metrics and
distributed tracing. They are are hard to correlate, though, wherefore
we need to come at it from a different angle. _OpenTelemetry_ does
just that; It unifies the observations.

## 2. Why Use OpenTelemetry?

This seems to be a relevant question... :)

There are, of course, many ways you can obtain
the necessary data for observing your system.
OpenTelemetry offers a standardized way. One
standardized way. One unified, standardized
way with three characteristics: hard and soft
context, telemetry layering, and semantic
telemetry.

_Hard context_ is a unique, per-request
identifier, like a correlation id, which should
be passed on to other services taking part
in the request. A hard context directly and
explicitly links measurements that have a causal
relationship. In this way it defines
(runtime) relationships between services
and signals (_a particular form of telemetry_).

_Soft context_ can be server name, customer id,
time, and so on. Soft contexts _may_ link measurements
as the hard context does, but is not guaranteed
to do so.

**Telemetry Layering**

Instead of converting and transforming
telemetry it is valuable to _layer_ signals
and correlate them using e.g. hard context.

**Semantic Telemetry**

_Your ability to understand a software system is
ultimately a cost-optimization exercise._ Recording
telemetry data is not free. It uses CPU, memory,
network bandwidth, and storage. But you need to
store it to be able to analyze it.

**What do people need?**

Different stakeholders have different requirements
for observability. _Developers and Operators_ need
very detailed data. _Security analysts_, _project managers_,
_management_ all need different views for different
purposes.

**Why Use OpenTelemetry?**

It is a universal standard now supported by
Amazon, Azure, and Google. A lot of
[frameworks](https://opentelemetry.io/docs/languages/)
are available.

## 3. OpenTelemetry Overview

There are in OpenTelemetry three primary _signals_:
traces, metrics, and logs.

_Traces_: A way to model work in a distributed system.
Each trace is a collection of related logs, called
_spans_ for a given transaction. Traces can
be grouped/aggregated. A single trace contains
all the information necessary to compute
the "golden signals" (latency, traffic, errors, saturation)
for a single request.

_Metrics_: Numeric measurements and recordings of system state.
Metrics can be linked to other signals through
hard and soft contexts. A special type of hard context
is _exemplars_, which allows linking an event to
spans and traces.

_Logs_: The log support in OpenTelemetry is there
to support existing logging solutions, which
usually does not have any correlating built-in,
wherefore this is done manually by comparing
shared attributes. Logs are still useful when
e.g. working with legacy systems, which cannot
be instrumented.

**Observability Context**

Context is a _propagation mechanism which carries execution-scoped
values across API boundaries and between logically associated execution
units_. _Propagators_ are the means to sending
these _values_ (metadata) and they carry _hard context_ as
well as _baggage_ (soft-context). Once baggage has been added
it cannot be removed and will therefore be sent to all systems
along the execution path, so beware of e.g. privacy issues.

**Attributes and Resources**

An _attribute_ is a key-value pair of string, boolean, floating
point, integer or an array of one of these. Any piece of telemetry
can have up to 128 unique attributes. But of course it is not
_free_ (memory allocations, network bandwidth, cpu)
to add attributes, so choose carefully.

A _resource_ is a special type of attribute, which stays
the same for the entire life of a process. This could be
e.g the server's hostname.

**Semantic Conventions**

OpenTelemetry maintains a set of
[semantic conventions](https://opentelemetry.io/docs/specs/otel/overview/#semantic-conventions)
for contexts.

They help to ensure that attribute keys and values are
the same across multiple clouds, application runtimes and so on.

**OpenTelemetry Protocol**

OpenTelemetry provides a standard data format and protocol
for observability data. It aims to use low amounts of CPU
and memory. The protocol can be used with
[lots of tools](https://opentelemetry.io/ecosystem/vendors/).

OpenTelemetry has
[a thorough guide to versioning](https://opentelemetry.io/docs/specs/otel/versioning-and-stability/) and
[telemetry schemas](https://opentelemetry.io/docs/specs/otel/schemas/).

## 4. The OpenTelemetry Architecture

OpenTelemetry has three types of components: instrumentation in applications,
exporters for infrastructure (e.g. Kubernetes), and pipeline components for
sending telemetry to a storage system.

OpenTelemetry must be installed in every application in the system landscape
to work properly.

Libraries can be instrumented "for free", meaning that as long as no
providers are registered there is no overhead in the library.

OpenTelemetry provides instrumentation libraries for many popular
OSS libraries (I'm not sure how this works).

There is an OpenTelemetry API and an OpenTelemetry SDK. The API is
safe to call even when OpenTelemetry is _not_ installed in an application.
It is not clear what "installed in an application" actually means, but
probably it means that some providers have ben registered.

_The SDK is a plug-in framework consisting of sampling algorithms,
lifecycle hooks, and exporters that can be configured using environment
variables or a YAML configuration file._

OpenTelemetry comes with components that to some extent capture
infrastructure telemetry.

**OpenTelemetry Demo**

The OpenTelemetry projects develops and maintains a fully
fledged demo using various languages:

https://github.com/open-telemetry/opentelemetry-demo

with relatively clear instructions for how to run it using e.g. Docker.

Please note that the books description and the actual
demo at the time of writing here already has diverged
quite a bit.

The demo makes it quite clear that observability is not
something you "just do".

A nice tip is to _ensure that you enable good
metamonitoring of your OpenTelemetry infrastructure_.

**The New Observability Model**

OpenTelemetry is in some respect ahead of its time; it e.g.
allows for high-cardinality metrics, which the current
analysis tools does not support that well. But new
observability tools built exclusively for OpenTelemetry
are on the horizon. Check out the OpenTelemetry website
for details.

## 5. Instrumenting Applications

Telemetry doesn't come by itself, of course. The book clearly
states that it does not provide detailed setup instructions, which
also quickly could become inaccurate. OpenTelemetry is still a work
in progress. Please
[use the documentation](https://opentelemetry.io/docs/).

Whatever language you are using for development, you need two
parts to enable OpenTelemetry metrics:

1. The SDK, which processes and exports telemetry.
2. The matching instrumentation libraries.

Some languages/environments, e.g. Java, .NET, NodeJS
have mostly automated setups giving a lot of valuable
metrics out of the box. Of course they also allow
manual setups.

The SDK is installed by adding the proper packages
and then registering _providers_. Before registering
any API call (through the SDK) will be a no-op.

The SDK is made up of providers and there are various
provider types:

**TracerProvider**

There are various types of tracer providers: samplers,
spanProcessors, and exporters. All of these exist in
more variants.

**MeterProvider**

Consists of views, MetricReaders, MetricProducers, and
MetricExporters.

**LoggerProvider**

LoggerProviders include LogRecordProcessors and LogRecordExporters.

**Custom Providers**

Although it is possible to write your own provider to cover
rare, esoteric edge cases, it is highly unlikely that you
will have to.

---

**Configuration Best Practices**

Configuring the SDK can be done in various ways: In code,
environment variables, yaml config files.

At the time of writing (the book) environment variables
is the preferred way; it is then up to the deployment
pipeline to define the proper environment variables.

The OpenTelemetry project has defined a configuration file
format that is the same for all languages supported. This is
now the recommended approach, even though the support between
languages may vary, so be aware.

**Remote Configuration**

OpenTelemetry is developing and Open Agent Management Protocol (OpAMP),
which can be used to remotely (and dynamically on runtime, I guess)
configure Collectors and SDKs. This would be especially useful in
connection with sampling, which is notoriously difficult to configure
by hand.

**Attaching Resources**

Resources tell you _where_ stuff happens and they are attached
to the telemetry by a Collector using _resource detectors_.

Some recourses such as the name and version of your service
should be set manually when initializing OpenTelemetry SDK.

---

**Installing Instrumentation**

Failing to install a critical instrumentation package is the most
common way to break traces, so make sure you know
[how to instrument in your language](https://opentelemetry.io/ecosystem/registry/).

Some Open Source Software (OSS) libraries includes OpenTelemetry
instrumentation. You simply need to install and configure the SDK.

Your own, internal libraries should have the same.

Don't instrument everything, not every line of code has interesting
metrics. If it is not a critical operation it should probably not
be instrumented.

At the time of book writing client telemetry (Real User Monitoring - RUM)
is in development for browsers, iOS and Android.

---

**The Complete Setup Checklist**

A simple getting-started checklist for a successful install
of OpenTelemetry is given.

## 6. Instrumenting Libraries

When a library - out of the box - contains OpenTelemetry instrumentation
it is called _native instrumentation_.

A library emitting metrics should also recommend a default set of
dashboards for monitoring the doings of that library.

OpenTelemetry seperates the instrumentation API and the Implementation,
which makes it (almost) a free lunch to instrument your library.

It is, of course, not entirely free, since you need to carefully
consider what instrumentation (metrics) are needed from your library.

OpenTelemetry promises backwards compatibility. OpenTelemetry API
calls never throw exceptions.

The chapter ends with a checklist for instrumenting your library.

## 7. Observing Infrastructure

If your code don't run it ain't no fun.

You need infrastructure for your code
and - surprise, surprise - you also need to know
how said infrastructure is chugging along.

You need to have either hard or soft context connecting
the infrastructure with your application signals to
justify measuring specific infrastructure signals.

As with application and library metrics you also
need to plan your infrastructure monitoring. Use
semantic conventions to ensure consistency in signals.

It is possible to build custom collectors using the
[Collector Builder](https://opentelemetry.io/docs/collector/custom-collector/).

Your collector, custom or not, is also a kind of infrastructure
which of course also needs monitoring. Your monitors should
be monitored. _Metamonitoring_ :)

Note that the _ballast extensions_ may have been deprecated.

Collectors can be deployed as containers in e.g. Kubernetes.

Kubernetes also exposes lots of metrics to collect, which
is so common an exercises that there are several Kubernetes
specific receivers.

**Serverless Platforms**

Azure Functions and AWS Lambda are quite popular but are
difficult to observe due to the stateless and ephemeral
nature. If you export metrics from the function itself
you must make sure to flush before stopping the function.
But also be aware that including this inside the function
has memory and cpu costs and will increase cold start time.

The provider (Azure/AWS/Google) will typically provide
metrics such as invocation time, resource usage and cold
start time.

Queues and buses introduce other difficulties in correlating
metrics. Thinking in traces and subtraces may help here.

"Starting at the end" - looking at the desired outcome, will
help when planning how to observe your infrastructure.

## 8. Designing Telemetry Pipelines

You gotta make them pipelines somewhat elastic to be
sure to squeeze all the metrics through.

Managing your telemetry is an on-going proces. Applications
change, applications are added, applications are removed.
Applications don't produce metrics in a constant way, there
can be bursts, which the pipeline must be able to handle.

It is generally adviced to have a local collector, partly because
it is very handy for observing the host machine.

When the amount of metrics reaches a certain point it might
be valuable to have _collector pools_ where a load balancer
helps direct the traffic to a bunch of collectors.

Again it is mentioned that manually tuning sampling is
rather difficult, whichs makes us look forward to the Open Agent Management Protocol.

Collector pools (and generally just collectors) can be combined
in various serial as well as parrallel ways making scaling for
individual types of metrics a fairly simple job.

To help optimize cost the OTel Arrow protocol (which is in beta)
can be used to minimize data egress data.

Filtering is another obvious way to minimize cost by removing
data not wanted at all. Traces for health checks are generally
not interesting and there are therefore predefined processors
for filtering these out.

Filtering is generally best handled in a collector as opposed
to in the SDK (in the application).

Sampling is to be avoided if possible.

Look for unused metrics.

Transforming telemetry can be done with the OpenTelemetry
Transformation Language (OTTL), which is yet another YAML format.

It is vital to be aware that telemetry can cross regional boundaries
and you should therefore be very much observant on PII
(personally identifiable information), since rules and regulations
may wary between locations.

Using a _routing processor_ allows you to route telemetry
based on telemetry attributes.

When collectors are spread out on the network (and they often are)
you should ensure that the connections are encrypted using
SSL/TLS to avoid eavesdropping on PII-data.

## 9. Rolling Out Observability

It's better than rickrolling...!

_Observability is a value, in the same way that trust and
transparency are values._

There are three axes along which to roll out observability:

**Deep versus wide**

What problem are you trying to solve?
A specific problematic service? General tracebility
issues?

**Rewriting code versus rewriting collection**

Should you rewrite your application code to take
advantage of OpenTelemetry or should you rewrite
your existing logging solution to collect data
for OpenTelemetry?

**Centralized versus decentralized**

Bottom-up or top-down? Central observability team
or ad-hoc telemetry in each team?

No matter which approach you choose it is vitally
important to _prioritize value_. The business - and
the users - should get value from the metrics collected
and analyzed.

OpenTelemetry is still in the process of
["crossing the chasm"](https://en.wikipedia.org/wiki/Crossing_the_Chasm).

Observability is also a testing tool, when used right. When
doing canary releases the "right metrics" will help you
determine whether the canary died.

The chapter ends with a valuable checklist for rolling
out OpenTelemetry in the organization.

## Appendix A. The OpenTelemetry Project

OpenTelemetry is part of the Cloud Native
Computing Foundation (CNCF), and have had more
than 2800 contributors.

The organizational structure is complex and necessary
because OpenTelemetry is a very large project.

# Conclusion

API, exemplars, agents, signals, metrics, spans, SDK, collectors,
context, traces, attributes, resources, propagators,
baggage, pipelines, providers, instrumentation, layering,
OpAMP, OTTL, OTel Arrow, OTLP.

There are a lot of concepts in OpenTelemetry and the
book doesn't do a very good job of connecting the
dots here.

Even though OpenTelemetry is a moving target it is
not moving _that_ fast.

The book does give a fairly good overview over
OpenTelemetry but might have benefitted from a
glossary/dictionary with a short description for
each term. There is an extensive index
but that is actually too extensive for looking up
those terms.

The book generally feels a bit unstructured and
this together with the missing concept dots earns
it three stars.
