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
problem instead. *Stop starting. Start finishing*.

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

Lean is very keen on eliminating *waste* or *
hardships and waste in the value stream*. The Poppendiecks
lists seven types of waste:

*Partially done work*, which is waiting for getting through all
the goal posts and until then is just sunk cost.

*Extra processes* is any work that does not add value to the
customer: the final, paying one and any downstream work centers.

*Extra features*, e.g. gold plating. Anything that really isn't
needed.

*Task switching*, context switching between different projects, 
meetings and what have you.

*Waiting* obviously delays cycle time having the customer waiting
longer for value.

*Motion* is the amount of effort to move information from one
work to another. Also ties in to Conway's law and the Team Topologies
way of organizing teams so they minimize unnecessary communication.

*Defects* due to e.g. incorrect or missing information causes
rework and wastes time (and money).

Two more types of waste mentioned by Damon Edwards:

*Nonstandard of manual work*, e.g. manual processes for setting
up test environments.

*Heroics* where persons and teams must make an almost Herculean
effort by e.g. creating hundreds of work tickets when doing
a release.

The chapter ends with an interesting case study for an emergency department where it is
really highlighted that you need system thinking to get fast flow.

### 3. The Second Way: The Principles of Feedback

Feedback, feedback, feedback, everywhere, all at once!

One characteristic of a *complex system* is that *it defies
any single person's ability to see the system as a whole and 
understand how all the pieces fit together*. How does one
work safely within such a system?

Since another characteristic is that *doing the same twice
will not predictably or necessarily lead to the same result* so
that e.g. checklists and best practices simply aren't enough. 

To make it safe(r) to work in complex systems, we need to:

- Manage work so problems are revealed
- Swarm and solve problems, to create new knowledge
- Local knowledge is distributed globally in the organization
- Leaders create leaders with these qualities

Feedback and feedforward loops are essential in discovering
problems as they occur. There are, according to Elisabeth
Henrickson, six types of feedback in software development.

- Dev Tests
- Continuous Integration and Testing
- Exploratory Testing
- Acceptance Testing
- Stakeholder Feedback
- User Feedback

Those are in increasing order of the time it takes to get that
specific feedback.

When detecting problems we need to swarm and solve problems and
put the new knowledge obtained to good use so it doesn't happen
again. You don't wait with fixing the problem until the next retro,
where memory has faded. You fix it now so it doesn't spread downstream.

Even though Swarming to solve a local problem distrupts work globally, it enables learning, it prevents loss of critical information. 

**Pull that Andon cord!**

A short case study of *Excella* introducing the virtual 
Andon cord explains the usefullness of it in detail.

It is quite interesting that *adding more inspection steps and approval processes actually increases the likelihood of future failures* wherefore we should aim to *Keep pushing Quality Closer to the Source.* 

Some examples of ineffective quality controls are:

- Requiring another team to complete tedious, manual tasks that could easily be automated
- Requiring approvals from busy people distant from the work
- Creating documentation which become obsolete shortly after it is written
- Pushing large batches of work for approval and then waiting for response

One could add pull requests to this list. 

Everyone in the value stream should find and fix problems as part
of the daily work. 

Everyone's most important customer is, according to Lean, the next
step downstream. We should strive to optimize our work for them. A 
seemingly local-only optimization, but it makes the work of the downstream customer easier, so it is more than a local optimization.

### 4. The Third way: The Principles of Continual Learning and Experimentation

Here we focus on *creating a culture of continual learning and
experimentation*, because it will *create an inspiring, rewarding
workplace where we are excited to work and collaborate with
our peers.*

We can do this by *applying a scientific approach to both process
improvement and product development*.

The type of organization - or rather the culture of the organization - is a predictor for how good we are at
e.g. learning and there are three major culture types: *Pathological*, *Bureaucratic* and *Generative* where only the 
latter is a predictor for high organizational performance.

*Blameless post-mortems (retrospectives)* help build understanding
and improve prevention and detection of incidents because by 
*removing blame, you remove fear, by removing feat, you enable
honesty; and honesty enables prevention*.

**Institutionalize the Improvement of Daily Work**

It's an interesting observation that *in the absence of improvements, processes don’t stay the same—due to chaos and entropy, processes actually degrade over time*, which is
why that *Even more important than daily work is the improvement of daily work.*

This can be done by e.g. *explicitly reserving time to pay down
technical debt*.

**Transform Local Discoveries into Global Improvements**

This is about spreading your learnings to other teams.

Examples of this is *making all our blameless post-mortem
reports searchable by teams trying to solve similar problems*.

**Inject Resilience Patterns into Our Daily Work**

*In the technology value stream, we can introduce the same type of tension into our systems by seeking to always reduce deployment lead times, increase test coverage, decrease test execution times, and even by rearchitecting if necessary to increase developer productivity or increase reliability.*

This is continuous learning on another level. We work on changing
things all the time, creating a sense of tension, but on a 
positive level. This should not be thought of as 
stressful, because it is a deliberate and considered tension. 

*we can introduce the same type of tension into our systems by seeking to always reduce deployment lead times, increase test coverage, decrease test execution times, and even by rearchitecting if necessary to increase developer productivity or increase reliability.*

The Netflix Chaos Monkey is a famous example of actively learning
how to create resilience.

**Leaders Reinforce a Learning Culture**

*The leader’s role is to create the conditions so their team can discover greatness in their daily work.*

Neither leaders or workers can solve (all) problems alone, so leaders
can help formulate strategic goals (True North goals). From these
are derived shorter-term goals, such as *reduce lead time by
10% within the next two weeks*.

This is then executed like a scientific experiment: State the problem
to be solved. Formulate a hypothesis why our attempt at solving it
will actually solve it. How will we test our hypothesis. All these
will inform the next iteration of solving the problem - or new problems.

A extensive list of coaching questions such as *What was your
last step and what happened?* and *What is your condition now?*
will help formulate and execute the experiment.

**Conclusion*

*The Third Way* - fostering a culture of continual learning and
experimentation is building on the principles of *The first and
Second Ways*: improving flow and feedback using an iterative 
approach.
