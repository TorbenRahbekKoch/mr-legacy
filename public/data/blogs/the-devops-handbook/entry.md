# The DevOps Handbook, 2nd edition - a review

**Rating**

[Rating: ⍟⍟⍟⍟◯](/blogs/how-am-i-doing-my-reviews)

![Cover of The DevOps Handbook](/data/blogs/the-devops-handbook/the-devops-handbook.jpeg)

I'm reading [the O'Reilly ebook](https://learning.oreilly.com/library/view/the-devops-handbook/9781098182281/).

Written by Gene Kim, Jez Humble, Patrick Debois, John Willis, Nicole Forsgren.

# The review

Following the successes of [The Phoenix Project](/blogs/the-phoenix-project),
[The Unicorn Project](/blogs/the-unicorn-project) and [Accelerate](/blogs/accelerate)
it is now time to go into details on how to accomplish those amazing results on
your own turf. How to break down those silos and have work flow unhindered through the 
organization.


## Preface

Dispelling some myths of DevOps establishes a firm foundation for the rest of the book:

- DevOps Is Only for Startups
- DevOps Replaces Agile
- DevOps Is Incompatible with ITIL
- Myth—DevOps Is Incompatible with Information Security and Compliance
- Myth—DevOps Means Eliminating IT Operations, or “NoOps”
- Myth—DevOps Is Just “Infrastructure as Code” or Automation:
- Myth—DevOps Is Only for Open-Source Software

*DevOps is a manifestation of creating dynamic, learning organizations that continually reinforce high trust cultural norms*

## Introduction

*Imagine a world where product owners, Development, QA, IT Operations, and Infosec work together, not only to help each other, but also to ensure that the overall organization succeeds*

*cross-functional teams rigorously test their hypotheses of which features will most delight users and advance the organizational goals*

The core and on the surface unsolvable problem for an organization to respond rapidly to
a rapidly changing market and at the same time provide a stable and reliable service to the
customer lies at the heart of DevOps.

This obviously goes beyond having *infrastructure as code*. There is very much a human
factor at the core of this. DevOps solves a lot of problems. It allows the organization
to move faster and at the same time deliver a better product and on to of that reducing burnout, by removing obstacles, reducing context switching and rework.

The essence of Agile is (in my humble opinion) is fast feedback and DevOps introduces
fast feedback at every step of the process. I'd argue that using Event Modeling to
model the software adds fast feedback before even really starting "the process". Add 
to that automated testing, telemetry, small batches and you have a formula for 
delivering the right software quickly and smoothly. Is there a learning curve? 
Yes, of course there is. But likely not as painful as one might think.

The culture must blameless, trusting and collaborative, teams must be long-lived (stable, not static). Going forward we train a chaos monkey to ínject faults into the production
environment, so we learn to fail in predictable ways.

The organizational impact goes further than "just" having happy employees. 
DevOps also enables the bottom line to become higher (pun intended).

It is important to mention that DevOps is based on solid research, all in all 
going back decades. Just about everybody have heard about Toyota and lean
manufacturing. DevOps is in it's essence lean manufacturing for software
development.

## Part I - The Tree Ways

The three ways where introduced to us by Erik in 
[The Phoenix Project](/blogs/the-phoenix-project) and this
part of the book takes us on a deep dive into them.

### Part I - Introduction

*DevOps is the outcome of applying the most trusted principles from the domain of physical manufacturing and leadership to the IT value stream.*

DevOps generally has root in *lean practices* and *systems thinking*
and is also seen as the logical continuation of the Agile movement.

Practices such as continuous build, test and integration was later
build upon by Jez Humble and David Farley to extend the concepts
into continuous delivery.

*The improvement kata* is the most important practice of all.

### 1. Agile, Continuous delivery and the three ways

A short introduction to the theory of Lean Manufacturing and
The Manufacturing Value Stream.

Even though there is (rarely) anything physical being moved 
around, The Technology Value Stream is very much the same.

It all starts when we've decided that we're going to build something:
We've accepted the work, added it to our backlog. 

This starts the value stream *Deployment lead time* where our goal
is to have design and development happening at the same time as
testing, deployment and operations. This enables both fast flow and
high quality.

The difference between Lead Time and Process Time is important.
The Lead Time is from when the ticket is created (we decided we're
going to do this) until deployed, whereas Process Time is when the
actual work starts until deployed.

Lead Time is what the customer sees, but Process Time is where
we can find time to save, often by reducing wait time. And if the Process Time gets shorter,
so does Lead Time and we can generally do more work (produce
more outcome). 

Some of the labels for obtaining "deployment lead times of minutes"
are modular, well encapsulated, loosely coupled architecture. Automated tests (an automation in general) are essential for
short deployment lead times.

A third interesting metric is *percent complete and accurate (%C/A)*, which reflects the quality in each step of the value stream.

*Flow metrics* can be divided into

- Flow velocity
- Flow effeciency
- Flow time
- Flow load
- Flow distribution

*The three ways* from [The Phoenix Project](/blogs/the-phoenix-project):

1. Enables fast left-to-right flow of work from Development to Operations to customer.
2. Enables fast and constant feedback from right to left at all stages of the value stream.
3. Enables the creation of a generative, high-trust culture.

Research has shown that adopting the three ways leads to 
superior outcomes for both organizations and people.

The chaper rounds off with a case study from American Airlines.

### 2. The First Way: The Principles of Flow

Fast and smooth flow of work from Development to Operations is
key to The First Way in order to quickly deliver value to
customers.

Making work visible, reducing batch sizes, building quality prevents
defects from being passed downstream.

In software development and IT in general, moving work around is basically just the click of a button. 

Kanban boards, sprint planning boards are good tools for visualizing
the work and where it may be waiting.

A kanban board should preferable show the entire value stream where
work is only finished when running in production. It should be a 
global view allowing for global rather than local optimization.

*Work in Process (WIP)* should be controlled and limited to avoid context switching which is detrimental to performance. 

An interesting observation is that when WIP is limited you may
find you have nothing to do, because you are waiting on someone else.
Here it is *so* tempting to start new work, but it turns out that
it is far better to figure out what the delay is and fix that
problem. *Stop starting. Start finishing*.

*Reducing batch sizes* makes it - obviously, one should think - far
easier to manage a piece of work, since it is, obviously, smaller.
This also limites the potential risk of the work done. It results
in less WIP, faster lead times, faster detection of errors and less
rework.

*Reducing the number of handoffs* will make the work queue up 
in fewer places increasing global wait times. A handoff inevitable
causes some loss of knowledge and with enough handoffs it'll end up
not being known what problem the piece of work actually solves making
e.g. prioritization extra hard. The extra wait times naturally also
extends the delivery lead time. We reduce the number of handoffs
by automating many of the steps along the value stream.

*Identifying constraints* is essential to improve work capacity and
throughput of the value stream. 

We therefore need to continually identify where constraints are and
make improvements by using *Goldratt's five focusing steps*:

- Identify the constraint
- Exploit the constraint
- Subordinate everything else to the constraint
- Elevate the constraint
- Repeat

In transformations to DevOps there are often constraints
in environment creation, code deployment, testing, and 
architecture. When all the constraints here are broken the
remaining constraints in the organization are likely to be
in e.g. product management. 