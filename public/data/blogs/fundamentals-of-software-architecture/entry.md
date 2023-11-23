# Fundamentals of Software Architecture - a review

Rating: ⍟⍟⍟⍟⍟

[Fundamentals of Software Architecture - An Engineering Approach](https://fundamentalsofsoftwarearchitecture.com/) written by [Neal Ford](https://nealford.com/) and [Mark Richards](https://www.thoughtworks.com/profiles/m/mark-richards) both working for [Thoughtworks](https://www.thoughtworks.com/).

## Who is it for?

Developers aspiring to be an architect, of course. And also people already with the title of architect. People
who probably will mostly be surprised that they are not yet an architect ;)


## What is it about?

It is not just about software architecture. It is also about what it takes to be a software architect.

Even though this is quite a long review there is still so much uncovered material 
left in the book. 

## The review

### 1. Introduction

Why is there no career path for software architects? [What is a software architect?](https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf). In the introduction these two questions lay the foundation for defining what
software architecture is and by extension what a software architect is supposed to do, which is no simple feat
to define.

The book identifies 8 core expectations placed on a software architect:

- Make architecture decisions
- Continually analyze the architecture
- Keep current with latest trends
- Ensure compliance with decisions
- Diverse exposure and experience
- Have business domain knowledge
- Possess interpersonal skills
- Understand and navigate politics

It is easy to see that being a (good/successful) software architect demands a lot from a person. So much, even, that really
good architects will be rare. The expectations have grown over time making it even more demanding to be
an architect. Especially the business domain knowledge skill is hard to obtain to a reasonable degree.

Some new areas for an architect to consider is the separation of process (e.g team dynamics) from engineering
practices (e.g. version control, continuous integration, etc.). A side note mentions the history of
Extreme Programming from all the way back to Continuous Delivery and DevOps. Quite interesting and a common thread
I hadn't previously considered.

It is stated that "one of the Achilles heels of software development is estimation" and that part of the difficulty
is that software development is exploratory. I think it is important to note here that software development
does not *have to* be exploratory, but it is, because it can be (yes, we can!). It is easier to explore options in software
than it is when building a bridge. And it may result in a better product to explore options.

The chapter ends with listing the Laws of Software Architecture:

  1. Everything in software architecture is a trade-off.
     a. If an architect thinks they have discovered something that *isn't* a trade-off, more likely they just  haven't *identified* the trade-off yet
  2. *Why* is more important than *how*.

Apart from those laws I do have a favorite quote from the chapter, although it was hard to pick one:

> All architectures become iterative because of unknown unknowns. Agile just recognizes this and does it sooner

The first chapter really wets your appetite for the rest of the book!

### Part I - Foundations

#### 2. Architectural Thinking

The book states that *architectural thinking* is definitely not
just about *thinking about the architecture*. It is e.g. about understanding the difference between
design and architecture which the chapter - and most likely the rest of the book - takes a stab at.

It talks about the necessity for strong cooperation between the architect and the developers. 

The architect must have a weighty amount of technical breadth, which is hard to obtain other than through hard-earned experience, training and a solid load of curiosity.

The developer must, on the other hand, have more technical depth, in e.g. frameworks, libraries, 
languages and such.

The chapter illustrates the difference between developer and architect by depicting the knowledge
pyramids (Stuff you know => Stuff you know you don't know => Stuff you don't know you don't know)
and how those pyramids are fundamentally different for developers and architecs.

*The Frozen Caveman Anti-Pattern* is observed in the wild, they state. It is probably a common
human trait to revert back to what we know when in unknown situations, but one of the architect's
obstacles is to overcome this urge.

I already have a favorite quote from the chapter:

> Architecture is the stuff you can't Google.

The sentiment behind it is valid, of course, but to be fair, you *can* google - and in these modern times you can also ChatGpt it ;) - some architectural
patterns. Books have been written, blogs have been blogged, stackoverflows have been stackoverflowed. 

You can google *what* you need, but not *why* - and hence you cannot google *what you don't need*. It's
a little like googling some symptom you have (I highly discourage doing this...). There is no end
to the awful deceases that give that symptom, but only a few may be relevant. This is where experience
comes in handy. To analyze trade-offs you need experience.

On top of the technical breadth the chapter lists some other needed traits and some ways to cope with them:

- Understanding Business Drivers
- Balancing Architecture and Hands-On Coding

Both difficult areas to master.

#### 3. Modularity

The almost mythical modularity is treated with respect: "it has proven slippery to define", but at 
least it can be said that "Modularity is an organizing principle". It is a matter of stuffing
stuff into the right boxes. 

> Architects must constantly expend energy to ensure good structural soundness

But how do you ensure *good structural soundness*? Well, if you can measure it, you are able
to setup some goal posts to aim for.

In short, the chapter talks about the usual suspects: Cohesion and Coupling and some ways
to get some numbers on them.

It also gets around Connascence and some of the problems with that, one of which is that
connascence looks at the low level of code, whereas an architect is more concerned about
coupling on a higher level.

#### 4. Architecture Characteristics Defined

In this chapter the authors decides to dissociate them from the term *nonfunctional requirements* 
as well as *quality attributes*. Instead they settle on the term *architecture characteristics*, which
also to me seems to be a much better term. Naming *is* important.

Some typical characteristics are described:

- Operational Architecture Characteristics
- Structural Architecture Characteristics
- Cross-Cutting Architecture Characteristics

There is even ISO definitions for some of those cross-cutting architecture characteristics, such as usability, reliability and security.

It is a short chapter, but nevertheless it sports a favorite quote:

> Never shoot for the *best* architecture, but rather the *least worst* architecture

Although it is in close combat with:

> architects should strive to design architecture to be as iterative as possible

#### 5. Identifying Architectural Characteristics

Architectural Chracteristics - or *-ilities* (scalability, availability, etc.) as they are endearingly known are
important concepts for an architect, but domain stakeholders rarely have any idea
what you are talking about and are much more interested in user satisfaction and
especially profit. Fortunately the chapter leads with a table to "translate" such concepts between
architect language and stakeholder language and then continues with a 
discussion on how some characteristics can be extracted from the requirements
and how others are inherent in the domain, making domain knowledge important
for an architect.

After giving a link to [Neal Fords' Katas](https://nealford.com/katas/) the 
chapter moves on to introduce the *Silicon Sandwiches*-kata and works through
it, discovering implicit and explicit architecture characteristics along the
way. It shows that explicit characteristics are not always as explicit as you
might think, but are in need of the aforementioned translation table.

Elasticity and scalability and performance along with [sacrificial architecture](https://www.martinfowler.com/bliki/SacrificialArchitecture.html) are among the interesting concepts to warrant
a discusstion in this kata.

Customizability, availability and reliability together with security and criticality (now you
get why it is called *ilities*!) are taken into consideration when talking about
design vs architecture and how to start prioritizing them.

#### 6. Measuring and Governing Architectural Characteristics

Measuring and governing of course have a need for defining what to measure and govern
and this chapter starts with a discussion of various groups of measures. *Operational measures*, which covers e.g. performance, time to first byte, etc. *Structural measures* includes
especially cyclomatic complexity. Deployability is one vaguely defined *Process measure*.

The book introduces *Fitness functions*, a term coined in [Building Evolutionary Architectures](https://www.oreilly.com/library/view/building-evolutionary-architectures/9781492097532/) and then the definition for an *Architecture fitness function* is presented:

> Any mechanism that provides an objective integrity assesment of some architecture
> characteristic or combination of architecture characteristics

The key words are of course *any* and *objective* - and probably *mechanism*. One word
I think is missing in this definition, though, is *automatically*, since to be aware of changes in the *fitness* of the architecture it is necessary to have
it measured automatically. The remains of the chapter takes JDepend and ArchUnit for a spin on
some fitness functions, e.g. *cyclic dependencies*.

There are similar tools for .NET, like NDepend and NetArchTest.

These mentioned tools work on compile time and may have problems seeing the socalled
bigger picture in opposition to Netflix's famous Chaos Monkey, which operates on runtime.

> Architects must ensure that developers understand the purpose of the fitness function before imposing it on them.

Maybe the architect should simply discuss *with* the developers what fitness functions to use?

#### 7. Scope of Architecture Characteristics

Of course not all architecture characteristics are applicable for all parts of a system, just
as all DDD-concepts are not applicable or necessary for all parts of a system.

This chapter talks about *structural evolvability* and *architecture quantum* which
lets the authors bring back connascence, which in it's dynamic capability is very much
about how things are wired together on runtime.

An *architecture quantum* is *independently deployable*, has *high functional cohesion*,
or has *synchronous connascence*. The chapter, of course, offers more details about this along
with a thorough architecture kata that offers some insight on domain versus architecture
characteristics.

The *architecture quantum* is a really interesting concept and I hope the rest of the book
will revisit it.

#### 8. Component-Based Thinking

It's all about components, how they are designed, how they interact. A component
is the basic building block in architecture and can take many forms. A component can
wrap related code, be a deployable unit, contain other components. 

What style of architecture (e.g. layered or modular) gets a treatment along with a
shoutout to [Conway's law](https://en.wikipedia.org/wiki/Melvin_Conway) and correspondingly
the [Inverse Conway Maneuever](https://www.thoughtworks.com/radar/techniques/inverse-conway-maneuver). 

Two primary ways to partition the architecture: Technical or Domain is mentioned along
with some advantages and disadvantages of both.

It is important that the initial architecture, that is components, style,
partitioning, etc. is considered a draft. Architecture should be evolvable.

A short proces for identifying the initial components is given, along with some
considerations whether a simple CRUD-framework might do the job. 

Actor/actions approach, Event Storming,
and Workflow approach are all mentioned as ways to discover an initial architecture.
It should also mention [Event Modeling](https://eventmodeling.org/)

The chapter ends with some light guidance on how to choose between a 
monolithic and distributed architecture.

### Part II - Architecture Styles

#### 9. Foundations

The first chapter in Part II - Architecture Styles.

Just as we have design patterns, making pieces of code (more) easily
recognizable the authors here line up for a thorough treatment of various 
*architecture styles*; a common name for a recognizable architecture.

The [Fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)
are worked through along with a discussion of  monolithic vs. distributed architecture. The fallacies are obviously one of the drawbacks of a distributed architecture, one drawback being:

> Distributed architectures cost significantly more than monolithic architectures.

The following chapters works through several named architecture styles and each chapter
ends with a characterization of the chapter's architecture, taking into account
e.g. various 'illities, such as deployability, reliability, partitioning type and interestingly enough; number of quanta.

#### 10. Layered Architecture Style

It sees that layered architectures are very common due to [Conway's law](https://en.wikipedia.org/wiki/Melvin_Conway), since teams are often divided into backend, frontend, database, 
operations, etc.

One of the challenges with a layered architecture is that *"any particular business domain is spread throughout all of the layers of the architecture"*. As a result of this the
layered style is not a good fit for domain-driven design approach. This is obviously also
a *cohesion* problem. What changes together does *not* stay together in this architecture.

A layered architecture is typically also a monolithic architecture with all the
plusses and minuses that have. It is simple to start and build but is also very prone to turn
into a [big ball of mud](http://laputan.org/mud/), but if you watch your steps (and modularity) you may
successfully start with a simple, layered architecture and over time - if needed - turn
it into something else.

For some reason the authors give it one star (out of 5) in deployability. I don't think
that is necessarily true for all monoliths, but I can see where they are coming from
having myself been taking part in a lot of Dynamics Crm deployments. 

It has, obviously, 1 quanta.

#### 11. Pipeline Architecture Style

A pipeline architecture - also known as _pipes and filters_ - is typically a monolith. It doesn't _have_ to be, but usually is.

Examples of pipeline architectures are shells (e.g. Bash, powershell), ETL (extract, transform, load) tools, and so on. 

Being a monolith The Pipeline architecture also seems to be hard to deploy, getting
only two stars in deployability. 

The quanta is 1.

#### 12. Microkernel Architecture Style

Editors such as Visual Studio Code and Notepad++ are examples of the
Microkernel Architecture Style or plug-in architecture. It consists of a
core, e.g. the basic editor, which then can be extended with, well, extensions
or plug-ins.

Since plug-ins are supposed to be independent and self-contained it could be
considered an in-process microservice architecture... ;)

Since the plugins are naturally modular it scores 3 stars in
Modularity. It still doesn't get any noteworthy marks in elasticity
and scalability, since everything still runs through the core of the 
system. This trait also gives a quanta of 1. 

#### 13. Service-Based Architecture Style

It is interesting that the authors call Service-Based architecture style for a hybrid
of the microservices architecture style. Of course, some of the same principles apply,
but one important distinction, which is mentioned, is that the services here
commonly shared a single monolithic/shared database. This of course makes it not a 
microservice. 

Also, the book enlightens us, since each service in a Service-Based Architecture Style
is typically coarse-grained it is often possible to use standard ACID database
transactions to ensure data consistency. This naturally makes it possible for 
different services to influence each other if they happen to access the same data, which
they really ought not to do, but it has been known to happen. Changes to the database
schema might also affect several services so you need some kind of governance
to control that.

The Service-Based Architecture Style is very flexible and if you keep an astute eye
on the partitioning it may serve you well and scale quite well.

The chapter contains a surplus of information along with a discussion on 
when to use this architecture style.

It generally scores high in all Architecture Characteristics Ratings 
(even pricing), but Elasticity.

The number of quanta may of course vary between 1 to just about any number, although
the complexity will become unmanagable for higher quanta.

#### 14. Event-Driven Architecture Style

One of the longer chapters - about 30 pages - this clearly is where it gets complicated ;)

First the two major event-driven topologies; Broker and Mediator, are thoroughly handled, 
various drawbacks and advantages, different scaling profiles, error handling, recoverability
and several other -ilities.

> The main issue with asynchronous communication is error handling

I agree - it is one of the areas that will tend to make your brain hurt. But luckily, 
the authors do come to our rescue with *the workflow event pattern*.

Another issue is data loss, because *there are many places for data loss 
to occur within an event-driven architecture*. One remedy is *persistent
message queues* with *guaranteed delivery*. 

After a quick tour around the Request-Reply pattern the chapter ends with 
the Architecture Characteristics Rating where it generally scores quite
high, but - not surprisingly - gets a failing mark in simplicity.

#### 15. Space-Based Architecture Style

This chapter will probably make your head spin when it throws around concepts
such as *tuple space*, *replicated in-memory data grid*, *processing unit*,
*virtualized middleware*, *data pumps*, *data writers*, *data readers* and
several more grids; *messaging grid*, *data grid*, *processing grid*.

This is the kind of architecture that is very well suited for systems
with sudden bursts in the number of concurrent requests, such as online ticketing systems.

It does not score well in Simplicity and Testing, and even gets a lower score in 
pricing than the Event-Driven Architecture Style. There's 5 stars for the
Elasticity, though.

#### 16. Orchestration-Driven Service-Oriented Architecture

Quite a mouthfull. This architecture, which arose in the late 1990s, was
centered around *reuse*, due to high costs in software licensing as
well as hardware costs. 

Reuse unfortunately often has coupling as a side effect making this
architecture a maintanence and depoyability nightmare. 

> This architecture was an important milestone because it taught architects
how difficult distributed transactions can be in the real world and
the practical limits of technical partitioning.

The characteristics scores are generally nothing to be proud of.

#### 17. Microservices Architecture

Finally! The star of the show! This popular architecture style
was named by Martin Fowler and James Lewis in 2014 and is still a 
[highly recommended read](https://martinfowler.com/articles/microservices.html).

If you have difficulty figuring out "the size" of your microservice, just
remember that:

> The primary goal of a microservices is high decoupling, physically
modeling the logical notion of bounded context.

So it's simple: Just learn Domain-Driven Design and use bounded contexts
as your sizing model!

Well, you probably also have to rely on experience and common sense, as well ;)

Microservices are a the essence of decoupling, basically being able to function
on their own. This also means the reuse of business logic is not very common, it
is more infrastructure concerns that are reused. This covers stuff such as
monitoring and logging, which can be reused using the *sidecar* pattern and
*service meshes*.

Microservices are usually deployed in some kind of container environment
such as Kubernetes, which have built-in e.g. *service discovery* and 
autoscaling and other fancy features, making the life of a DevOps team less
bothersome.

One common concern with Microservices are the UI. What to do with that?
The UI is considered a part of the bounded context but there are some 
(technical?) partitioning practicalities (according to the book, which
really doesn't cover what those practicalities are), which makes it
hard to have the web-ui a part the actual microservice. Web-ui is therefore
usually deployed separately.

Microservices - even though they should be self-contained - may have to talk
to other microservices to fullfill some workflows in the domain. The usual 
suspects: choreography and orchestration have various trade-offs (no surprise),
some of which can be mediated by sagas and transactions, but

> Don't do transactions in microservices - fix granularity instead.

*Microservices couldn't exist without the DevOps revolution and the
relentless march toward automating operational concerns*.

The Microservices Architecture scores top marks in almost all
architecture characteristics, but pricing and simplicity. 

#### 18. Choosing the Appropriate Architecture Style

The final chapter in part II does not have an accurate
recipe for choosing the right architecture, because *It depends!* 

> Choosing an architecture style represents the culmination of analysis
and thought about trade-offs for architecture characteristics, domain considerations, strategic goals, and a host of other things.

An architect does not have to be a subject matter expert, but a good
understanding of the domain in question is of course necessary. But what
is more important is to have a more than good understanding of just about
everything else. 

Ending the chapter with a couple of case studies puts things into 
perspective, leading up to part III of the book.

### Part III - Techniques and Soft Skills

#### 19. Architecture Decisions

Decisions, decisions, decisions... 

Not only do architects have to make decisions. They also need to back it up
with proper arguments and even take responsibility for it!

All this and at the same time avoid a slew of anti-patterns; 
*Covering your assets*, *Groundhog day*, *Email-driven architecture*.

Luckily Mr. Ford and Mr. Richards have written this brilliant book and 
are here to help us out.

The chapter takes us through the above anti-patterns and some
corresponding work-arounds and then leads on to how to document the 
decisions taken about the architecture using 
*Architecture Decision Records* (ADRs) which get a thorough treatment.

They argue - a bit surprisingly, perhaps - that ADRs should rather
be on some file system or as a wiki than along the code in the
version control system. They do back it up with valid arguments, though ;)

I do like Markdown - especially together with Mermaid - and I'm not sure
how well that would play with that way of structuring the ADRs.

#### 20. Analyzing Architecture Risk

Introducing *risk storming* and the *architecture risk matrix* which looks very
much like t-shirt-sizing, mentioned in e.g. Steve McConnell's 
[Software Estimation - Demystifying the Black Art](https://learning.oreilly.com/library/view/software-estimation-demystifying/0735605351/).

The risk matrix is the basis for creating a *risk assesment*, which shows what
parts of the system has problems with what -ility.

*Risk storming* is of course the proces of creating *the matrix* and the
ensuing *risk assesment*.

The chapter nicely takes us through the necessary steps with a thorough example.

#### 21. Diagramming and Presenting Architecture

It is - hopefully not surprisingly - not enough for an architect to sit in 
his ivory tower and think about architecture. It is seemingly necessary to 
document it and event present it to other people! All that hazzle of being
an architect!

The chapter takes us through some needed features of tools used for
presenting and diagramming, as well as some tips for how to - well - 
how to present and diagram. There is a shoutout to Neal's book: Presentation
Patterns, which will give you even more tips.

There are a few almost standards for diagrams, e.g. UML and [C4](https://c4model.com/)
(which is partly inspired by the [4+1 model](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model) by Philippe Kruchten).

Another standard as well as tool is [Archimate](https://www.archimatetool.com/).

A short and concise chapter.

#### 22. Making Teams Effective

The are basically three different types of architect personalities: *control freak*,
*armchair*, and *effective*. It's not difficult to guess which one you ought to be ;)

The funny thing is that, depending on the situation and the various properties of the project,
you may want to shift between being any of these types of architect. This is also
known as [Elastic Leadership](https://www.elasticleadership.com/). 

Five primary factors help you decide how much control to exert on a team: 
*Team familiarity*, *Team size*, *Overall experience*, *Project complexitity*,
*Project duration*. Since all of these can obviously vary during a project, so 
will the level of control necessary.

People skills are an absolute necessity necessary to be able to build an
effective team, but it will still be hard work.

#### 23. Negotiation and Leadership Skills

Who would have guessed that the soft skills could be so hard? It's almost
as if we also have forgotten that the *soft* in *software* also is 
[really hard](https://en.wikiquote.org/wiki/Donald_Knuth).

The chapter is all about reading between the lines, thinking twice about
phrasing and language, which is possibly even more ambiguous than JavaScript.

The book gives some tips on negotiating with the business, other architects
as well as developers.

Several tips to being the leader a team needs rounds of the chapter.

#### 24. Developing a Career Path

There are of course a difference between being assigned a role, 
assuming a role, and actively aiming for a role. Again it is hard
to say: *do this, do that, and you will become an architect*.

But the chapter gives some useful tips, one of which is naturally to 
keep an eye on the technology landscape, e.g. by utilizing
[The Thoughtworks Technology Radar](https://www.thoughtworks.com/radar).

Also, since practice makes - if not perfect - then better, it is also
fine advice to do the [Architectural Katas](http://fundamentalsofsoftwarearchitecture.com/katas/).


### Self-Assesment Questions

The book is rounded off nicely with a list of questions by chapter, to
check whether you paid attention during the book. Nice touch!

## Conclusion

I most definitely think that the book lives up to the *Fundamentals* as
well as the *Engineering* parts of the title. It is a 360 view of 
software architecture and the landscape making up that architecture.

After reading the book I don't see any real flaws in it which is why
I give it (a rare) 5 stars in rating.