# Tidy First? - A Review

![Cover of Tidy First?](https://learning.oreilly.com/library/cover/9781098151232/250w/ "Tidy First?")

**Rating**

⍟⍟⍟◯◯

[Tidy First?](https://www.oreilly.com/library/view/tidy-first/9781098151232/) is comfy
little book clocking in about 120 pages written by the grand father of
[Extreme Programming](http://www.extremeprogramming.org/):
[Kent Beck](https://www.kentbeck.com/).

I'm reading the O'Reilly ebook.

See also [my reading list](/pages/reading-list) and [resources](/pages/resources)

## Who is it for?

This is most definitely a book aimed at developers, probably the more
inexperienced ones, but my (humble, of course) oppinion is that we all
may learn something from the book, so that even experiences developers may
get a few valuable take-aways.

## What is it about?

It is sort of about refactoring and messing around with legacy code, without
making a (accidental) mess.

It's been too long since I've read [Working Effectively with Legacy Code](https://www.oreilly.com/library/view/working-effectively-with/0131177052/), but my feeling is that
_Tidy first?_ sort of creates a foundation for that to build upon, while on the same
time it does overlap on some parts.

---

# The review

## Preface

> Software design is an exercise in human relationships

Again it is being recognized that [it's a people problem](https://en.wikiquote.org/wiki/Gerald_Weinberg).

Kent explains his take on _emperical software design_.

## Introduction

Kent's personal mission is revealed: _help geeks feel safe in the world_. A noble, but
ambitious quest!

## Part I. Tidyings

_Tidyings are the cute, fuzzy little refactorings that nobody could possibly hate on_.

_"Refactoring" took fatal damage when folks started using it to refer to long
pauses in feature development. They even eliminated the "that don't change behavior"
clause, so "refactoring" could easily break the system._

_If the design were like thus and so, making that change would be easy(-er). So
make the design like that._

_When you see a comment that says exactly what the code says, remove it._

Part I consists of 15 chapters each listing a small, neat _tidying_, mostly one-pagers:

1. Guard Clauses
2. Dead Code
3. Normalize Symmetries
4. New Interface, Old Implementation
5. Reading Order
6. Cohesion Order
7. Move Declaration and Initialization Together
8. Explaining Variables
9. Explaining Constants
10. Explicit Parameters
11. Chunk Statements
12. Extract Helper
13. One Pile
14. Explaining Comments
15. Delete Redundant Comments

## Part II. Managing

About _managing_ your tidyings. _Tidying is geek self-care_ but _just because
you can tidy doesn't mean you should tidy._

### 16. Separate Tidying

Should tidyings be batches together with other changes? How many tidyings should
be committed together? Should you do reviews of your tidyings?

### 17. Chaining

> Tidyings are like potato chips. You eat one, and you'll want another.

How one tidy may enable (you to see) other tidying possibilities. _Be wary
of changing too much, too fast._

### 18. Batch Sizes

A deep dive into batching of tidyings.

> In teams with trust and a strong culture, tidyings don't require review.

But a strong culture of what? ;)

### 19. Rhythm

[I got rythm](https://en.wikipedia.org/wiki/I_Got_Rhythm), but I still need some
kind of measure for the metronome. How _long_ should my tidyings be?

### 20. Getting Untangled

> ...you are not just instructing a computer, you are explaining your intentions
> for the computer to other people.

About how to separate tidyings and behavioural changes.

### 21. First, After, Later, Never

Should you tidy? Should you tidy first? After? Later? Of course; _it depends_...

## Part III. Theory

If you've made it this far into the book, good for you! Hang on tight, because
this is where it actually starts to get interesting!

### 22. Beneficially Relating Elements

Quote a mouthful which on it's own makes absolutely no sense, but the chapter does
make a reasonable effort into explaining it, which is necessary since this is
also Kent's definition of _Software Design_ ;)

### 23. Structure and Behavior

According to Kent there are two ways in which software creates value:

1. What is does today
2. The possibility of new things we can make it do tomorrow

Possibilites can also se seen as options, and \*Options are the economic magic of software".

_The structure creates options_ (or inhibits them), but _structure is not legible
in the same way behavior is legible_. Behavior is what makes up features and those
we know about.

### 24. Economics: Time Value and Optionality

Kent here creates the base for comparing software development with the nature of money:

- A dollar today is worth more than a dollar tomorrow, so earn sooner and spend later
- In a chaotic situation, options are better than things, so create options in the
  face of uncertainty.

This is of course often two conflicting strategies, which the following chapters
follow up upon.

### 25. A Dollar Today > A Dollar Tomorrow

The saying "A bird in the hand is better than 10 birds on the roof" can very much
be likened to to the nature of money.

_Time Value_ is about how much money is worth at what time. The same with software;
It has a current value (some set of features) and in some time it may have a
diffent value (another set of features).

### 26. Options

About how _options_ in software create value. An option like "What behavior can
I implement next?" is valuable even before implemented. That is, the software
is more valuable if it allows options to be implemented; _Tidy first_.

Kent then explains options (futures, I guess?) in finance using potatoes. Neat.

Still the problem of "Balancing creating options and changing behavior" lingers.

### 27. Options Versus Cash Flows

_Tidy first? Yes. And also no_. Well, that cleared that right up ;) But of course
it depends. Changing code and adding code is naturally not without cost, but as
Kent so eloquently puts it: \*We are firmly in the land of judgement here", and even
though he also puts in a few formulas they too are based on judgement.

You have to feel good about yourself and your job, so _A little bit of this "tidying is self-care" is justified_.

### 28. Reversible Structure Changes

> In general, we should treat reversible decisions differently than irreversible decisions

As in: _Not everything need to be a pull request_. Of course, considering Kent's
legacy, pair programming beats PRs all the time.

### 29. Coupling

After defining what is understood by coupling, Kent makes a bold statement:

> Coupling drives the cost of software

But if you have ever had _a cascading change_ you may want to agree.

As with refactoring, Kent complains that _coupling_ has lost meaning over time; you
simply state that A and B are coupled, but fail to mention _why_.

### 30. Constantine's Equivalence

Constantine refers to [Larry Constantine](https://en.wikipedia.org/wiki/Larry_Constantine).

Here Kent argues that _the cost of software is approximately equal to the cost of changing it_. And furthermore that the cost of changing is approximately equal to the coupling
in the software. So we must decouple to reduce costs.

### 31. Coupling Versus Decoupling

Decoupling does not, of course, come for free. Neither does coupling. Coupled software
was also worked on, costing time and money. And _some coupling is just inevitable_. My take
on this is that if there is no coupling there is also no functionality.

_Decoupling creates options_, so you must make the choice: _pay the cost of coupling or
pay the cost of decoupling_.

### 32. Cohesion

The first implication of cohesion: _Coupled elements should be subelements of the
same containing element_.

### 33. Conclusion

Kent sums up the book nicely and teases us (again); mentioning a _next book in the series_.

---

## Conclusion

I have a hard time making up my mind about this book.

Kent complains about how "refactoring" has been distorted into "rewrite". I guess he's right, but I'm not sure how introducing a new concept, such as "tidyings", will help remedy that situation. Tidyings can be seen as smaller refactorings, which Fowler probably didn't think of at the time of writing or might have simply disregarded.

The whole idea of comparing software design and tidyings with options in finance is quite
good, which makes the book all in all make good sense, but if just doesn't offer much else.
Hence only 3 stars.

It is probably a book about common sense and as I have previously said (and I will say
it again and again): We need common sense knocked into our heads. Hard. Again and again.
Common sense seems to be seeping through the cracks and be forgotten. Just as the meaning of
refactoring and coupling.
