# Code that fits in your head - a review

Rating: ⍟⍟◯◯◯  

[Mark Seeman](https://blog.ploeh.dk/) wrote a book [Code that fits in your head](https://blog.ploeh.dk/2021/06/14/new-book-code-that-fits-in-your-head/). Mark is a very skilled, knowledgeable and prolific writer, which can clearly
be seen in his blog, which has massive (over)loads of articles.

A technical note about the print book: It is a Robert C. Martin series, so I had
expected a higher quality. The paper is thin enough to actually see the previous
or following page through, which makes for a smudgy look.

## Who is it for?

This is most definitely for developers/programmers. Mark himself in the book states
that it is
probably mostly for backend developers because he identifies as one, but also
thinks that frontend developers may benefit from it.

## What is it about?

The title is rather clever and alludes to the fact that the brain only copes with about
seven things at a time in opposition to computers which easily manages zillions
of stuff. The idea is that code should have a "size" which caters for the "size" seven
of the brain.

The book starts out in the first chapters examining some typical metaphors used about programming: Building a house, growing a garden, engineering and such.

The book mostly contains a lot of common sense (which is a good thing).
Or, at least, what seems to be common
sense to experienced developers. But common sense has that peculiar quality that we
need it written down and to be constantly reminded about it. E.g. through checklists
which is a tool used on so many fields of business, so why not in software development?
In Seeman's view this (checklists) is one of the tools that help
move software development towards *engineering*.

Throughout the book Seeman builds a restaurant reservation system using
common sense and engineering. He is an advocate for immediately building
a vertical slice, however thin it needs to be, simply to get all
the wheels in the development and especially in the
deployment machine up and running.
There is some sense in that.

Even when starting a new project (a Visual Studio project in this case) he has
a checklist. I probably would create a template for this instead. Manual
processes, even when supported by checklists, have a tendency to go wrong.

In *chapter 5 Encapsulation* I have a favorite quote:

> Reduced to it's essence, *encapsulation* should guarantee
> that an object can never be in an invalid state

He also talks about Postel's law, invariants (as a lead up to
property based testing later in the book) and of course he comes
by Test-Driven Development and in the book he makes one of the
best cases for it that I have ever seen: He calls it a
*scientific method* (I'm not mocking him here, he even backs
it up with valid arguments).

*Chapter 6 - Triangulation* starts out with some insights
on legacy code and the implications of it being hard to
navigate in and therefore also hard to change.

He leaves it to [Michael Feathers](https://www.goodreads.com/book/show/44919.Working_Effectively_with_Legacy_Code)
to help us getting out of that mess and instead concentrates on helping
us not getting into that mess in the first case. He does that
by focusing on Test-Driven Development and looks at how you can drive code changes with tests.

His banter with the Devil's Advocate reminds me of
[The Enterprise Developer from Hell](https://fsharpforfunandprofit.com/posts/property-based-testing/) - read it, laugh and learn something about property based
testing at the same time.

I wholeheartedly do not agree, though, with his notion
that it is hard to change a legacy code base once you
get to know it well. I would say that you *need* to know
it well to be able to change it successfully.

In *Chapter 7 - Decomposition* Seeman (fittingly) goes all in
with the magic number 7 and uses it as measure on how to avoid
code rot and working through some examples on how to rewrite
the code so it still fits in your brain.

This ends up in a name for the kind of architecture that arises
if you think about (and work with) your code in this way:
*Fractal Architecture*. It's not really an architecture
but more a way of organizing the code (which might
be splitting hairs, I know).

*Chapter 8 - API Design:*

A chapter about naming, types, CQS ([Command Query Separation](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation)), DDD ([Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)).

It is a messy common sense chapter with mixed content - I really don't
know what to say more about it.

*Chapter 9 - Teamwork:*

Developers rarely work alone which of course mandates some teamwork. Proper
tools make this easier and using those tools properly makes it even easier or - at 
least - not as hard.

Mark does have some good comments on e.g. using Git properly: small commits,
good commit messages, etc.

Other good practices such as continuous integration, pair programming,
collective code ownership, pull requests, code review get a treatment.

*Chapter 10 - Augmenting code:*

Where the previous chapters focused on creating a new code base
Mark now moves on to how to work with existing code bases or - more
precisely - how to *add* code to an existing code base.

Coupled with the advice from previous chapters on small commits he
introduces [Feature flags](https://martinfowler.com/articles/feature-toggles.html)
and supplements with a surprisingly thorough coverage and usage of
the [Strangler pattern](https://martinfowler.com/bliki/StranglerFigApplication.html)
following the good rule

> For any significant change, don't make it in-place; make it side-by-side.

Some good examples makes this a not bad chapter, all in all.

*Chapter 11 - Editing Unit Tests:*

Unit tests are considered a necessary means to help ensure the quality of
any code base above the *Hello World*-level.

Mark enlightens us on the dangers of working with and changing (e.g. refactoring) 
unit tests: the safety net of the application.

*(If you are more theoretically interested in refactoring you ought to
read [Elemental Design Patterns](https://www.goodreads.com/en/book/show/12343712-elemental-design-patterns))*

A few tips and tricks here and there makes for a read worthy chapter.

*Chapter 12 - Troubleshooting:*

Shooting problems is always fun og Mark in this chapter helps us prepare
and load the gun, because:

> *When the shit hits the fan it's good to have a plan*

His first advice is simple but very common sense:

> Try to understand what's going on

When you understand the problem, know what the culprit is, it is
so much easier to mitigate the problem, which can be done with
more common sense and especially the much overlooked
[git bisect](https://git-scm.com/docs/git-bisect) which
Mark walks us through in a thorough and competent manner, which
makes the chapter absolutely worth reading.

*Chapter 13 - Seperation of concerns:*

This is not about [Somebody else's problem](https://en.wikipedia.org/wiki/Somebody_else%27s_problem) but rather about *cohesion* and *coupling* or
*composition* and *decomposition* and keeping code free of unexpected
side effects and, of course, *Code that fits in your head*.

There are some musings on predictability and [Pure functions](https://en.wikipedia.org/wiki/Pure_function) which I absolutely agree with. This also, again, touches
on the subject of CQS and on the inherent flaws in
[OO - Object oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) when it comes to purity and side effects.

> Please refer to [Functional core, imperative shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell)
for details on how to keep most of your application functional and therefore
deterministic/predictable.

The chapter ends with a discussion of *cross-cutting concerns* such as logging
and security and how to use the [Decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern) to implement some of these.

He also talks about *what to log* which actually gives me a favorite
qoute of the chapter:

> *Log all impure actions, but no more*

There is, naturally, no need to log input and results of pure functions, since
you have tests covering those. You have? Don't you?

*Chapter 14 - Rythm:*

There's not much Gerschwin over this chapter which is about the *rythm* of
your working day. It is still - a lot - about the common sense we need to have
written down to actually work (pun intended) it actively into our working
day. It is about habits, which are notoriously hard to change if not constantly
reminded about them. It is about taking time to educate and improve yourself.
It is about avoiding unproductive and morally diminishing practices. And
regarding this last part he does have some inputs on the loathed *meetings*, which
earns him another favorite qoute:

> *Meetings don't scale; documentation does.*

*Chapter 15 - The Usual Suspects:*

A chapter about the mysteries of performance, security and such
seemingly intelligible stuff, among these are *property based testing*
and *behavioral code analysis*.

The last of these was new to me. It is about looking at how the code base
evolves over time, e.g. which files are prone to changes or are more
changed by one person than others. All kinds of interesting stuff like that.

*Chapter 16 - Tour:*

With the *fractal architecture* in mind, Mark guides us through the
main parts of the code base for the *Restaurant reservation system* with
a few surprises I will allow future readers to discover for themselves.

Download the code and take a look.

**Conclusion:**

This is not a great book. It does contain some gems and take-aways here and there
but it is way too long for the goodies it *does* contain. The target audience is not
crystal clear; at some times the book seems to be for rookies, at other times it contains more advanced stuff, but really doesn't go into much depth about it.

Seeman *is* without doubt an adept writer but my view is that the book should have been much shorter. Seeman could have written a book that fits in your head.

There is an extensive list of references, though. And *that* does contain
a lot of interesting reading!
