# Shape Up - a review

Full title: Shape Up: Stop Running in Circles and Ship Work that Matters

**Rating**

[Rating: ⍟⍟⍟◯◯](/blogs/how-am-i-doing-my-reviews)

![Book cover](/data/blogs/shape-up/book-cover.webp)

I'm reading [the print edition](https://basecamp-goods.com/products/shapeup), but you
can read it [online for free](https://basecamp.com/shapeup).

It is written by Ryan Singer.

See also [my reading list](/pages/reading-list) and [resources](/pages/resources)

# Who is it for?

Anyone wanting to get their product development into shape. Or at least just
get some interesting input on different - non-(but)Scrum - ways of working.

# What is it about?

It is about different ways of working. Ways that will
give the right people the time to do their work, uninterrupted.

---

# The Review

## 1. Introduction

A traditional introduction chapter introducing the outlines of
the Shape Up process, which basically consists of six-week
cycles of _Shaping the work_ into an _appetite_, giving
the shaped work to a team with full responsibility, letting
them work for six weeks in which they will implement and
release the work done.

## Part One - Shaping

### 2. Principles of Shaping

When shaping the work it is important to get the level
of details right. Don't do wireframes or mockups, they
are too detailed.

To show the principles a case study of implementing
a calendar feature is used. This leads us up to some
_properties_ of work in the shaping stage:

1. It's rough
2. It's solved
3. It's bounded

The shaping of the appetite is about combining UX ideas
with technical possibilities and business priorities. This is typically
not a one-man job, although it _is_ primarily design work,
but you need to be able to determine whether the design
is technically feasible.

It is important to remember that shaping the work
is apart from implementing the work. It is two
different tracks usually done by different people.

The four main steps of shaping is introduced:

- Set boundaries
- Rough out the elements
- Address risks and rabbit holes
- Write the pitch

### 3. Set Boundaries

Fixed time, variable scope is the key to shaping
an appetite of the right size. The work shaped should
fit into six weeks. Getting that right likely takes
some practice.

"Don't put it in a backlog" is the right response to
new ideas. You have to narrow down the problem. This idea
of avoiding the backlog is explored further later
in the book.

The calendar case study continues and shows us the
holy trinity: a raw idea, an appetite and a narrow
problem definition.

### 4. Finding the Elements

Now it is time to sketch the elements of the solution, be it
screens, services or what have you. Don't fall intro the trap
of being very specific with wireframes. Leave that to the
designers.

Instead, use _places_(screens, dialogs), _affordances_ (buttons, fields),
_connection lines_ (navigating between places).

An invoicing tool needing an autopay feature is used as
an example. Fat marker sketches (instead of wireframes)
are used to give rough ideas about the user interface.

The elements are the output of this part of the process. Again:
Don't be too specific, leave leeway for designers and
developers. _This isn't a spec. It's more like the
boundaries and rules of a game._

There is no stopping us from leaving the feature/project in the dust
at this time. Not much has been invested in it anyway. This
step is also very much about the practical feasibility of the project.

### 5. Risks and Rabbit Holes

_There will always be unknowns_, wherefore risk must be managed
as early as possible. We will therefore make a thorough search
for possible rabbit holes by looking critically at what
elements we came up with and asking critical questions. I
guess this is one part where _Critical Thinking_ is quite
helpful.

It is a good idea to be specific about things you _won't_
build in this project. Some parts may not be really
necessary even though you excited about it while sketching.

Now is a good time to bring in some technical experts
to help determine whether the project is possible within
the appetite being shaped.

And now we make a _pitch_.

### 6. Write the Pitch

_The purpose of the pitch is to present a good potential bet_.

Some ingredients should always be in a pitch:

1. Problem
2. Appetite
3. Solution
4. Rabbit holes
5. No-gos

**1. Problem:** It is vital to describe _why_ this project is a good
idea. Give enough context so people not entirely familiar with the
domain can understand it.

**2. Appetite:** The appetite can be seen as an elaboration
or clarification of the problem, making it easier to see why we
actually want to spend six weeks on this.

**3. Solution:** _A problem without a solution is unshaped work_.
The solution presented must be somewhat more detailed than in
_Finding the elements_, but still not so detailed that designers
will feel boxed in. Some fine examples are given in the book.

**4. Rabbit holes:** List any risks and rabbit holes found.

**5. No Gos:** Be clear about what we are _not_ doing in
this project.

A few examples of pitches in Basecamp is shown as well as
examples on how pitching is practically done in Basecamp

## Part Two - Betting

### 7. Bets, Not Backlogs

_Backlogs are a big weight we don't need to carry._ Well, I see where
they are coming from. Backlogs are where good ideas go to die.

The betting process is about reviewing the pitches, which obviously
are ideas that people care for, otherwise they wouldn't have spent
time pitching it.

Not all pitches will be done in the next cycle. Pitches not done are
let go. If someone cares enough about the idea they will later pitch it
again. How they keep track of it is up to them. No centralized backlog
is maintained and therefore no single person is responsible for
prioritizing and managing what to do next.

### 8. The Betting Table

_Two-week cycles ae extremely costly due to the planning overhead._ Anyone
having been on a "scrum"-team with two-week sprints will nod eagerly here.

The six-week cycle probably came about after some experimentation. It is long
enough to get some actual work done, and short enough that your are painfully
aware of the deadline in the horizon.

And interesting twist is the _cool-down_ period. It is not sex-week cycles
back to back. Instead there are two weeks between cycles allowing the teams
to take a breather, do some clean-up, fix bugs, or just explore new ideas. This
is the teams's own time to do what they want.

The teams usually consists of two or three persons, one of which is a designer,
and the rest programmer(s). On top of that a QA person helps doing integration
testing.

A "big batch team" is doing one project in a cycle, whereas the "small batch team"
will do more smaller projects.

When doing the actual betting at the betting table only a few select people
are there. They have studied the pitches before and may have had various
one-on-one conversations up to the betting table session.

When the betting is done, there is a plan for the next cycle.

A bet has meaning. Bets have a payout that makes the bet worth making. Bets
are commitments. We honor the six-weeks. The team gets the six weeks. At most
we can lose six weeks.

If the team does not succeed in shipping the work, we pull the circuit
breaker. The project per default does not get an extension. That would be
a new pitch, a new bet instead. If the team fails it is most likely
because the shaping fails. Therefore it makes no sense investing more time
before a new shaping has occurred.

Bugs? Bugs! Bugs are rarely so important that they need to interupt the
cycle. They can wait to the cool-down period. Crises should of course
be handled. Larger bugs will simply be pitched and brought
to the betting table. Once a year Basecamp schedule a _bug smash_. A whole
cycle to fixing bugs. Around the holidays is a good time because the calendar
tetris at that time is on the extreme level, anyways.

### 9. Place Your Bets

There is, naturally, difference between building new products and
adding features to an existing product. There have been three phases
observed (we still do six week cycles, betting one at a time):

**R&D Mode:** Shaping cannot be as clear, because we are learning
as we are building. The idea man should be close to the team building.
It is not expected to actually ship anything after an R&D cycle. The aim
is to spike, not to ship. _We can't ship anything to customers with just
a single cycle of R&D work._

**Production Mode:** We now move to the more formal shaping to get
the last things done before we ship to customers. It may still take a few
cycles before we finally ship to customers, but we should at least have
the code in the main codebase and not expect to touch it again in the
near future.

**Cleanup Mode:** This is the final actions before actually shipping
to customers. There is no shaping for this cycle. It is closer to the
"bug smash" mentioned before.

The chapter rounds of with a few examples and some good questions to
ask when betting.

## Part Three - Building

### 10. Hand Over Responsibility

The team is ready to build your appetite/pitch/bet.

It is important, of course, that the project is assigned, not tasks.
It is entirely up to the team to break down the project in tasks as
they go along.

The team must remember that "done means deployed" (there may be
a
[difference between release and deployment](https://www.bmc.com/blogs/software-deployment-vs-release/)).

QA and testing also needs to happen in the cycle.

When the team starts on the project they need to get their
bearings. This might take a couple of days before they have
formulated a plan on how to start implementing.

One sentence that stands out is: _The way to really figure out what needs
to be done is to start doing real work._ I get where it comes from but I
also think that this is a strategy one should be careful with. You are
aware that a week of programming can easily save a day of planning ;)

### 11. Get One Piece Done

In short: do vertical slices.

A short case study is presented whereafter some general tips about
designers (frontenders in the real world) and programmers (backenders in the real worl)
and how they are supposed to work are given. I can't help feel that
there's some cultural differences here.

Start building something that is essential in the project, to help get your
bearings. Start with something that is _new_.

And if there is something that has some risk or unknowns, try to start there.

### 12. Map The Scopes

If you think of a _scope_ as a feature or user story then we are aware of
what the author means, especially when it is expanded upon: _The scopes
reflect the meaningful parts of the problem that can be completed
independently and in a short periode of time - a few days or less._

Scopes are also used as the domain language.

A lenghty scopes example is given.

Even though scopes are comparable to features the actual implementation
of a scope may result in discovering other scopes - especially scopes
with cross-cutting concerns.

When looking at vertical slices it is often the case that there are
layers; the usual suspects: UI, backend, data access, and so on. These
layers are often comparable in size, but sometimes it is an iceberg: the
backend is way bigger than the frontend. In this situation it may make
sense to break those into scopes as well. The same applies when the iceberg
is upside-down.

You can have a few "don't fit anywhere"-items on a "chowder" list, but
be careful. It must be kept short or something is fishy.

Similarly with nice-to-haves. Mark those tasks in some obvious way, the
author uses a ~ (tilde). However you mark it, it is usefull to be able
to single them out, so they only get done, if time allows.

### 13. Show Progress

After listing some problems with using number of tasks or estimates as a way
to show progress, the idea of "Work is like a hill" is presented.

Basically uphill is where we are figuring out what to do, and downhill is doing
what we figured out to do.

If you have a neat name for each scope, you can place it on the hill and it is
then easy to see relative progress. The book contains some fine examples
of this and even shows how it looks when you can compare with past states.
Progress is very obvious then and it's very obvious when there isn't progress.

The book then touches - not on purpose I guess - on psychological safety, by
stating that "Nobody wants to raise their hand to management and say 'I don't know
how to solve this problem'". It is probably also a cultural thing (with
management wanting to micro-manage instead of trusting the team) but if your
team don't want to raise problems like this, you have other serious problems!

Uphill you can think of the first third like "I've thought about this", the
second third as "I've validated my approach" and the final third as "I'm far
enough with what I've built that I don't believe there are other unknowns."

Especially the last third is a bit weird. Previously the uphill was figuring
what to do, and downhill doing it. Now we have already built something when
reaching the top. Weird.

But apart from that. Always choose the scope that seems riskier as the first
scope to push uphill.

### 14. Decide When to Stop

_Shipping on time means shipping something imperfect._
_It's the difference between "never good enough" and "better than what they have now."_

We only have our six weeks. We need to ship. So we have to be dilligent
with what we ship. Finish the work we know we need done before starting
on nice-to-haves.

According to the author the QA person comes in toward the end of the cycle
and looks for edge cases. I'd prefer to have the QA person available from the
beginning, because "How to we test this?" is an important question to answer.

QA can generate new work, which may either be nice-to-have or must-haves. It's
up to the team to decide.

Sometimes, but rarely, a project gets extended. There may be reasons outside
the team's control (e.g. sickness and what have you).

### 15. Move On

When shipping it is only natural that new work is generated. New feeback
from the new features will arrive, but it is important to remember that
this feedback is not actionable. It should be shaped just like any other
work and placed at the betting table.

### 16. Conclusion

Sums up the book quite nicely, but still not defining _appetite_.

## Appendices

### 17. How to Implement Shape Up in Basecamp

The basic setup in Basecamp for doing Shape Up.

It could be interesting to see if anyone had shaped (hehe)
e.g. Azure DevOps into Shape Up.

### 18. Adjust to Your Size

Some general advice on how to adjust Shape Up to you. E.g. six
weeks may not be cycle time for your team. The size of your
team also matters. When having a small team it may be
difficult to get the uninterrupted time needed for a cycle.

### 19. How to begin to Shape UP

A few options for how to start are suggested:

- One six-week experiment
- Start with shaping
- Start with cycles

And a very important point: **Fix shipping first**. If you can't
ship at will then it doesn't matter that you can write code at will.

### 20. Glossary

A list of the important concepts in the book. Unfortunately it
does not cast much light on the _appetite_ concept.

---

## Conclusion

It may be because I'm not a native speaker, but the word "appetite" seems
weird to me and still doesn't really make sense to me.
One would think that it refers to the "bite-sized" slices of work.
The glossary describes it so:

_The amount of time we want to spend on a project, as opposed to an estimate._

Which - in the context of the book - just confuses me further. I think it
should be understood more as "how big a bite are we able to take given
this our six-weeks".

Apart from this word which just nags me throughout the book I think the
book is a good book, describing a valid way to work. The six week cycle
followed by a two week cool down period makes so much sense, especially
compared to the marathon of Scrum sprints.

It is a fairly short read: 176 pages in total. Had I not been so confused
about _appetite_ I might have given it 4 stars, but 3 is the choice here.
