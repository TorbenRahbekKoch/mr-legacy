# Team Topologies - a review


![Cover of Team Topologies?](https://learning.oreilly.com/covers/urn:orm:book:9781098157234/400w/ "Team Topologies")


[Rating: ⍟⍟⍟⍟◯](/blogs/how-am-i-doing-my-reviews)

## What the frack is a topology (What is it about)?

It can mean *shape* which makes perfect sense in this context; 
*The shape of teams* where *shape* probably more refers to
the structure. So *Team Topologies* basically means *Team Structures*. 

I guess... ;)

## Who is it for?

Well, anyone who have an interest in team structures, obviously.
But, and this is important, anyone who works in a team 
or with a team - of any size - should read it. Even if there is no
interest. It is not a hard read, but it will be an eye opener. 

## Part I - Teams as the Means of Delivery

### 1. The Problem with Org Charts

Having once (in the previous millenium!) myself programmed PowerPoint to show an organizational
chart from SAP-data I see many problems with organizational charts, but it is not those kind of problems the book focuses on.

The world of agile does not fit well in the static world those charts depict, and neither
does the communication structures in an organization.

In this chapter the concept of *Team Topologies* is introduces along with four fundamental team types:

- Stream-aligned
- Platform
- Enabling
- Complicated subsystem

and three team interaction modes:

- Collaboration
- X-as-a-Service
- Facilitating

What all of these actually are of course covered later in the book.

[*Conway's Law*](https://en.wikipedia.org/wiki/Conway%27s_law) is dusted of (as if any dust ever got to settle on it!) and 
has become more relevant than ever with
the introduction of the [*Inverse Conway maneuver*](https://www.thoughtworks.com/en-us/insights/blog/customer-experience/inverse-conway-maneuver-product-development-teams). I think it
is safe to say that this is some of the background for 
*Team Topologies*.

The chapter has a short stint with *Cognitive Load* which
makes me happy. The mental load on a modern,
full-stack, DevOps, self-organizing team is immense and awareness
of this is vital.

### 2. Conway's Law and Why It Matters

It matters especially because:

> A product's architecture tends to mirror the structure of the
organization in which it is developed.

and

> If the architecture of the system and the architecture
of the organization are at odds, the architecture of the
organization wins

and, of course:

> An organization that is arranged in functional silos
(where teams specialize in a particular function, such
as QA, DBA or security) is unlikely to ever produce 
software systems that are well-architected for 
end-to-end flow

The chapter generally investigates Conway's Law and the
Inverse Conway Maneuver and one important discovery is
that *Team assignments are the first draft of the architecture*.

Allan Kelly's quote: *...someone who claims to be an
Architect needs both technical and social skills...* is in
alignment with *[Fundamentals of Software Architecture*](https://fundamentalsofsoftwarearchitecture.com/) which also
lists the social skills necessary for a Software Architect. 

Teams should not communicate unnecessarily and steps should
be taken to ensure that we keep the communication to a level
as small as possible. *Fast flow requires restricting
communication between teams*. 

### 3. Team-First Thinking

There is so much gold in this chapter, e.g. 
[Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number),
which of course also will influence how an organization 
is - well - organized to keep the necessary communication and
collaboration to a minimum.

*Teams should be stable but not static*. This is partly due
to the [Tuckman Team Performance Model](https://en.wikipedia.org/wiki/Tuckman%27s_stages_of_group_development) 
(forming, storming, norming, performing), which still has
some merits, altough nowadays it seems that teams continually
has a breeze blowing. This of course makes perfect sense if the 
team is also continually learning and adapting.

*Every part of the software system needs to be owned by 
exactly one team* and collectively the three types of
cognitive load should match the team: *Intrinsic*, *extraneous*,
*germane*.

Some tips for matching domain numbers and complexity to teams
are given and then *Team APIs* are introduced. This is not
just about code, it is the api to the team: How are other teams
expected to interact with the team. And how can the team
limit those interactions. *Don't make me think*.

I cannot help to think that having a Team API must also
be incredibly helpful when on-boarding new team members.

After a couple of case-studies the chapter is concluded
with a dire warning to use continuous delivery and similar
proven concepts.

## Part II - Team Topologies that Work for Flow

### 4. Static Team Topologies

In this chapter there is talk about *static teams* - that is: teams
that are rarely changed. Even though they may be a perfect fit for the
organization at the time they are created, over time they will drift
apart. This is in opposition to teams that are adapted over time along with
their responsibilities.

Teams should be *intentionally designed* or *consciously designed*. 
[DevOps Topologies](https://web.devopstopologies.com/) may help with that
as a starting point.

Anti-patterns exist for teams also, of course. Some of these are listed in the book: *ad hoc team design*, *shuffling team members*.

The intentional design of teams can be helped along by asking (clever)
questions along the lines of: *How can we reduce or avoid handovers 
between teams in the main flow of change?. Several others are listed.

The *Spotify Model* is examined and discussed. Remember: Don't blindly
copy this model. If you're not Spotify you probably shouldn't use
it. The model, as usually visualized and discussed, is a snapshot. Not
how Spotify works now. [Copy the questions, not the answers](https://twitter.com/jessitron/status/1000347112331149312).

Some golden nuggets from this chapter:

*A key contribution of DevOps was to raise awareness of the problems
lingering in how teams interacted (or not) across the delivery chain.*

*Teams should evolve and morph over time.*

*The success of different types of teams does depend solely on team
members's skills and experience; it also depends on 
(perhaps most importantly) the surrounding environment, teams, and
interactions.*

Leading up to a discussion of *Feature teams*, *Product teams* and 
*Cloud teams* and some of the necessities for those kind of teams.

There is some talk about the optionality of [Site Reliability Engineering](https://www.redhat.com/en/topics/devops/what-is-sre) with its error budget and how a SRE Team  can interact with a Stream-aligned Team.

Organization size, technical and cultural maturity should be
taken into account when choosing a topology.

When designing teams it is also essential to *detect and track
dependencies and wait times between teams*. Looking into
the crystal ball and guessing how the market will look in the
future and therefore how the organization correspondingly should 
adapt is hard but [Wardley Mapping](https://learnwardleymapping.com/) 
is likely a valuable tool here.

### 5. The Four Fundamental Team Topologies

In this chapter the four - previously mentioned - team topologies
are examined in detail:

- Stream-aligned
- Platform
- Enabling
- Complicated subsystem

What is a **stream-aligned team?** If I say *feature team* or *product team*
you may have a better idea, although it is of course not exactly the same.

But it is the main team topology and all other team topologies exist in
one way or another to support the stream-aligned teams.

*A "stream" is the continuous flow of work aligned to a business domain or
organizational capability*

This is wider than product or feature, the book mentions a slew of different
types of streams. It also talks about what capabilities such a team need
to function, which is quite a few - not surprisingly - but still a team
needs skilled people to not be overwhelmed by cognitive load.

One surprising caveat is that a SRE (Site Reliability Engineering) team
is a stream-aligned team. I would have thought it would be an enabling team.

A stream-aligned team has some expected behaviors, among which are 
*quick to course correct* and *has minimal (ideally zero) hand-offs*.

An **Enabling team** is how the organization enables the - often - busy
stream-aligned teams to learn. An enabling team might keep track of
e.g. frameworks in use and warn when new versions are out or old versions
are obsoleted. It can also track new trends and technologies and help
stream-aligned teams to implement these. The enabling team is proactive,
actively seeking out teams they can help and keeping track of what is used
of various tools and technologies.

*The primary purpose of an enabling team is to help
stream-aligned teams deliver working software in a 
sustainable, responsible way*

*Communities of practice* are a different beast and serves a different
purpose, wherefore it can easily co-exist with enabling teams.

A **Complicated-Subsystem team** obviously maintains complicated subsystems.

Some examples of complicated subsystems could be *a video processing codec* or *a face-recognition engine*. That is; specialized knowledged is necessary
and the *decision is driven by team-cognitive load*. 

The team can deliver the complicated subsystem as e.g. a nuget package,
npm package, or simply as part of the repository or something else entirely depending on the context.

A **Platform Team** enables *stream-aligned teams to deliver
work with substantial autonomy*. 

The stream-aligned teams
are the "customers" of the platform team. Some suggest that you
have an internal pricing system to avoid everyone expecting
full service on all levels because different teams need
different service levels and to 

A platform - in large organizations - can be big enough to warrant
several teams building (and running) it. We are then talking of
the *inner topologies* of the platform. 

The platform should most likely not be a bells and whistles platform,
but rather the *thinnest viable platform*. There should be a focus
on developer experience (DevEx) and to *simplify the developer's life
and reduce cognitive load*.

It likely makes sense for the platform team to also have a team api as
any other team.

**How to move towards the fundamental team topologies?**

Mr. Skelton and Mr. Pais of course has ready-made advice for us here.

Team types like Infrastructure teams, component teams, dba teams, etc. are
somewhat orthogonal and the transition to e.g. stream-aligned teams may not come easy. But e.g. a DBA team can be converted to an enabling team if 
they are used as teachers instead of implementers.

### 6. Choose Team-First Boundaries

A chapter about how to find the boundaries in the systems, so you 
can have teams matching those boundaries. The boundaries
should be team-sized and should match the cognitive load for
the team. And, I guess, the teams should be sized
(and composed) after the boundaries.

Boundaries can be found in both the code and in the environment, e.g.
in the office layout. An interesting observation is that *"the volume
of face-to-face interaction decreased significantly (approximately 70%)..."*
in organizations adoption open offices. That is no wonder. The noise
levels in such environments is so high that you need to use headphones,
possibly with noice-cancelling features, and wearing headphones does not
invite conversations. Furthermore a substantial amount of developers
are introverts and therefore naturally does not thrive in an open office.

The chapter introduces the concept "Fracture Plane" for boundaries
in software (corresponding to *seams* in Feathers) and of course
*bounded context* from DDD is a valid candidate. 

But other kinds of *Fractures* are mentioned. E.g *Team Location*, which
of course is interesting since teams are now often not physically
together at the same time, due to remote options offered at many workplaces.

There can also be technical fractures, like *Change cadence* or 
*performance*.

The chapter ends with a couple of good case stories, both clearly 
showing that it might be no easy maneuver to find the right team boundaries.

## Part III - Evolving Team Interactions for Innovation and Rapid Delivery

### Chapter 7. Team  Interaction Modes

Just having teams with fancy names doesn't get you much, they also
have to communicate, after all. The basic point is that they have
to communicate as little as possible and only the necessary amount
of communication should take place.

Too much communication takes time and takes away focus and 
suggests - and this is a key takeaway from the chapter - that
the teams may be incorrectly structured.

This chapter goes in depth with the Team Interaction Modes - hence
the title of the chapter ;)

- Collaboration
- X-as-a-Service
- Facilitating

The interaction modes can also be graphically represented (page 134), 
which makes drawing teams and their interactions a (clear) breeze.

Watching how teams interact can inform decisions on shaping the teams
or the work they do possibly by using the [reverse Conway Maneuver](https://www.agileanalytics.cloud/blog/team-topologies-the-reverse-conway-manoeuvre).
Also techniques such as [Event Storming](https://www.eventstorming.com/) and likely also [Event Modeling](https://eventmodeling.org/) can be used
to discover inappropriate team boundaries.

As well as the different team types have some expected behaviors, so
do the interaction modes:

**Collaboration:** High interaction and mutual respect
**X-as-a-Service:** Emphasize the user experience
**Faciliting:** Help and be helped.

The book of course contains more detail, as well as tips on how
to train the teams and individuals to excert those behaviors. Maybe
an enabling team could help with that :)

*Promise theory* is mentioned shortly. It is better to have 
team relationships built on promises rather than on strict rules.

### Chapter 8. Evolve Team Structures with Organizational Sensing

(Note *Structures* in the chapter title. I knew I got it right! :D)

In short: "Inspect and adapt". 

Team Topologies should not just be evolvable, they actually *need*
to evolve. As was already hinted at in the previous chapter
the need to change can be observed e.g. from whether the "correct"
communication takes place between the teams.

There are other *Triggers* as the book calls them, e.g. 
that a given system simply has grown to large for one team to
manage it.

*Increasingly, software is less of a "product for" and more of
an "ongoing conversation with" users*. And so the teams must
be able to have that "conversation". Since there may be zillions
of users this "conversation" takes place through metrics from
the applications. This can be stuff like "Who uses what" or
even A/B testing.

### Conclusion. The Next-Generation Digital Operation Model

I'm sure Microsoft wishes that they had come up with that name for
Windows NT ;)

The conclusion chapter of course contains a short recap of the 
book. But more importantly it also contains a part with
*Next Steps: How to get started with Team Topologies*.

Even though it is only 3 pages it is a very good starting point.

## My Conclusion

This is a very well researched book, which is also hinted at by the 12 page long list of recommended reading and references.

And it may be confirmation bias, of course, but what the book talks about
just *feels* right. 

It is not a long book, but I think it could actually have been shorter
without losing anything, it repeats itself at times. Especially chapter
7 and 8 could have easily been mashed together. And placing the 
*Next Steps* in the Conclusion just seems weird.

The message it sends, though, is important. The sub-title for the book is
*Organizing business and technology teams for fast flow", which offhand
sounds like a one-sided business advantage, but the advantage is also
for the teams; and therefore also the team members who will basically
have a better job. 

I give it 4 stars.