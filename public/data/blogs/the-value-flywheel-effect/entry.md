# The Value Flywheel Effect - a review

**Rating**

[Rating: ⍟⍟⍟⍟◯](/blogs/how-am-i-doing-my-reviews)

![Book cover](/data/blogs/the-value-flywheel-effect/the-value-flywheel-effect.jpeg)\

By David Anderson, Mark McCann, Michael O'Reilly.

I'm reading [the O'Reilly ebook edition](https://learning.oreilly.com/library/view/the-value-flywheel/9781098157210/).

[Accompanying website](https://theserverlessedge.com/)

## Who is it for?

Anyone who is interested in developing software
effectively. Leaders, architects, team leads,
developers. You know who you are.

## What is it about?

About being truly agile. About not having an IT department, but having
an IT business.

In essence it is a map (pun intended) or about a way to draw
the map showing the path to agile nirvana, in the understanding
that your entire organization needs to be agile, not just the IT
Department.

## Forewords

There are two forewords by Adrian Cockroft and Simon Wardley.

## Introduction

(13 instances of serverless)

Already in the introduction two things are clear: 1. This is a 
book with a *LOT* of words. 2. The authors are very fond of
*serverless*, which occurs 13 times in the introduction and
233 times in the entire book ;)

> When we eliminate the burden of something like infrastructure
concerns for software developers, it creates room for focus,
elsewhere, such as developing software assets.

This refers to the kind of cognitive load called *Extraneous
cognitive load*, which means that the developers have to
expend effort at something not directly relevant for the 
task at hand. I'm glad that this area is beginning to receive so much
attention.

The authors are, as mentioned, very fond of serverless and 
believes that a team should choose serverless as the 
first implementation and only choose something else, if this
is not a good fit. Serverless is likely a very good fit 
especially for event sourced applications. 

The *Flywheel Effect* is introduced as *small wins
accumulating over time to drive momentum*. It is a cycle
with four phases mapped out in detail later in the book.

*Wardley Mapping* is introduced as a tool to obtain
*situational awareness* and where to go from there.

> Today, every leader is a technology leader.

Referring to the fact that many businesses have 
become a software first company. IT is no longer
a separate department. The entire company *is* IT.

## I. Starting the Expedition

### 1. The Value Flywheel Effect

(8 instances of serverless)

>Momentum is a strange thing. It's difficult to imagine
what it will feel like and takes a great deal of
effort to achieve.

Learning new skills and tools, as well as changing
in-grown habits takes time and effort. It is, of course, also
an added mental load, wherefore it must be done a little
at a time. *The Value Flywheel Effect* helps you do this. 
It helps you to continously evaluate your current situation
and adapt your actions (*the next best action*) accordingly.

I think it can be said that it helps your organization
being truly agile.

It does this by using four phases, the first being
*clarity of purpose*. What is it that we want to obtain?
The *why?* This will be covered in detail in Part II.

When we know *why* we then need to know *how*. This is
phase 2: *Challenge & Landscape*, covered in Part III.

*The next best action* is phase 3. The *what*. Part IV.

All this should turn into *Long-term value*. Phase 4
in Part V.

This is a cyclic process. Done over and over again.
Giving small wins (hopefully) in every cycle.

The rest of the chapter goes into some detail 
of the phases and who are the key persons for
each phase.

### 2. Wardley Mapping

(3 instances of serverless)

Since Wardley Mapping is a strong tool for
creating situational awareness it is also a strong
tool to use in each of the flywheel phases.

> Within each phase of the Value Flywheel Effect, it
is essential to use mapping to help direct your path
and course-correct along the way.

Evaluate and adapt. 

Use Wardley Mapping in Phase 1 (which in this
chapter is called *Purpose and Vision*) to 
figure out a *purpose*.

In Phase 2 mapping can be used to asses whether
you have the people and capability to act on your
purpose.

Now we have purpose and situational awareness Phase 3 
is about strategy. Since we are assumed to in IT
it is important to have *a frictionless developer experience*
wherefore *a serverless-first approach* is recommended
*Wardley Mapping* is introduces as a tool to obtain
tries to partly answer that by shortly examining several
other ways to agree on a strategy:

SWOT (strengths, weaknesses, opportunities, threats), 
Business Model Canvas, Mission Statement,
OKRs (Objects and key results), The Strategy Deck,
The Six-Pager, The Backlog, The Story, Objects.

The basically all are static glimpses of the organization
and the market (my naive take on it), whereas mapping - if
used continouously - are current. And furthermore - a map - when
created is easily updated when the steps taken are small.

Also: A mapping is a collaborative process and instead
of challenging a single person objections challenge (and
thereby develop) the map.

The principles of Wardley Mapping are: Courage, Collaboration,
Empathy, Perspective, Narrative, Focus, Dialoge and Challenge.

When starting a map, the Wardley Mapping Canvas can help
you to get started with the six main steps: Purpose, Scope,
Users, User Needs, Value Chain, Map.

In general it is recommended to start with value chains, since
mostly everybody seem to get them and they are therefore easy
conversation starters. 

### 3. How to Wardley Map

(1 instance of serverless)

After a whole chapter with Wardley Mapping why and what
we now get to the how.

This is an introduction to Wardley Mapping, which it of course
takes (a lot of) practice to be good at.

Basically a map is a 2D-diagram with the x-axis having
four stages of evolution: Genesis, Custom Built, Product/Rental,
Commodity/Utility, that is the least common elements on the left
and the most common on the right. The labels can
be different but the ordering must be similar.

There is a *user* who have needs, which are *components*. 
Correspondingly the components can have needs, too.

[A cup of tea](https://twitter.com/swardley/status/1069965123962527745?s=20&t=4NNhqXmcJXzFVZyZM5Vinw)
is a very common example used.

Arrows and rectangles are used for showing
movement and inertia.

The components can be organized into teams and also
into *Pioneer/Settler/Town planners* (PST).

A *pipeline* is showing the evolution of a component.

To keep a map generally simple you can use *submaps*, to move
complexity for a component to another map.

To easy into Wardley Mapping it can be beneficial to
use a grid instead of a continuous spectrum. The y-axis
will then have four labels: Visible, Aware, Unaware, Invisible
denoting how the *user* sees the component. The x-axis stays
the same. It is now easy to label a component with grid numbers.

To use *The Value Flywheel Effect* with Wardley Mapping you turn
your value chain into a map. You would very much like a business
goal on the left of the map - this means that the goal is unique
on the market. If you then can have all the needs of that goal
to the right you are in a very positive situation.

Your stream-aligned teams (product teams) should have 
obstacles (cognitive as well as practical) removed by
using enabling teams and platform teams.

There are three major types of maps in the Value Flywheel:
stack, organization, market.

When mapping the stack you can easily see what components
are unique for this particular business and which components
are commodities, very much like DDDs core and supporting domains.

Mapping the organization can be helpful when trying
to answer "Are we working on the right thing?". The *user*
in the diagram are the *customer* and the *needs* of the
customer is then mapped. If you are not working on those
needs you will have to change direction.

The market is a complex space to map. But it will help
you formulating a "battle plan".

These maps give you situational awareness, helping you
figuring out the next best action.

There are some fine examples for each type of map and I
feel that after reading the book so far I am able to 
read and understand a simple Wardley Map.

### 4. Example Mapping Session.

(Serverless is mentioned 7 times in this chapter)

A mapping session with two persons, walking through
a row of map iterations. 

## II. Phase 1. Clarity of Purpose

Persona: CEO

Tenets:
  - Clarity of purpose
  - Obsess over your time to value
  - Map the market

### 5. Finding Your North Star

(3 instances of serverless)

You need something to guide you, something to navigate by,
where are we going, and the North Star is a fine, well-used
specimen for that.

The "North Star" is usually some metric, but this metric
is often not easily recognizable in the software being
written. This is why *The Value Flywheel* starts with
*Clarity of purpose*. The entire "stack" of people should
be able to clearly see the purpose.

[The Northstar Framework](https://amplitude.com/books/north-star)
is a product management model, which
helps you identify a single, but important metric: the north star.

It also (indirectly) helps focusing on leading (cause)
and lagging (effect) metrics.

To further help discovering leading and lagging metrics 
[Impact Mapping](https://www.impactmapping.org/) 
by Gojko Adzic is brought forward: Why -> Who -> How -> What.

A similar tool is 
[Opportunity Solution Trees](https://www.productplan.com/glossary/opportunity-solution-tree/)
from Teresa Torres

All these three techniques have one thing in
common: They make you think before you build.

And it is important that you can *quantify* your
north star - basically because then you know
whether your are actually pointed towards it. And
connected leading and lagging metrics are critical
for this.

### 6. Obsess Over Time to Value

(No instance of serverless!)

*The delivery of a feature does not necessarily mean
that we have discovered its value*

This ties into the problem with teams not see the 
purpose - they don't have the clarity of purpose. And
the CEO wants innovation!

One of the steps on that stony road is considering
technology as not a cost center. The entire business
is a technology business. Not just the IT department.

*Rate of turn* is a measure for how quickly a change
can be made in the organization after it has been
decided to make it.

Again Wardley Mapping of e.g. value chains can be an effective tool
for finding the inertia areas within the organization.
You then need to remove those obstacles using e.g.
North Start or Impact Mapping.

*Time to Value* is closely related with (I guess)
*time to market*. It is also related with *outcome*.
It measures the entire time from conception of an 
idea to achieved value for the customer.

### 7. Map the Market Competition.

(No instance of serverless!)

*The people building the system that weill
make or break your company are not the experts
in the domain*. This obfuscates the purpose, and 
creates an inertia point between the building and
the value. 

Mapping the market can help you finding the niche, the
missing feature, which the competition does not 
(currently) have.

It is important to start with the customer need
and the Jobs-to-be-done framework is defined to 
do exactly that: Define, categorize, capture and
organize customer needs.

*Each customer need will have activities or capabilities
needed to enable it*. This is value chains. And as
we know Wardley Maps are very good at visualizing those
along with needs and obstacles.

When mapping make sure to dot down observations at the
side of the map. The components on the map should
likely be grouped into Pioneers, Settlers and Town
planners.

### 8. Case Study - A Cloud Guru

(21 instances of serverless)

A walk-through of how *A Cloud Guru* managed to grow
quickly using e.g. serverless.

## III. Phase 2. Challenge and Landscape

Persona: Engineers
 
Tenets:
 - Psychological safety
 - The system is the asset
 - Map the org for enablement

### 9. Environment for Success

(No instances of serverless)

How do we create an environment for success? What is needed?

A team-first approach where the team have the necessary
technological tools as well as psychological safety is
a good starting point.

When having teams there are of course also some antipatterns
for teams: The rock star, Tiny team, Huge team, 
Bob's team, My work, johnny's bonus, The magic manager.

[Team Topologies](https://learning.oreilly.com/library/view/team-topologies/9781098157234/)
is now a go-to reference for building teams.

Feedback is difficult, since it can be seen as challenging
the other party. This also means that *receiving* feedback
can be difficult, but the environment must support feedback
to avoid missing out on valuable feedback.

By now it should be no surprise that Wardley Maps can be
used to map, what I would call feedback cycles. The book
calls it challenges (in the meaning of challenging the 
meanings and oppinions of others).

A team may be reluctant to accept a challenge out of the
fear to look bad. A team can do work on different levels:
Execution level, Impact level, Optics level.

The Execution level is to make the manager look good. 
Impact level is to create (hopefully positive) impact for the customer.
Optics level is to ensure that "we look good", no matter the
actual outcome.

It is necessary to have a product view as opposed to a project view.
A product view is more holistic and should align with the
clear purpose. 

(Simon) [Wardley's Doctrine](https://doctrine.wardleymaps.com/) describes
the proces of building psychological safety, which is an essential part
of a team-first approach. It is also essential for "Fail fast" - that it
is safe to experiment.

To have an ethical team you must actively spend time on 
considering ethical aspects. 

The *Westrum Organizational Culture* is sort of a measure of how
innovative a company can be, depending on its culture which
can be Pathological, Bureaucratic, or Generative.

The chapter ends with a thorough mapping example - the
mapping of psychological safety in a team.

The anchor is a team member, which should have both trust
and clarity of purpose. From there on the map expands to 
clearly describe the necessary needs for having a 
culture of psychological safey.

### 10. A Sociotechnical System for Change

(1 instance of serverless)

Considering the organization as a sociotechnical
system with the *socio* where it should be; at front, 
is important to pave the road to *agile nirvana*, to
make your organization truly agile.

The technology should fit the purpose (e.g north star metric)
and there should be a *problem prevention* culture. The Value
Flywheel Effect will then help shortening your
feedback cycles which again helps lowering your time to value which
leads to a more agile organization.

Architects are part of all this, not just the technical
part. 

This paragraph stands out somehow:
*When a team has absolute clarity of purpose regarding the business problem and they are experts on market-leading technology, they can make a huge impact. They can deliver value quicker than anyone else.*

It seems that the inherent difficulty in obtaining expertise in 
anything, and especially *market-leading technology* is totally forgotten.

The chapter mentions some different ways of looking at organizational
development.

E.g. Fred Emery's *Purpose vs. Function (DP1 and DP2). Also the
*Cynefin framework* (Dave Snowden) and *Complex adaptive systems (CAS)*.

The Cynefin framework, just as the Value Flywheel also has a feedback 
loop: *probe, sense, and respond*.

It's a chapter that is a bit all over the place.

### 11. Map Your Org Capability

(No instances of serverless)

We are still in the second phase of the value flywheel where
we need to be aware of our organizational capabilities.

When mapping a capability the x-axis should have different 
names: Concept, Hypothesis, Theory, Accepted.

A mapping of the Microsoft Security Development Lifecycle 
are used as an example. 

### 12. Case Study - Workgrid

(26 instances of serverless)

A high-level study of Workgrid Software and their 
SaaS serverless-first product.

*The mythical concept of a "full-stack engineer" is popular
across businuesses today, but adding serverless to the stack
made the myth a whole lot bigger and even more unrealistic!*

This definitely adds fuel to the bonfire of cognitive load. The
expectations laid upon the shoulders on a full-stack DevOps team
is immense.

The Workgrid CTO says about serverless: "I never once
said it was easier .... [but] I do think it is better.". 

This is an important statement. Serverless may be amazing, but
it still must be learned!

## IV. Phase 3. Next Best Action

Persona: Product Leaders
 
Tenets:
 - Code is liability
 - Frictionless developer experience
 - Map your solution

### 13. The Serverless-first edge

(45 instances of serverless)

*The next best action is about doing the simplest thing you do
right now to deliver value*.

The book is quite adamant that serverless-first is the best way
to do this. But it is also aware that this may not continue
to be the best way in the years to come.

Moving to the cloud should not just be moving your
existing systems unchanged to the cloud. That will not
give you improved time to value. It is not *the next best action*.
*Modernization* is. 
[Architecture Modernization](https://www.manning.com/books/architecture-modernization)
probably has something to say about this.

In the *modern cloud* you can build appplications with
some of the following aspects: microservices,
loosely coupled and scalable, cloud native, abstracted,
pay per use, low operational overhead, leverage the provider.

The cloud will naturally also have some inertia points:

- Legacy cloud - cloud systems require constant modernization.
- Lack of Business Alignment - have a single-team mentality
- Fear of Vendor Lock-In - a genuine concern, but use your energy on well-architected
systems with clear boundaries instead
- Serverless is not the point - time to value is

The chapter walks through a lot of "myths" about serverless/modern cloud, too many
to list here, but they are well worth a read.

Just remember: *Serverless is a mindset*. 

### 14. The Frictionless Dev Experience

(3 instances of serverless)

If you *consistently identify and remove
impediments than stand in the way of your 
development teams delivering value*, you are
on the path to high performance.

*Creating software is a people-centric process*, and
developers are some of those people, who all need
impediments removed to perform at their best.

*Developer Experience* is the topic of this chapter, and
is at the heart of *engineering excellence*. Team-first
is also important, wherefore the authors brings up the
four team types from *Team Topologies*.

The *three elements of motivation* from 
Daniel Pink's *Drive*: autonomy, mastery and purpose
are acknowledged which is a tight fit with
*clarity of purpose*. 

The four key metrics from *DORA* (from Accelerate) are
divided into *throughput* and *stability*. 

Again it is underlined that *code is a liability*. It
has to be written, which takes time (and therefore money).
It must be maintained, it must be deployed, it must be
monitored, it must be documented, it must be
checked for vulnerabilities and so on.

A software team does not deliver lines of code, they
deliver a system. 

Just as it is common to do peer review of code it
should be common to do "quality reviews" where 
the quality of teams (and their output) are reviewed
by people from outside the team. It could even
be people from outside the company. It is important
to have psychological safety to do this properly.

Metrics are important and teams should have access
to all metrics relevant for the team.

All members of a team should have an *engineering
mindset* (it is not entirely clear what that is).

Automation is a valuable tool for removing friction
as well as patterns. E.g. 
[CDK Patterns](https://cdkpatterns.com/), which is
a collection of *Infrastructure as code* snippets.

The chapter ends with an example of mapping 
developer experience and an important takeaway:

*Having a frictionless developer experience is likely the number-one
differentiator between high-performing and low-performing
organizations.*

### 15. Map Your Solution (AKA Mapping the Stack)

(No instances of serverless)

*The next best action* has two key goals: 
1. Make an immediate impact and reduce friction
for the development team. 
2. Introduce the concept
that there will many *next best actions* to come.

The team should map the tech stack by starting
out with a persona. Expect the mapping to take
several sessions, especially if the team is
inexperienced in Wardley Mapping.

Keep it simple. And keep a list of pain points
along the map, simply to remember them for
possible later mapping, where possible solutions
can be discussed (and mapped?)

*The next best action* coming out of the mapping
session should be reversible. When diving into
the solutions new knowledge may arise making it into
a not best action.

Such a row of sessions should result in a road
map describing an expected series of changes
to the system in the time to come. Remember to
do the mapping repeatedly since priorities, knowledge,
context may change.

### 16. Case Study - Liberty Mutual Insurance

(18 instances of serverless)

In the continuouing story of Liberty Mutual Insurance
they put the user first. An important principle.

Silos were removed, handoffs were reduced. CI/CD
pipelines were used. DORA metrics were used.

Engineers were trained and upskilled. The mindset
of leaders where changed.

Design thinking and domain-driven design where
used to determine customer needs.

## V. Phase 4. Long-Term Value

Persona: CTO
 
Tenets:
 - A problem-prevention culture
 - Keep a low carbon footprint
 - Map the emerging value

### 17. Problem-Prevention Culture Through the Well-Architected Framework

(2 instances of serverless)

Who doesn't want an well-architected framework? Who
doesn't want to prevent problems?

The book discusses the 
[AWS Well Architected Framewok](https://aws.amazon.com/architecture/well-architected/)
but the other big cloud providers (
[Azure](https://learn.microsoft.com/en-us/azure/well-architected/) and  
[Google](https://cloud.google.com/architecture/framework))
have something very similar.

The AWS variant has six pillars: operational excellence,
security, reliabilit, performace efficiency,
cost optimization, sustainability.

The framework is not an actual code framework. It is a guidance
framework where some parts have code samples in different languages.

On a team it is the technical lead who drives the
use of the Framework. DORA metrics can be used to "compare"
teams in order to know where the organization should
focus its enabling work.

The teams should ideally be able to review themselves using
metrics showing the agreed quality constraints mirroring
the organizations expectations, the north star, the clarity
of purpose.

A team will have its work cut out when having to focus
on both continuous improvement and also shipping
features. *The teams are typically succumbing to the 
everyday pressures of delivery*. 
[Atomic Habits](https://jamesclear.com/atomic-habits) by
James Clear is brought up. It covers how the psychology
in continuous improvement works.

When using any Well-Architected Framework the authors have
found that the *SCORPS* process works well:

- Security
- Cost
- OpEx
- Reliability
- Performance

It works by continually reviewing how a team does in 
relation to the Well-Architected Framework. Reviews
are done quartly and sprintly, the quartly being
a deep dive into the pillars of the framework.

The sprintly review is a cross-team collaboration 
effort to share experiences and learnings - having
the teams effectively teach each other.

A walk-through of how the process can be facilitated
is presented.

The facilitator has an important role. They should
work with the teams in implementing, inspecting and
adapting the use of the framework.

The SCORPS process should be using to empower the team,
not beating up the team.

The chapter ends with a stab at how a software development
team could look in 2040. It is probably wildly inaccurate.

### 18. Sustainability and Space for Innovation

(9 instances of serverless)

It takes more than just "hitting our goals this quarter" to
be an innovative business.

The flywheel is now in phase IV. But it is a flywheel, which
keeps on spinning and the process starts again, with new
input from phase I.

The product that eventually will be the outcome will/should
become a commodity using a process called
the *innovate/leverage/commoditize (ILC) cycle*. 

Techniques such as domain-driven design, systems thinking,
outside-in business domain landscape discovery. The important
message is that the old, traditional departmentalized approach
to software and people is exactly that: *old*.

When a team starts to build something (*a feature*) there have been a design
process, resulting in some kind of e.g. bounded context, and a
metrics dashboard - necessary for visualizing how the *the feature*
performs and is used - is designed and built as one of the very
first things.

All *departments* should use the same high-level dashboards, whereas
there can be specific low-level dashboards for different departments.
E.g. *operations* may need insight into the health of message queues
or databases. The high-level dashboards reflect the agreement on
the clarity of purpose.

The concept of *resilience* is essential. In a serverless world
services start and stop all the time. You don't need to build anyting
to stay "alive" for 394857 days or. You don't have to be particular
afraid of system failure. All systems fail once in a while. *Chaos testing*

Software in the cloud (and other places...) should be
secure by design (not to mention by implementation).

Leadership must be people centric. Wardley Mapping is used
to openly discuss the situational awareness.

The 12 key tenets of the four phases of the flywheel is listed
along with how they relate to *reactive thinking* versus
*proactive thinking*.

How effective a piece of software is can be communicated
with e.g. carbon usage. It could well become a competitive 
parameter.

### 19. Map the Emerging Value

(5 instances of serverless)

The circle is completed with mapping the Flywheel Effect
itself. 

And moving on to mapping *emerging value*: The
CEO wants *sustainable operations* which is equal to
situational and awareness and adaptation and stability
and resilience. Furthermore the CEO wants to run
a *generative* organization with a safe-to-fail
culture which need psychological safety.

The pipelines in the map are *product mindset*,
*mission focus (purpose)* and *modern cloud*.

These pipelines will also have inertia points
stemming from *traditional leadership*, which
will have a hard time trusting the people
and seemingly lose control.

[Wardley's Gameplay Patterns](https://learnwardleymapping.com/leadership/)
are listed, just a mere mention.

### 20. Case Study - BBC

(53 instances of serverless)

BBC is a big institution delivering content
in 43 different languages to over a 100 million
users a week.

Moving to serverless first has allowed BBC
to release updates to its website every 20
minutes on average.

Cost is an understandable concern when using
serverless. *Serverless is a convenience
that comes at a price*, but this presupposes
a high utilization of a ressource. If a service
is not used "all the time" serverless may
easily be cheaper. Also *the total cost of ownership*
should be considered. The higher operations cost
may be perfectly okay because you can deliver
value faster. People's (employees as well as users) 
time is quite expensive.

In general BBC has experienced positive outcome
from moving towards serverless. It must, of course,
be an informed decision when and how to move.

### Conclusion

(10 instances of serverless)

The conclusion basically sums up a rotation
of the Flywheel as covered in the book.

It reinforces the that software development
is a sociotechnical process that should keep
people in the center. Technology is important,
but is just an enabler.

Remember to move through the Value Flywheel quickly;
although it is unclear how quick *quickly* is, my 
take is that the flywheel will spin slowly to begin
with and as the different practices are learned
it will start to speed up.

Serverless is not in itself the solution, but an
enabler. Technology is an enabler. How you use
it is the solution. And that also determines
how much it will cost you.

I find the conclusion a very adept walk-through of the
contents of the book.

### Afterword: History of the Authors and Mapping

(3 instances of serverless)

A short history of how the authors used mapping to
evolve the Value Flywheel and help write a book
about it.

The authors hope that the reader does not
follow the book to the letter, but rather 
follows the mindset that it describes.

### Appendix 1: Using the Value Flywheel Effect to Move an Organization Serverless

(14 instances of serverless)

This is a fictitious story about an organization
that has an outage during Thanksgiving (ouch!)
and therefore decides to move towards serverless.

It almost reads like a thriller ;)

---- 

## Conclusion.

No more than 3 stars. I am certain that the book 
could have been much shorter and
would have benefitted considerably from a much tighter editing.
This would have earned it a star more.

It wasn't a hard read, as such, but being a long winded read 
it was difficult to write a resume of it. 
The chapters were, in general, all over 
the place. No clear red thread, even though there *must* have
been a *clarity of purpose* to begin with ;)

Ignoring the above, though, it *is* a good book with
an important message. I praise myself on being 
pragmatic, which definitely has its uses, but this
book was nevertheless an eye-opener for me. It should
be clear that you should have - if possible - someone
else to take care of your supporting domains, leaving
your core domain to yourself. It is now clear to me.

