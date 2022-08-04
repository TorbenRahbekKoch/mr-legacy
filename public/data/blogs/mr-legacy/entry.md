# Mr. Legacy

*This blog post was [originally posted on my company website](https://softwarepassion.eu/mr-legacy/), which is why the publish date
is before this website was created ;)*

It is here reposted as it was
with only a few additions, highlights, clarifications and corrections of typos.

## The mystery unravelled

At my current (at the time of writing) work place I am often referred to as Mr. Legacy. This is a title that I’m honoured to have earned. But how did that come about?

I was hired to do some fire fighting. My boss knew me from a previous assignment and it was initially meant to be a short assignment, but I liked it there and they seemed to like me, and one thing led to another, so I stayed on board for close to 8 years.

For some reason I have a knack for messing around (in the good way) with old crap, that’s just saying it as it is. I’m very good at surgical incisions, “spot-improving” the code and adding features without otherwise ruining the system. And I’m not just good at it. I actually like it!

But there was a time when even I was bested. I’m not proud of it, for several reasons, which all will come clear.

## The besting

It all started in 2008 when I got a call from my job-broker: Would I like a small, cosy 120 hour project, implementing a few features in an existing project, written in Borland C++? Of course I would since I hadn’t been working for a couple of months. It was 15 years since I've last touched
Borland C++ and it wasn't a lost love, but I'm not that picky.

The application was a automatic dutyroster planner used for
managing dutyrosters for employees who work different shifts and takes into account various union rules, employees wishes, overtime etc. The built-in auto planning feature worked surprisingly well.

At the time they had made some promises to a customer about the application. It should be able to not only plan the shifts but also record which hours the employees were actually there.

My job in that respect was to implement an export of those hours to a third party accounting system. A simple job, you would think, but I was in for a nasty surprise.

My first action was to take a look at the database. The data obviously had to be there somewhere to make an export happen. There where some tables that had the right smell, but did not fit the description exactly. After a few hours I had to give in – I could not figure out how this was supposed to be done. And at that time I was pretty certain that it would take more than the 120 hours to implement, because the application did not seem to even have the features for recording the hours.

I had a meeting with the boss. Told him my view of the lay of the land. At the same time he was both shocked and not entirely surprised.

It was probably not well thought through at the moment, but I suggested we made some kind of partnership deal because I really did think there was something valuable in that product. Great ideas, great functionality and existing customers. We came to an agreement, details of which are not relevant here.

Then started the ordeal. Another requirement from the customer was to enable multi-user support. Had I known about that specific requirement I might definitely not have entered into the agreement.

The application used a proprietary database – EasyTable – which was really a quite decent embedded database. And it sure was easy to use.

But in the application there were no sight of a data access layer. It had SQL littered all over it. Concatenated SQL. Not parameter bindings. At all. Table and field names was repeated all over, too.

To enable multi-user support we had to use another database, wherefor we needed to become more or less database agnostic. In other words: A DAL was needed. A database independent one. A task that in itself is not that difficult.

I wrote some basic Entity and EntityList classes and quickly figured out how to implement some C++ template classes to help me out. Boring job, but it had to be done.

The really hard part was to change existing embedded SQL-statements and
magic string field names to using Entities and EntityLists.

The application used a DataModule form on which TQuery-thingies (Delphi did the same, if I remember correctly) was put more or less resembling the actual tables in the database. Mostly less. These tables were generally abused all over the application to hold some random SQL and return the corresponding recordset or to update various data in the database. Data which had
nothing to do with the name of the DataModule.

The main form in the application had about 10.000 lines of code behind. A staggering number of lines, but if it were well-written it would have been manageble. It was not well-written. Global variables were as abundant as parentheses in LISP. And they were referenced from everywhere, even other forms. And the support for any refactoring was left to search and replace.

The application was a nightmare, it was surprising it worked at all, let alone worked as well, as it did.

Eventually I had to throw in the towel. After I had sunk 100s of hours into the application I gave up. It was cleaned up exceptionally well at the time, but admittedly I ran out of money not to earn while working on it.

## What went wrong?

What went wrong for the application in the first place? What thoughts went into choosing C++ Builder for the task? At the time, in 2008, it would have been considered insane, but we have to look at it in the context of 2003 where they started the application. What where the options back then?

.NET 1.1 came out officially [9. April 2003](https://en.wikipedia.org/wiki/.NET_Framework_version_history) and really was not useful for much before then. I do not remember the state of the Winforms designer, but I guess it was just as good as the VB6 designer, which was horrible, but still was used to create loads of applications.

The other option was Delphi, also from Borland. I guess the form designers where about the same level and I was pretty fond of the designers in Delphi 1 to 6.

The people making the choice was not very experienced in the business. They were just out of school and therefore chose what they had used in class: Borland C++ Builder, which anyone who have used it will readily admit is not a good product. But still, I understand why they made the choice.

Whatever tool they had chosen it would not have saved them from the flood of mistakes they continued to make. Again, it was probably understandable. The application started as a proof of concept and continued to grow and had a demand so they never could get around to refactor it.

## Lessons learned

But did I learn something from this quest? I have to say yes. It was hard earned, so having nothing learned would be sad.

In hindsight I should, of course, have left the assignment after the first few hours but what could have warned me of that back then?

Firstly I probably should have spend a fair amount of hours trying to understand the innards of the application before entering any agreement about it. That I did not do, I got carried away and was probably too self-confident.
I had, after all, been a developer on a 400.000 lines of C++ application for
several years. So I was like: "How hard can it be?"

Today I would – in the same situation – simply state that the wanted functionality could not be implemented with the current state of the application.

I should, also, have talked to some customers – or at least the boss – about expected and known feature requests, so I could have judged whether they were feasible.

If I then decided to move forward I should have looked into moving
the application to a modern tool set, which at that time probably would
have been Visual Studio and C++/CLI. Further development should then
be done in C#, which is a vastly more accessible language than C++.

I am still not scared by old, crappy code, but I have learnt to negotiate
a better deal. Don't hesitate to contact me, if you've got some of that!