# Monolith to microservices - a review

Rating: ⍟⍟⍟⍟◯  

[Sam Newman](https://samnewman.io/) wrote a [book](https://samnewman.io/books/monolith-to-microservices/). This is a good thing, it is a good book, which is hardly a surprise. He has done it before, writing a book, that is.

## Who is it for?

I think it is primarily for developers and architects
looking for advice on how to "do something" about that blistering monolith
in the center of their system universe. It is most definitely worth a read and 
at about 240 pages it is manageable task to get through it. Afterwards it
is very useful to thumb through looking for patterns matching your
scenario.

## What is it about

This is, unsurprisingly, a book about microservices. More specifically it is a book about the process of
refactoring an existing monolith into microservices. It is e.g about:

- Should you do it?
- Why should you do it?
- How should you do it?
- How will you know whether you were successful?
- Challenges in moving from silos to DevOps
- Organizational changes required
- Changes in skillsets needed (cross functional teams)
- Challenges in managing a growing set of microservices

The discussion about whether you should do it is, of course, always relevant. Why embark on
an arduous journey like that if you are actually able to solve the problems you
may have with your monolith in other and simpler ways?

It is worth noting that - and this will probably be one of my favorite quotes from the book:

>*Doing microservices just because everyone else is doing it is a terrible idea.*

Doing microservices does bring complexity, so you
should be sure it is worth it.
And if you finally, after thorough deliberation, decide to set sail and go look for the dragon's treasure this book will more than fullfill the quest for gold and gems.

Changing a monolith to microservices is hard core
refactoring and it brings a little tear to the eye that Sam Newman mentions "Working effectively with legacy code" by Michael C. Feathers.

Feathers has the concept of *seams* where you can
safely (more or less) surgically separate parts
of the application.

Newman notes that nowadays (Feathers' book is from 2005 but still highly relevant) these *seams* often
correspond to bounded contexts in *Domain Driven Design*. Bounded contexts is a sensible way to organize microservices so to paraphrase Adams: *"it all fits together as a jigsaw"*.

When getting to the actual proces of chipping away the monolith Newman works through a number of *patterns*, the first of which is Fowler's [*Strangler Fig Application*](https://martinfowler.com/bliki/StranglerFigApplication.html).

Sam Newman, of course, does not just mention this pattern and then leaves the work to you (well, the actual work he leaves to you, he's not stupid!). Oh no, the treasure chest is opened and examples and experiences from his long line of duty in the trences are pulled out. To clarify how thorough he is: 20 pages are devoted to cover just this pattern.

He continues with a slew of patterns very adept for slicing away on the monolith
and therefore very good for actually implementing the Strangler Fig. Some are to be used inside the monolith itself, where possible, others outside it.

**UI Composition:** Covers how to use the UI to control e.g. which services to call for
which components.

**Branch by Abstraction:** About how to abstract existing implementations into
a interfaces (or similar language constructs) to make new implementations interchangable.

**Parallel Run:** Newman is not very explicit about it but with this pattern
you should really watch out for side effects, e.g. sending mail. There are a lot of
twists, turns and pitfalls in *parallel run* so read it carefully.

**Decorating Collaborator:** The standard decorator taken to a higher level.

**Change Data Capture:** About techniques where you in different ways hook into the
database.

This last pattern opens up the next chapter about how to decompose data stores, which
of course is harder than it sounds (and it sounds hard, even to begin with). But Newman shuffles
the big bag of patterns and helps us focus on how to keep data in sync while we carefully
pull data out of the database and into a self-containing microservice.

This is a big chapter with 80 pages and a lot of patterns; the first of which
focuses on how to actually keep data in the same database but still preparing for
a split up.

- The Shared Database
- Database View
- Database Wrapping Service
- Database-as-a-Service Interface
- Aggregate Exposing Monolith
- Change Data Ownership

The middle road is to have data in two places and trying to keep the data
synchronized, which is not without difficulties. Again Newman has our
back and provides us with a couple of patterns and corresponding use cases to help us.

- Synchronize Data in Application
- Tracer Write

*The* main concern with synchronizing data, no matter the method, is consistency.

The third part of the chapter focuses on actually splitting apart the database 
and *not* keeping the original data. Sam Newman lists three main strategies:

- Split the database first, then the code
- Split the code first, then the database
- Split both at once

Useful patterns for splitting the database first includes:

- Repository per bounded context
- Database per bounded context

For splitting the code first:

- Monolith as data acccess layer
- Multischema storage

For splitting the code and database at the same time:

- Split Table
- Move Foreign-Key Relationship to code

The last set of patterns look at what to do about *static reference data*, e.g.
country codes, zip codes and such stuff.

- Duplicate static reference data
- Dedicated reference data schema
- Static reference data library
- Static reference data service

It is worth noting that especially *Move Foreign-Key Relationship to code* has a
prime example on how moving to microservices may add complexity.

Do you see the pattern (bad pun intended)? It is a chapter where you need to have had your coffee before reading it. Now it's time to drop some ACID - Newman takes us on a tour through
the problems with not really having transactions any more and, of course, what to do about it.

One of the solutions, especially when it comes to distributed transactions, is sagas. This (sagas) - I was surprised to discover - is not an entirely new invention. Some folks figured this out
way back in 1987.

Using sagas is not one-to-one with transactions, of course. The rest of the chapter takes
us through *orchestrated* and *choreagraphed* sagas and pros and cons of each.

At the end of the chapter we have finally reached the treasure island, dug up the gold and
returned home safely. We now have to figure out how to control all this wealth which
has come to us in the form of gold, jewels and what have you.

This is what the final chapter - "Growing pains" - is about. In all fairness Newman states
that most of this chapter has already been dealt with in his first, book which - by the way - now has
a [second edition](https://samnewman.io/books/building_microservices_2nd_edition/).

A thing that really strikes me when reading this chapter - even though Newman does not state this
explicitly - is that as you move into the microservices arena you will need more people.
And why is that? Because you get more complexity, you get more cogs and wheels. And those
people will need skills that you currently may not have.

The issues covered in the chapter are:

- Who owns what code
- Breaking changes
- Reporting
- Monitoring and troubleshooting
- Developer pains
- Running too many things
- End-to-end testing
- Global (cross-team) vs local (team) architecture decisions
- Robustness and resiliency
- Orphaned services

And that brings us to the end of the quest. We have been taught to survive the riches discovered
and collected on the journey and how to use them for bringing us comfort in a complex world.

Thank you, Sam Newman!
