# Serverless as a Game Changer - a review

Serverless as a Game Changer: How to Get the Most Out of the Cloud

**Rating**

[Rating: ⍟⍟⍟⍟◯](/blogs/how-am-i-doing-my-reviews)

![Book cover](/data/blogs/serverless-as-a-game-changer/serverless-as-a-game-changer.jpeg)

I'm reading [the O'Reilly ebook](https://learning.oreilly.com/library/view/serverless-as-a/9780137392674/).

It is written by [Joseph Emison](hhttps://www.linkedin.com/in/joemastersemison/).

Foreword by Vaugn Vernon - it is his Signature Series, after all!

See also [my reading list](/pages/reading-list) and [resources](/pages/resources)

I'm publishing the review as I go along.

# Who is it for?

Architects, developers, project managers. You know. Software people!

# What is it about?

Why Serverless is so awesome. And how to get there.

---

# The Review

## Part I. The Serverless Mindset

### 1. Introduction

A short chapter highlighting the various advantages if using serverless and a bit
on why it isn't being adapter faster than it is, mostly due to lack of education
and not wanting to kill your darling. Lack of man power also is part of the reason.

It takes buy-in from all levels in an organization to start making changes.

The author makes an effort to really state that the book is not about SOA,
monoliths, microservices, and no-code/low-code platforms.

### 2. The Real Cost of Software Development

Build or Buy or Both?

Well, it depends, but probably "Both". Software costs are made up of several costs:
Direct, Opportunity, Indirect, Fixed, Variable, Sunk, Controllable.

Direct costs are the money spent on building and running the software. They are often
severely underestimated for many reasons, among those are Not Invented Here.

When estimating costs it is important to understand that code is a liability. It is not
an asset. It is a means to an end. It solves a problem. The smallest amount of
maintainable code which solves the problem is the right amount.

Therefore a solution is very often closer to Buy than it is to Build.

### 3. Serverless Architectures

The confusion about serverless partly stems from the definition having evolved over the
years, starting with "just" functions as a service and now being more like
"Serverless is a way to focus on business value". It lets you focus on writing
business logic, not coding supporting infrastructure for your business logic.

"You should go Serverless because you want to focus on creating value - and at your
company, you endeavor to apply technology toward the creation of business value".

There are 4 specific criteria for defining Serverless:

1. No infrastructre provisioning or management
2. Automatic scaling
3. Pay for value
4. Highly available and secure

Serverless applications are made out of managed services, front ends, back ends, and
functions. All of which may have custom code.

Both Serverless and non-Serverless applications often use managed services. Front ends
run on smartphones, web browsers and ordinary computers.

Back ends are functionality needed for the front end to work properly. Functions with
functionality.

Security is hard to handle when going fully serverless. Clients can - per definition - not
be trusted.

### 4. Serverless Objections, Serverless Success

You can expect some resistance in an organization when proposing to go Serverless, since
some of the expertise in the organization will likely no longer be needed.

Serverless also gives you some loss of control, of course it does, when you hand something
of to be done by other people. Just ask the question: Under what circumstances would a
transfer of control to a vendor be a poor decision?

It is important to understand the slim chances of your organization running the services
better than the provider which makes their living from it.

Lock-in is a valid concern. Consider the uniqueness of the service and cost of switching
away from it.

Performance and especially cold starts have made ground for some horror stories. But
don't let the past deter you.

Security is naturally a concern and it should be, no matter how you build and run your
applications. But this part is also covered.

The chapter ends with a couple of success stories. Could have been fun to have some
horror stories and the lessons learned from them, as well.

## Part II - Real-World Serverless

### 5. Introducing Branch

Branch - an insurance company - is posting as the ultimate case study. The company is
cofounded by the author, wherefore he has the possibility to share intimate details
about their Serverless story.

The premise for their choice is that "The easiest systems to maintain are those that we
do not build, run, or maintain, but those that we pay others to build, run and maintain.
The most maintable code is no code."

Also another of their choices may a bit surprising: Instead of rushing to get an
MVP (Minimum Viable Product) out there they take their time and optimize for maintainability
because they believe that an MVP has a high risk of accumulating tech debt.

[An older article by Dan McKinley](https://mcfunley.com/choose-boring-technology) talks about
choosing "boring technology". Technology thas a proven track record of being good
technology. One job of an architect is to keep up with the growing number of technologies
who are growing old (and good) enough to have gotten a good track record. This should be a
group effort. Sometimes you settle with something that is "good enough" instead of
perfect.

At Branch they "spend a significant amount of time researching the best options before we
build something significant".

They use "domain-aligned teams", probably similar to "stream-aligned teams". JavaScript and
TypeScript is the language of choice making it fairly easy to shuffle people around between
teams when necessary.

It goes without saying that they have an automated test suite.

"Branch builds systems that can be maintained by the average developer"

### 6. Introducing Insureco

The fake insurance company to make Branch look good by comparison ;)

Insureco is a "classical" and old company with standard organizational heirarchies. They
are losing customers, slowly but surely and believe that investing in digital
capabilities is the way forward.

The digital transformation has resulted in running just about everything in
Kubernetes, which of course requires an in-house team of Kubernetes experts.

Enterprise Architects call the shots about technology choices, development methods and
so on.

The development is divided into technology teams (we just need to have the worst of all
worlds).

Further details are not relevant here, suffice to say that Insureco generally follows
"best practice" (also known as mediocrity) and they suffer for it.

### 7. The Clash of Cultures

Organizations cannot _spend_ their way to success. At least not all the way. It
also takes organization.

The point of this chapter is to demonstrate how the serverless architecture of
Branch enables them to move much faster than Insureco.

A system is dependent on subsystems. Your application runs on a computer with
an operating system. Just as you wouldn't want to build the network stack yourself,
you don't want to build the operating system yourself. They are commodities.

As you move further up to your application, the more commodities you use, the
faster you will be able to move with the actual business of your application.
_Your_ business.

When an organization is not able to move fast with the development it has a
tendency to pack even more feature requests into a release, making the release
even harder to manage.

If you then on top add the use of technology teams the amount of coordination
and communication for a release is over the roof.

When you on the other hand have teams that can focus on the business and deploy at
will, there is no problem in having only minor features in a release. Serverless
is an enabler for this.

When teams can focus on business goals they generally also will fell more
content in the job. The sense of making a difference is important.

## Part III - Getting to Serverless

### 8. Getting to Serverless

It's easy to get nowhere, but less fun.

It is of course not just about tech, but very much also about people and culture.
Software development _is_ a socio-technical exercise. Getting buy-in from the entire
organization is important. It is very important to optimize for _maintainability_ and
enable a _high velocity of future changes_. This can mean buy over build, using existing
libraries and frameworks, and so on.

When planning to implement new functionality, you should, in order of importance, choose:
Don't Build, Downscope Out, Buy SaaS, Use an API, Use OSS, Write maintainable code.

[Accelerate](https://learning.oreilly.com/library/view/accelerate/9781457191435/) gets
a shout-out, since it has _metrics that matter_: Change Lead Time (Cycle Time),
Deployment Frequence, Change Fail Percentage, Mean Time to Recovery.

### 9. Iterative Replacement

Let's rewrite the crap and hold feature requests until done! Give me "Methods that
don't work" for $1000. Answer is: _The Knife-Edge Cutover Doesn't Work_. Question is:
_What is otherwise known as big-bang replacement?_

Instead to the strangler fig, or what the book prefers to call it: _iterative
replacement_.

The book suggests using a Reverse Proxy in front of the old API. This of course
requires that you have an API, behind which is all the business logic, which is
not always the case. Sometimes you happen to have a thick client :)

But apart from that, it is a good idea.

Don't do the mistake and think that you'll eventually actually shut down the
old system. You may very well end up with having a minor part of the old system
running "forever". This is okay. It is much smaller now and therefore much
easier to maintain.

When you do iterative replacement to serverless it is important to use the order
from chapter 8. Start with identifying potential managed services. Do your due
dilligence and design what the application/system would look like if you
were starting it as a greenfield project.

Transitioning to serverless while rewriting will very likely mean that the project
becomes cheaper and better and completes faster.

It is also very possible that you can move your monolitic database to more
specialized datastores. The book suggests that you make the final move away
from your current database at the end of the project. I suggest to read that
part very carefully. Your data is essential and keeping it under strict control
is just as essential.

### 10. Training and Continuing Education

It turns out - not surprisingly - that going serverless is not something you just do.
The cultural shift is important and you need training and continuing education for technical
as well as nontechnical staff. Jobs and tasks will change.

When servers changed from just physical hardware to virtualization one administrator
could oversee much more servers. The same happens with serverless. When there is no
virtual servers to oversee the administrators get their hands free to oversee
much more. They no longer have to worry about keeping operating systems up to date, etc.

Unless you're an infrastructure company, infrastructure is not your mission. But
operability, resilience and reliability are more important than ever.

Your vendors will become even closer, working with them will be like working
with an internal team.

Embrace releases. You should be able to ship at (just about) any time. Shipping
should be second nature.

Migrate, migrate, migrate. Don't leave too much old crap running.

Ops is everybody's job now.

In serverless architectures, it is rarely necessary to worry about any hardware
or scaling issues.

The massive complexity of a typical enterprise codebase is not conducive to
bringing in developers who have not worked with something similar in scope.
Serverless changes this, making it easier and safer to hire junior developrs.

### 11. Your Serverless Journey

It's not where you are going, it's how you get there.

"When an organization decides that it needs to write custom software to differentiate itself, it should build those applications with Serverless architectures", because "building undifferentiated
technology takes time, money, and cognitive capacity".

How do you get started with Serverless in startup or a small or medium-size organization? Startups
are uniquely positioned to use serverless, as they don't have any legacy. They start fresh.

If you happen to be in an "established" organization the book has advice for you, no matter
what kind of role you have. The most difficuelt part is that a organization like this typically
existing, and functional, technology. There's no immediate reason to do things very differently,
so it is much harder sell.

Large enterprises have many teams and systems already running, there's a lot of momentum
or inertia, which makes it vital to change culture. You need to assess how moving to
serverless will change the business and make these findings visible to people around you.

## Part IV - Appendixes

### Appendix A - Directory: API Hubs

First a (sort of) definition of what an API Hub is.

Then a walk-through of some API Hubs out there along with pros and cons:

- AWS AppSync/Amplify
- Google Firebase
- Fauna/(Netlify or Vercel)/Auth0
- Supabase

### Appendix B - Directory: Identity and Access Management

Who are you? What can you do?

- Google Firebase Authentication
- Auth0
- Amazon Cognito

### Appendix C - Directory: Databases

Data, data, data - where to put it?

- AWS DynamoDB
- Google Firebase and Firestore
- Microsoft Azure Cosmos DB
- FaunaDB
- CockroachDB Serverless
- PlanetScale
- Neon and Surreal DB

### Appendix D - Directory: Functions

To make it function, you need: functions.

- AWS Lambda
- Google Functions
- Azure Functions
- Netlify Functions
- Vercel Functions
- Cloudflare Workers

### Appendix E - Directory: Managed Services

Don't do what managed services can do for you.

- Algolia (search index)
- Cloudinary (image and video hosting and manipulation)
- Segment (event bus for user events)
- Customer.io (campaign tool, triggered by e.g Segment)
- Lob (physical-mail gateway)
- Smarty (physical address resolution and correction)
- DocRaptor (Generates PDFs from HTML and CSS)
- Prismic (headless CMS)
- Flatfile (importing various files, e.g. Excel)
- QuotaGuard (HTTPS proxy)
- Basis Theory (Tokenization service)
- Upstash (running containers as serverless)

---

# Conclusion

There's no doubt that Joseph Emison is enthusiastic about serverless. And why shouldn't he
be? He built an entire, successful business by using serverless and he let's us in
on some of the "secrets" behind the success.

There's even good, general advice on moving your not-serverless organization to a serverless
world. It's all about culture.

It is a nice and short book, right to the point. I don't think it is filled with revelations
as such, possibly unless you are totally new to the serverless mindset, but it is filled
with nice quotes, which can help you convincing your organization.

All in all I think the book deserves 4 stars, because it is concise and it gets the
message across.
