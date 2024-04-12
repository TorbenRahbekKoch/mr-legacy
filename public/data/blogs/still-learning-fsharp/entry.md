# Still learning F#?

TLDR: No.

The longer story...

It is now about 10 years since I decided to [really
learn F#](/blogs/learning-fsharp).

And

It is now about two years since I gave up on F#.

In the *Learning F#* post I listed 5 issues with learning a new programming language, 
in this case F#. 

## 1. The libraries and frameworks available

Nothing have really changed here. F# is still able to call anything in .NET and 
even C# can call code written in F#.

There is, though, a hodge podge of various, somewhat abandoned, frameworks 
and libraries in F#, which no longer (if ever) make sense. E.g. 
[Fable](https://fable.io/) which is an ambitious undertaking, but is also 
wildly complex.

I guess C# has some of those those, too ;)

The fact that Microsoft does all of its .NET development in C# does
not help F# in any way. Both languages can call each other, but it
ain't pretty.

Learning a new language outside the .NET ecosystem would be far
more difficult, since the libraries would be quite different.

## 2. The eco-system, IDE, tools etc.

Where the F# compiler with continuously compiling and correspondingly updating
the IDE with error information was ahead of the C# compiler, C# now has Roslyn
and has improved immensely F# hasn't improved much and
does not really lead this particular race anymore.

The IDE itself did not help much and still, comparing to C#, does not do
much. 

In the meantime Visual Studio Code has come along, along with
the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/)
which all in all has resulted in more options for a lot
of programming languages, where especially F# and C# previously was
hard to do outside Visual Studio. 

Also Microsoft has served us .NET Core/5/6/7/8/... and embraces
open source to a high degree (probably where it most serves their business model, but still...)
all in all leading to the experience of working with the code
being very similar for C# and F#. 

## 3. The paradigm and syntax

The paradigm is, of course, still vastly different from object oriented, but
C# has gotten even more functional constructs and syntactic sugar
making C# code possibly more dense, one of the main talking points of F#.

I don't find in general, though, that dense code is naturally more
readable - that is the same as saying that text with a 
high lix score is more readable than one with a low score - but
the denseness of C# I do find more readable. The C# language
designers are better than the F# language designers, in my humble oppinion.

C# just needs [discriminated unions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions)
and possibly a [forward pipe operator](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/)
to have a type system as about as good as F# does.

I still find it difficult to write easily readable code
in F# and, judging from just about all the F# code I have
seen, so does everybody else. To be fair; a lot of people
struggle to write readable code in just about any
programming language, but the denseness of F# simply adds
to the struggle.

There are many ideas and concepts in F# (and other functional languages)
which I absolutely are a proponent for, e.g. immutability, but 
also this C# has now. Even with a dense syntax (that is: `record`).

F# has a bad habit (in my oppinion) of using operator overloading - especially
in computation expressions e.g. `async` and `task`, which is a 
powerful construct but also makes you need quite a lot of context
when reading then code. That denseness comes with a cost of high
cognitive load.

## 4. Structuring the code

Well, F#, let alone functional programming in general 
is still not main stream and
it still haven't resulted in some general advice on how to structure the code. 
Everybody is still trying to work it out on their own, which from what
I have seen not many have had any particular success with.

And to be fair. A lot of people struggle with this in C#, as well. I have
even seen crazy advice like having all your code files in one directory.

## 5. The milieu

Really. After 10 years nothing has changed here. It's as if the community
tries to scare people of. Being elitist has that effect.

That being said; Software development is generally hard to do "right". We
need clever people in the business. We need good programming languages
and environments that help us stay out of trouble. I just don't think
that the elitist attitude helps in any way. We need clever people. Just
lose the attitude.

## Why did I give up?

It's not that F# is a bad language. It does have some issues
with "weird" syntax and features being bolted on over the 
years, as does C#. Most languages do.

I'm not blaming only the external factors listed above, but also myself. 
The struggle was real, I was working on a (private) high performance
project, where the overhead of the F# type system was in the way as
was the syntax and paradigm.

I love discriminated unions, and although I'm not aware of how
exactly F# implements it in the [CLR (Common Language Runtime)](https://learn.microsoft.com/en-us/dotnet/standard/clr)
it does have quite an overhead in memory consumption and
therefore performance.

That said: Discriminated unions in C# would suffer from 
the same problems, unless the CLR gets actual support for
discriminated unions. That would be neat! And F# would
benefit from thas, too.

In general it was a struggle for me to write easily readable code
in F#. After rewriting the stuff in C# everything feels familiar
and performance is way better. *Familiar* is an important word
here. *Familiarity* is important for adoption and when code
looks so different as F# does compared to C# familiarity costs
a lot of hours.

I have only used F# privately and I probably would have been
more successful had it been a full-time job.

Microsoft does not, obviously, support F# as much as their
love child C#. On top of that the [F# foundation](https://fsharp.org/)
struggles a lot with how to spread out the good
word of F# and launches one beginner attempt after the other, which
seems to be a waste of time.

In my humble oppinion if you want F# to be used more you
should focus on how solve the problems most C# developers
have: E.g. using ASP.NET out of the box with F# - which actually is fairly easy nowadays.
Don't run around introducing [Giraffes](https://github.com/giraffe-fsharp/Giraffe)
or telling weird [Fables](https://fable.io/). 

Focus on the day to day usage and ease people into it instead of going
all elitist on them.

Even though I for now have hung my F# suit back in the closet I
haven't ruled other languages out. I try to follow along with
other languages, but I am mostly a C# Dressed man, now ;)