# Learning F#

*This blog post was [originally posted on my company website](https://softwarepassion.eu/learning-f/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was
with only a few additions, highlights, clarifications and corrections of typos.

---

I have started on a new quest. I want to learn F#. And I want to as good in F# as I am in C#. Well, you might say, how hard can it be? It's just another language. Just my initial thought, sort of. There is one huge difference compared to C#: F# is (firstly) a functional programming language, whereas C# is an object oriented programming language. And to me that is a considerable obstacle. Let me be honest here: the one course in my computer science study that concentrated on a functional language ([Miranda](https://en.wikipedia.org/wiki/Miranda_%28programming_language%29)) took me three tries to pass. Not something I'm particular proud of, but it sure is an indicator how hard it was for me - I am - honestly - not that stupid ;)

There are several issues with learning a new programming language.

## 1. The libraries and frameworks available

Since F# runs on the .NET (and Mono) platforms this is an issue that can mostly be overlooked. F# can call everything .NETish, and F# is a hybrid language, so various object-oriented frameworks (in C#) can be used, too.

## 2. The eco-system, IDE, tools etc.

Some people think that an IDE is not a good idea. I'll leave them to struggle with that. I like when my computer is helpful, especially when learning something new. F# is supported in Visual Studio, but the support is light years behind that of C#. There is not, for instance, something as simple as a rename-refactoring support.

The tools available are vastly different, as well. I'm used to 
[Resharper](https://www.jetbrains.com/resharper/) and uses its test runner when running unit tests. Since Resharper doesn't have the faintest idea what F# is this limits the usefulness of the test runner quite a bit. It can be used, though.

The F# compiler is wildly more intelligent and smart than the C# compiler. It almost does, out of the box, what [Roslyn](https://msdn.microsoft.com/en-us/vstudio/roslyn.aspx) is supposed to give to C#. The editor in Visual Studio uses the F# compiler to continuously compile the code and underlines (with red squiggly lines) problematic code, without you hitting compile at all. Something like what Resharper does when "Whole solution analysis" is enabled. Quite neat.

## 3. The paradigm and syntax

This is where I struggle the most. Functional programming is a vastly different paradigm than object oriented. And even though Microsoft has sneaked functional constructs into C# over the years, I still struggle with going all the way.

And in addition to have to think in a wholly different way about how to solve a problem I also have to get used to a wholly new syntax - both reading it and writing it. Here I am truly happy about using a fairly smart IDE, because even having it, I can sometimes ponder for minutes over some error, before getting it.

## 4. Structuring the code

After using mantras like ["one class, one responsiblity"](https://en.wikipedia.org/wiki/Single_responsibility_principle), one class per file, 
[SOLID](https://en.wikipedia.org/wiki/Solid_%28object-oriented_design%29), [Design Patterns](https://en.wikipedia.org/wiki/Software_design_pattern), libraries, layers and loads of other principles to keep me out of harm's way I'm now looking at a totally blank slate. Since functional programming still not has the benefit of being main stream (getting there, but not yet) the collective wisdom of the very good functional programmers still haven't been distilled into sound advice, so each and everyone is more or less on their own. This fact is intensified by something else I have noticed when meeting other functional programmers:

## 5. The milieu

The functional milieu seems to be - in some respects - a very mathematically oriented, elitist milieu, which - in its approach to programming - is very far from the many sound principles which seem to proliferate in the object oriented milieu. And this is strange. A lot of the things that good programmers do in object oriented languages, like using meaningful names, structuring the code in meaningful ways, functional programmers seem to regard with contempt. They seem to think along the lines of: Why write `let CalculateTax income = ...` when you can simply write `let ct i = ....`

This is, of course, overstated a bit, but the 
[write once, read many](https://retrocomputing.stackexchange.com/questions/15724/who-are-we-quoting-when-we-note-that-code-is-written-once-but-read-many-times) mantra still have a long way to go in the functional milieu and the general elitist attitude will work against adopting functional languages, since the average programmer will simply look at it and say: It's too hard. And to make a programming language main stream it has to be adopted by the average programmer.

## How am I going about it?

I have been wanting to get into F# for a few years, now. It started to get serious, when I in 2013 attended the Skillsmatter Fast Track to F# with Tomas Petricek and Phil Trelford. I then went to New York to attend the F# Tutorials, which I also plan to attend in 2014.

Then I bought the book (along with others): [Functional Programming with F#](https://www.imm.dtu.dk/~mire/FSharpBook/), which has exercises in it and seems to be a good book to teach me the building blocks of F#.

In Copenhagen a [functional meetup](https://www.meetup.com/MoedegruppeFunktionelleKoebenhavnere/) has started, where we, amongst other stuff, has a monthly meetup where we in groups work through the book. In connection with that I am exposing myself by uploading my feeble attempts at solving the exercises to [github](https://github.com/TorbenRahbekKoch/Functional-Programming-Using-FSharp).

I'm also trying to work at a more or less real world problem: [url routing and html templates](https://github.com/TorbenRahbekKoch/FsTemplates), where I try to focus on creating a nice API for the user of the library and on structuring the code in a nice, consistent and readable manner. Definitely a work in progress!

So all in all I'm attacking the problem from various angles and I feel I'm getting there - slowly, but surely!

I really want to be a skilled, versatile 
[FSharp Dressed Man](https://www.youtube.com/watch?v=6DVbt5W-DNc) :D!