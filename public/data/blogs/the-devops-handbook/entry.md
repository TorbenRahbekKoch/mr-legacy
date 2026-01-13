# The DevOps Handbook, 2nd edition - a review

**Rating**

[Rating: ⍟⍟⍟⍟◯](/blogs/how-am-i-doing-my-reviews)

![Cover of The DevOps Handbook](/data/blogs/the-devops-handbook/the-devops-handbook.jpeg)

I'm reading [the O'Reilly ebook](https://learning.oreilly.com/library/view/the-devops-handbook/9781098182281/).

Written by Gene Kim, Jez Humble, Patrick Debois, John Willis, Nicole Forsgren.

I'm publishing the review as I read the book.

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

## Part II - Where to start

### Part II - Introduction

Where to begin, where to begin...?

It's just as with Agile. You cannot transform the entire
company in one go. But in opposition to Agile you'll gain
value simply by starting. And more value by starting right.

### 5. Selecting which value stream to start with

*When we're in trouble, we don't get very many shots.*

Don't select value streams or areas of transformation on 
a willy-nilly feeling.

**Nordstrom's DevOps Transformation**

A case study of Nordstrom and how their DevOps transformation
started with their mobile application, which was in a bad state.

A first goal was faster or on-demand releases (hotfixes). One
means was to eliminate testing as a separate phase of work and
instead integrate it into everyone's daily work.

It is an interesting case-study with a lot of valuable insight.

**Greenfield vs. Brownfield Services**

Debunking the myth that DevOps is only for greenfield projects.
Research shows that *the age of the application or even the technology used was not a significant predictor of performance*.

A number of successful DevOps transformations of
existing systems is listed along with with a case study of
the US Air Force, which made great use of the 
[Strangler Fig Pattern](https://martinfowler.com/bliki/StranglerFigApplication.html)
and
[Gall's Law](https://en.wikipedia.org/wiki/John_Gall_(author)#Gall's_law).

**Consider Both Systems of Record and Systems of Engagement**

In [Bimodal IT](https://www.devx.com/terms/bimodal-it/) we
have Type 1: *systems of record*, where the organization focuses
on getting it right, and Type 2: *systems of engagement*, where
the organization focuses on doing it fast.

Doing DevOps enables collapsing this, since it is now possible
to *simultaneously deliver higher levels of throughput and 
reliability*.

When improving brownfield systems, it is important to honour
[Kent Beck: Make the change easy, then make the easy change](https://tidyfirst.substack.com/p/tidy-first-example) and of course also
[Make it run, make it right, make it fast](https://tidyfirst.substack.com/p/mastering-programming).

**Start With the Most Sympathetic and Innovative Groups**

All organizations have groups of "let's just continue doing
what we do. We know how to do that" and some organizations have
the "Heck yeah, let's try that!" groups. Start with the last. 

And naturally don't start everywhere all at once. Keep it tight.

**Expanding DevOps Across Our Organization**

Note that *we must demonstrate early wins and broadcast our successes*.

This also enables us to discover if we've chosen the wrong
value stream to begin with. 

According to Dr. Roberto Fernandez the ideal phases for adoption
are:

1. Find innovators and early adopters
2. Build critical mass and silent majority
3. Identify the holdouts

*Leading change requires courage, especially in corporate environments where people are scared and fight you*. This is
important. People are scared of what they don't understand, so
make it visible and understandable.

**Case Study: American Airlines' DevOps Journey II**

*By year three, they had realized that DevOps was really a bigger transformation than just a way of working in IT—it was a business transformation.*

I guess this is something a lot of organizations trying to go Agile
never realizes... ;)

A lot of gold in this case study. 

- Clarity of mission
- Getting something out (MVP) versus getting something perfect
- Finishing versus starting (limiting WIP)

*Leaders needed to change their ways of working as well*.

**Case Study: Saving the Economy From Ruin (With a Hyperscale PaaS) at HMRC (2020)**

Trust, culture, tooling, practices.

*The most important aspect of delivering a system at speed is the ability for engineers to ‘just get on with it'*

**Conclusion**

*By carefully choosing where and how to start, we are able to experiment and learn in areas of our organization that create value without jeopardizing the rest of the organization.*

### 6. Understanding the work in our value stream, making it visible, and expanding it across the organization

Quite a mouthful! 

The understanding begins with a workshop with all major 
stakeholders mapping out the value stream. My personal pet peeve
is that Wardley Mapping may deepen the understanding even more.

When we have a fairly thorough overview of the value stream
we also see where the major problems are and can start
improving those. Incremental is the way forward.

To avoid the classic "transform in your own time" it is 
vital to create a dedicated transformation team, where operates
outside the normal daily operations of the organization.

Measurable goals need to be defined and the planning should, just
as the work, be iterative, so we can change direction when new
information is revealed along the way.

**Reserve 20% of Capacity for Non-Functional Requirements and Reducing Technical Debt**

This is so important! *At least 20% of all Development and Operations
capacity* should be spent on refactoring, automation work, architecture and what is generally known as non-functional
requirements.

This is highlighted by a case study of LinkedIn, where the technical
debt was holding everyone back. They stopped delivering new features
for two months, instead focusing on architecture and automation.

**Increase the Visibility of Work**

To know whether we are making progress, *it’s essential that everyone in the organization knows the current state of work.*

**Use Tools to Reinforce Desired Behavior**

One really interesting observation here is the common backlog
of work crossing different teams. Especially using a Kanban-board
helps make work clearly visible.

Tools, such as chat rooms, and other collaboration tools enables
the various stakeholders in the value stream to keep in touch.
Just beware that this also can be an interruption which levels up
the context switch. It's a balance.

### 7. How to design our organization and architecture with Conway's Law in mind

I was not aware that a more simplified version of Conway's Law
has been coined by Eric S. Raymond: *The organization of the software and the organization of the software team will be congruent; commonly stated as ‘if you have four groups working on a compiler, you’ll get a 4-pass compiler.*

The message is the same: *How we organize our teams has a powerful effect on the software we produce.*

An example of this from Etsy, describes how the idea of decoupling
something instead creates a tight dependency due to the increased
coordination needed.

**Organizational Archetypes**

Functional, Matrix, and Market-oriented organizations. 

Functional-oriented organizations often organize teams by
specialties easily resulting in silos, which do not have the
full view of the value stream.

Market-oriented teams are - ideally - fully self-contained with
all the expertise needed for the value stream. Often, though, the
organization has a combination of functional and market-oriented
teams. There are simply not enough people to have all the expertise
in all teams.

What is important, though, is the common view of the value streams, so the functional teams can prioritize on their own. A high-trust
culture where teams trust each other decreases friction.

It may come as a surprise for many people that Toyota is highly
organized in a functional way, but *What is decisive is not the form of the organization, but how people act and react.*

Everyone is responsible for quality and therefore testing, automation, operations is everyone's day job.

This also highlights the need for everyone, or at least the 
majority, to be generalists. 

The organization should encourage this, because 
*By cross-training and growing engineering skills, generalists can do orders of magnitude more work than their specialist counterparts, and it also improves our overall flow of work by removing queues and wait time.*

Some managers will complain that generalists are more expensive
(to be honest, I would have thought that specialists are the
expensive ones), but *the business benefits of enabling faster flow are overwhelming*.

**Fund Not Projects but Services and Products**

It is important to *create stable service teams with ongoing funding to execute their own strategy and road map of initiatives.*

I think it was said in Team Topologies that teams should be stable,
but not static.

**Create Loosely Coupled Architectures to Enable Developer Productivity and Safety**

Teams should be able to work as independently as possible. This also ties in to Conway's Lay, which encourages to keep team size
small. 

A small overview of team types in 
[Team Topologies](/blogs/team-topologies) is given followed
by a 2015 case study of Target creating an API Team.

**Conclusion**

Since *we can see how architecture and organizational design can dramatically improve our outcome*, we should be deliberate
about it.

### 8. How to get great outcomes by integration operations into the daily work of development

They don't skimp on the chapter titles ;)

But: *Our goal is to enable user-oriented outcomes where many small teams can quickly and independently deliver value to customers*,
but how do we do that?

The case study of Big Fish Games shows one model called *Ops liaison*, where people from
operations camp out in the various development teams, to help them get into the
operations mindset, thereby enabling the DevOps mindset.

Three strategies helped shape the DevOps transformation at Big Fish Games:

- Create self-service capabilities
- Embed Ops Engineers into the service teams
- Assign Ops liaisons to the service teams

This is a combination of platform team and enabling team from Team Topologies.

**Create Shared Services to Increase Developer Productivity**

The platform team creates the shared services, e.g. getting production-like
environments, deployment pipelines, and so on.

*Without these self-service Operations platforms, the cloud is just Expensive Hosting 2.0*.

The shared services should be seen as real products with the Dev teams as 
the customers. *It’s okay for people to be dependent on our tools, but it’s important that they don’t become dependent on us-*

**Embed Ops Engineers into Our Service Teams**

*Pairing Dev and Ops engineers together is an extremely efficient way to cross-train operations knowledge and expertise into a service team*.

**Assign an Ops Liaison to Each Service Team**

*We can get many of the same benefits by assigning a designated liaison for each product team* and
it allows for supporting more product teams than the embedded ops model.

**Integrate Ops into Dev Rituals**

Whether we are doing standups or push-ups doesn't matter, we want Ops to understand
the weird creature called a developer and the weird incantations we use. And likewise
the Devs need to understand the Ops.

**Invite Ops to Our Dev Standups**

Again, this helps solve problems by sharing knowledge.

**Invite Ops to Our Dev Retrospectives**

And let them also share their findings and learnings. 
*Feedback from Operations helps our product teams better see and understand the downstream impact of decisions they make.*

*We must remind everyone that improvement of daily work is more important than daily work itself*. 

*Without doing this, the productivity of the team will almost certainly grind to a 
halt under the weight of its own technical and process debt.*

**Make Relevant Ops Work Visible on Shared Kanban Boards**

*Because Operations is part of the product value stream, we should put the Operations work that is relevant to product delivery on the shared kanban board. *

**Case Study: Better Ways of Working at Nationwide Building Society (2020)**

*By moving from functional teams in silos to long-lived, multi-skilled teams, Nationwide has seen throughput improve dramatically, as well as improvements in risk and quality and lower costs.*

*Beyond simply bringing Dev and Ops together, Nationwide brought together teams with all the skills necessary to bring value to market—moving from multiple functional teams to single, multiskilled teams. This illustrates the power of breaking down silos in order to move faster.*

## Part III - The First Way: The Technical Practices of Flow

### Part III - Introduction

*We need to reduce the risk associated with deploying and releasing changes into production* which will
be done by implementing *continuous delivery*.

### 9. Create the foundations of our deployment pipeline

It seems that the key is to *ensure that we always use production-like environments at every stage of the value stream*.

**The Enterprise Data Warehouse Story (2009)**

This is really a classic story about everything going wrong and the slowly being made
right. E.g. getting an environment went from eight weeks to one day.

The use of version control was expanded to include everyone in the value stream
(*version control is for everyone in our value stream, including QA, Operations, Infosec, as well as developers*) 
and environments can be created on demand, enabling e.g. developers to run
production-like environments on the own workstations.

**Create Our Single Repository of Truth for the Entire System**

All production artifacts should be put into version control. This includes at least

- Application code
- DB Scripts
- Environment scripts
- Container scripts
- Test scripts
- Release notes
- Cloud configuration files
- Infrastructure (network, dns, firewall, etc.) scripts
- Scripts for setting up build services

We basically need to be able to start from version control and end up with a production
environment running everything as it should be running. Think disaster recovery.

Note that *the use of version control for all production artifacts was a higher predictor for software delivery performance*.

**Make Infrastructure Easier to Rebuild Than to Repair**

Instead of trying to "fix servers", you fix the script that sets them up and run those scripts, basically
deploying new (virtual) servers and taking the old ones down.

This is now known as *immutable infrastructure*. Infrastructure is not changed, it is rebuilt. Servers
are then easily kept up-dated, which is good since *keeping your software current is the best way to secure your codebase.*

**Case Study: How a Hotel Company Ran $30B of Revenue in Containers (2020)**

Containers satisfy three key things: Abstracting infrastructure, specialization, automation.

Even though certificates are no longer a part of the application or managed by developers they
will be in version control.

Zero trust, small (container) images, sidecars. Since containers are so easy to update
they play very well with the "rebuild rather than repair" mindset.

**Modify Our Definition of Development “Done” to Include Running in Production-Like Environments**

A feature is not DONE before it is running in a production-like environment.

*We will only accept development work as done when it can be successfully built, deployed, and confirmed that it runs as expected in a production-like environment*.

**Conclusion**

*By making production infrastructure easier to rebuild than to repair, we make resolving problems easier and faster, as well as making it easier to expand capacity*.

### 10. Enable fast and reliable automated testing

It is a misconception that better observability means less testing. We want to catch errors as
soon as possible, so close to the developer, as possible. Using Event Modeling you can even
catch the errors before one line of code is written.

Automated tests also works as a safety belt securing you when you drive of the road.

**Continuously Build, Test, and Integrate Our Code and Environments**

We want to build quality into our product and do this by shortening the feedback
cycle with automated tests. 

*Our deployment pipeline validates after every change that our code successfully integrates into a production-like environment*.

*it will be used to create self-service builds to UAT (user acceptance testing), integration testing, and security testing environments.*

*we want to package our code only once so that the same packages are used to deploy code throughout our entire deployment pipeline.*

*Code will be deployed into our integrated test and staging environments in the same way that it is deployed into production.*

*The goal of the deployment pipeline is to provide everyone in the value stream, especially developers, the fastest possible feedback that a change has taken us out of a deployable state.*

**Build a Fast and Reliable Automated Validation Test Suite**

Unit tests, Acceptance tests, Integration tests.

*The objective of acceptance tests is to prove that our application does what the customer meant it to.*

**Catch Errors as Early in Our Automated Testing as Possible**

*Any errors should be found with the fastest category of testing possible*

*If we find that unit or acceptance tests are too difficult and expensive to write and maintain, it’s likely that we have an architecture that is too tightly coupled, where strong separation between our module boundaries no longer exists (or maybe never existed)*

**Ensure Tests Run Quickly (In Parallel, If Necessary)**

*We make any build that passes all our automated tests available to use for exploratory testing, as well as for other forms of manual or resource-intensive testing (such as performance testing).*

**Write Our Automated Tests before We Write the Code (“Test-Driven Development”)**

Good, old TDD rears it head again. And it definitely has validity in some cases.

**Automate as Many of Our Manual Tests as Possible**

*Although testing can be automated, creating quality cannot. To have humans executing tests that should be automated is a waste of human potential.

*Teams that only ship features without test automation are shipping risk and building up technical debt*

*Three strategies for teams to ship both features and test automation in their sprints:*

Collaborate, Automate strategically, Build incrementally.

**Integrate Performance Testing into Our Test Suite**

*Our goal is to write and run automated performance tests that validate our performance across the entire application stack (code, database, storage, network, virtualization, etc.) as part of the deployment pipeline so we detect problems early, when the fixes are cheapest and fastest.*

**Integrate Non-Functional Requirements Testing into Our Test Suite**

The -ilities, such as availability, scalability, capacity, security. 

*We must also build automated tests to validate that our environments have been built and configured properly.*

*Use infrastructure as code configuration management tools*

**Pull Our Andon Cord When the Deployment Pipeline Breaks**

It is the spinal cord, so when it breaks we pull together to fix it.

*Whenever someone introduces a change that causes our build or automated tests to fail, no new work is allowed to enter the system until the problem is fixed.*

*Whenever we help someone move their work forward, we help the entire team.*

**Why We Need to Pull the Andon Cord**

Broken Windows, of course.

### 11. Enable and practice continuous integration

*Integration problems result in a significant amount of rework to get back into a deployable state, including conflicting changes that must be manually merged or merges that break our automated or manual tests, usually requiring multiple developers to successfully resolve.*

**HP’s LaserJet Firmware (2014)**

Another classic example of a company drowning in technical debt and using
DevOps practices to dig themselves out.

**Small Batch Development and What Happens When We Commit Code to Trunk Infrequently**

*When merging is difficult, we become less able and motivated to improve and refactor our code, because refactorings are more likely to cause rework for everyone else.*

Make the change easy, then make the easy change:

*When we do not aggressively refactor our codebase, it becomes more difficult to make changes and to maintain over time, slowing down the rate at which we can add new features.*

**Adopt Trunk-Based Development Practices**

Possibly even with *gated commits*. 

**Case Study: Continuous Integration at Bazaarvoice (2012)**

The classic example again, but with an interesting observation:

*The majority of changes required were in our customer service and marketing teams, who had to change their processes, such as changing the schedule of their weekly customer emails to make sure customers knew that feature changes were coming.*

It is clear that DevOps is not just about engineering. It is also about the entire
organization adopting a Product mindset. If we can release more often it changes
the burden for other parts of the organization.

**Conclusion**

It is clear that trunk-based development is an essential tool. When wielded properly
it predicts higher performance if there are three or fewer active branches, branches
are merged at least daily, and there is no such thing as code freezes.

Event Modeling with very narrow slices reduce the risk of stepping on each other's
toes considerably and can therefore easily increase the number of active branches.

### 12. Automate and enable low-risk releases

Starts out with Chuck Rossi telling about deploying at Facebook in 2012. Interesting!

**Automate Our Deployment Process**

Reduce time-consuming steps, reduce the number of handoffs and hence lead times.

*Having developers focus on automating and optimizing the deployment process can lead to significant improvements in deployment flow*,
and this requires that Development and Operations work close together. DevOps.

Deployment to all environments should be the same. And the same packages should be deployed.

Do (automatic!) smoke testing. Test the environments to ensure consistency.

**Case Study: Daily Deployments at CSG International (2013)**

A development team had become very good at releasing to the test environment, but since
deployment to production was in the the hands of Operations, they were not very well
practiced in this.

A Shared Operations Team helped by being resonsible for managing all environments.

They created realistic testing data to simulate full-scale environments to catch
any surprises there sooner.

Eventually doubling production releases and production incidents
went down 91%. MTTR went down by 80%.

**Enable Automated Self-Service Deployments**

*When there are shared goals that span Development and Operations and there is transparency, responsibility, and accountability for deployment outcomes, it doesn’t matter who performs the deployment*.

Anyone should be able to deploy. Anyone should be able to run the automated test suite 
on their own workstation or in a test environment.

*Our goal is to ensure that deployments are fast* with fast feedback, so one can quickly
determine whether deployment was successful.

**Case Study: Etsy—Self-Service Developer Deployment: An Example of Continuous Deployment (2014)**

Etsy became so good at this that *new engineers could perform a production deployment on their first day at work.*.

**Decouple Deployments from Releases**

This is a very interesting part. 

*Deployment is the installation of a specified version of software to a given environment*.

*Release is when we make a feature (or set of features) available to all our customers or a segment of customers*.

*Decoupling these two activities allows us to empower Development and Operations to be responsible for the success of fast and frequent deployments, while enabling product owners to be responsible for the successful business outcomes of the release.*

*As we become able to deploy on demand, how quickly we expose new functionality to customers becomes a business and marketing decision, not a technical decision.*

There are various ways to control this.

**Environment-Based Release Patterns**

This includes Blue-Green deployment, Canary and Cluster System Release Patterns.

**Case Study: Dixons Retail—Blue-Green Deployment for Point-Of-Sale System (2008)**

**Application-Based Patterns to Enable Safer Releases**

Feature toggles/feature flags with the options to do A/B testing and Dark Launches are our favorite.

**Case Study: Dark Launch of Facebook Chat (2008)**

A poster example for how to do a dark launch.

**Survey of Continuous Delivery and Continuous Deployment in Practice**

*Deployments should be low-risk, push-button events we can perform on demand*.

*When trunk is always kept in a releasable state and when we can release on demand at the push of a button during normal business hours, we are doing continuous delivery.*

*Continuous delivery is the prerequisite for continuous deployment just as continuous integration is a prerequisite for continuous delivery*.

**Case Study: Creating a Win-Win for Dev & Ops at CSG (2016)**

Continuing on their journey on *making operations an engineering problem.*

*Our biggest surprise is how hard Ops really is*. That is true, Operations is hard!

**Conclusion**

*Releases and deployments do not have to be high-risk, high-drama affairs that require tens or hundreds of engineers to work around the clock to complete.*

*They can be made entirely routine and a part of everyone’s daily work.*

### 13. Architect for low-risk releases

*The challenge is how to keep migrating from the architecture we have to the architecture we need*.

Generally the fine Martin Fowler has you covered with the strangler fig pattern, which will help you overcome 
the Second Law of Architectural Thermodynamics: The downward spiral.

**An Architecture that Enables Productivity, Testability, and Safety**

*A loosely coupled architecture with well-defined interfaces that enforce how modules connect with each other promotes productivity and safety*.

**Architectural Archetypes: Monoliths vs. Microservices**

*Monolithic architectures are not inherently bad—in fact, they are often the best choice for an organization early in a product life cycle*.

**Case Study: Evolutionary Architecture at Amazon (2002)**

Amazon is one of the most prime examples of converting a strictly monolithic
application to a service oriented architecture.

**Use the Strangler Fig Application Pattern to Safely Evolve Our Enterprise Architecture**

*If the services we call do not have cleanly defined APIs, we should build them or at least hide the complexity of communicating with such systems within a client library that has a cleanly defined API.*

And then move on with *versioned services*/*immutable services*.

Strangler Fig often wins over rewrites, because often *even old bugs often need to be added to the rewritten system.*

**Case Study: Strangler Fig Pattern at Blackboard Learn (2011)**

Changing to well-defined APIs and *building blocks* made developers much more productive
and a lot more happy.

**Conclusion**

*The architecture that our services operate within dictates how we test and deploy our code*.

*We must be able to safely migrate from one architecture to another*.

## Part IV - The Second Way: The Technical Practices of Feedback

