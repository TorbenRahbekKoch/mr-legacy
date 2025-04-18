# Architecture modernization - a review

**Rating**

[Rating: ?](/blogs/how-am-i-doing-my-reviews)

![Book cover](/data/blogs/architecture-modernization/architecture-modernization.jpeg)

I'm reading [the O'Reilly edition](https://learning.oreilly.com/library/view/architecture-modernization/9781633438156/).

It is written by Nick Tune and Jean-Georges Perrin.

Forewords by Matthew Skelton and Xin Yao.

See also [my reading list](/pages/reading-list) and [resources](/pages/resources)

I'm uploading this review as I go along - hold on tight, there's 17 chapters:)

I am a bit slow reading this, I find it very hard to get through. Wait for it...!

# Who is it for?

I'll get to that.

# What is it about?

I'll get to that, too.

---

# The Review

## 1. What is architecture modernization?

A classic introduction chapter setting the stage for for the book; what is
architecture modernization? Hint: It's not just updating .NET to the latest
framework. There are of course deep technical aspects about it, but it is also
very much about mindset; in the entire organization.

_Better Value Sooner Safer Happier (Jonathan Smart)_ provides a perfect model
for the value modernization can bring.

_Architecture modernization is a good time to adopt modern product approaches,_
e.g. by using value streams (stream-aligned teams) and dual-track agile.

_Modernization requires short-term compromises for long-term prosperity, which is
why leaders are reluctant to commit._

## 2. Preparing for the journey

What do you need to pack for a safe journey? A change in mindset (to a socio-technical mindset),
leadership support, a compelling business case, patience, upskilling, Conway's lay,
Wardley Mapping, DevOps, are just some of the items in the suit case.

Architecture modernization is an effort that will likely take years, _there is no quick fix_. You
cannot bolt-on modernization. Take the time to talk things through, making everyone aware of
the complex challenges lying ahead. When looking at a multi-year process a month or two used
on discussing and getting alignment is well worth it, because _modernization efforts cannot be
led by a single superhero or even a small group of them._

_If your organization lacks expertise in technical practices, addressing this problem is crucial
before going too far with modernization._

## 3. Business objectives

An entire chapter devoted to answering the "Why?".

Justifying an architecture modernization is of course necessary, since that modernization
is not free. But neither is letting things slide.

There may be several reasons for wanting to do an architecture modernization and there
are several sections in the chapter dealing with those:

- Falling behind faster-moving competitors
- Architecture stifling business growth
- Pursuing an exit strategy
- Growth by acquisition
- Poor UX holding the company back
- Inefficient internal tooling and processes
- Improving hiring and retention

An architecture modernization may help (or even be necesssary) the company to grow
no matter which of many growth strategies are used:

- Product development
- Market penetration
- Market development
- Diversification

Clarity of purpose can be obtained by finding the North Star of the company: "The
metric that best captures the core value that your product delivers to customers".
There may be several north stars in the company; different products, projects, divisions
may work with different north stars.

In general a fine chapter helping to find the areas of the architecture that is in most
dire need of modernization.

## 4. Listening and mapping tours

_Starting modernization by listening_ seems like sound advice. Techies (me, myself and I included)
have a tendency to look towards the technical aspects first. But the needs of the customers and
hence the needs of the businuess should dictate how to proceed with a modernization effort, it
at all.

Therefore you need to listen to people, all kinds of people on all levels who may have differing views
on what are the actual needs.

It may be a good idea to establish an architecture modernization enabling team (AMET), who
are in charge of listening and mapping.

The chapter generally covers various aspects of who to choose, how to ask and listen, using
various techniques such as Impact Mapping, Business Model Canvas, Product Vision Board,
and Risk Storming.

Architectural diagrams are necessary for Risk Storming. Using the C4 model is considered
a standard approach.

When talking to people you can choose between highly controlled discussions and totally
unstrucured, ad-hoc discussions - or anything in between. Various type of questions are
considered, too, such as _Choose an emotion_, _Worst possible_, Devil's advocate\_.

Questionnaries/surveys are an effective tool for eliciting responses from many people and
can help choose who to talk to directly.

With interviews and surveys "done" you can start conducting workshops. One particular useful
technique in workshops is _Troika Consulting_ form _Liberating Structures_.

Other useful methods include _The design squiqqle_ and _The double diamond_.

Two excellent examples from real life give some insight into how you can plan actual
workshops.

## 5. Wardley Mapping

A book with more about
[Wardley Mapping](https://learnwardleymapping.com/)! What's not to like!

Seriously, I've only scratched the surface of Wardley Mapping but it seems so immensely
useful. It seems that our dear Simon Wardley has been productive and also came up with
_the Strategy Cycle_, which has five steps: purpose, landscape, climate and leadership.
My (fairly uneducated) guess is that _purpose_ somewhat corresponds to
_clarity of purpose_ from [The Value Flywheel Effect](/blogs/the-value-flywheel-effect).

When doing the listening tour talked about in chapter 4 it is obvious to ask the
participants about what they believe the organization's purpose is.

The _landscape_ includes _the whole competitive business landscape, including competitors_.

The _climate_ is what is outside your control, but still changes your _landscape_.

_Doctrine_ is about how the organization operates.

And lastly _leadership_ is about intentional, strategic actions, like expanding into
new markets.

When creating a Wardley Map you can get help starting out using _Ben Mosior's Wardley
Mapping Canvas_.

I'm probably not the only one struggling with the _evolution axis_ of a Wardley Map, so
the book goes in to some detail here. Very nice.

When talking about the _climatic forces_ it is essential to understand that
_all components evolve_ from _genesis_ to _commodity_ or die trying.

Some components may evolve because other components evolve. Think of all the components
that have evolved because electricity evolved into a commodity.

Accelerators and de-accelerators are about knowingly speeding up and slowing down
the evolving of certain components.

It is interesting to be made aware of much Wardley Mapping _actually_ covers.

## 6. Product Taxonomy

_An important part of architecture modernization is building a vision of the modernized
architecture._

Yes! If you don't know where you are going how would you know to get there?

To make the conversation about the future architecture easier you can use a
_product taxonomy_: a set of architecture building blocks driven by the products and customers
and the business itself. It is therefore, often, business specific.

An essential building block is _independent value streams_; the key to achieving
fast flow. What those streams entail hinges on what business outcomes you want
to optimize for. Independent value streams should be aligned to a business
subdomain.

Domains can organized into scope 1, 2, and 3 domain, depending on the complexity of
the size and complexity of the products which can of course vary quite a bit. From one-man
products to multiple-team products.

_Platforms_ are mostly of two types: _Domain platforms_; offering common services
across subdomains. _Internal development platforms_; helping teams build and support
their products.

When designing a taxonomy is it recommended to start with the easier parts, just to
get, well, started.

EventStorming and Wardley Mapping can be among the techniques used for discovering
the domains and corresponding boundaries. You may expect the doamins to develop
and change over time, so update and publish the taxonomies regularly.

You should definitely avoid making critical taxonomy decisions based on a
superficial high-level understanding.

It is not uncommon for you taxonomy vision to not align with the current software
and team boundaries. This will also point to unnecessary coupling between teams.

You may even be in a situation where some part of the taxonomy is not owned by
anyone wherefore you may need to form a new team, which takes time.

Teams may lack sufficient skill to carry out the modernization envisioned by the
taxonomy.

When modernizing a product the time could be ideal for also redesigning the UX,
automating previously manual business steps and workflows, and so on.

In very large organizations, we have macrolevel (scope 3 and above) constraints which
can effect thousands of people and changes therefore will be very risky. It may be
that there are wildly different products which never will have anything to do with
each other or they may be part of a huge suite, where users will expect similar UX.

What is a product actually? There are all kinds of differing and clashing definitions
but the book prefers the definition by Melissa Perri: "A repeatable solution that can
be offered to a market that solves a want or need (job to be done)".

When a product exists as e.g. a web app, Android app, an iPhone app these are called
_variants_ and not different products.

A _user journey_ may cover multiple products and product variants and is therefore
not part of the product.

The chapter ends with a comparison between _product mode_ and _project mode_.

## 7. Big picture EventStorming

A storm is brewing! A storm of events.

_EventStorming is designed around the idea of maximizing attendee participation and diversity._

And probably also around the idea of discovery, the discovery of especially _domain events_, which
are _something that happens in the domain_.

Apart from having a short introduction to the mechanics of EventStorming the chapter also has
advice on how to facilitate a session of EventStorming. And the Big Picture is exactly what it
says: About getting and overview of the entire domain without getting to nasty with details.

EventStorming is also very good at highlighting incorrect assumptions, because it is a team
of very diverse people, with different view points on all parts of the business. An
EventStorming session is a _space where valuable conversations and learning take place_.

When planning a session scope and purpose are the first elements to consider, simply to avoid
trying to cover too much.

A physical session requires a lot of wall space. 8 meters are recommended as the minimum. A virtual
session obviously does not suffer from the same restraints.

The session itself concists of e.g. Event Discovery, Event Sorting, a lot of
(sometimes heated) discussions. As the facilitator it is your job (among others) to keep
good order and discipline, making sure the session progresses as planned.

Some things to look out for in the discussions are _Users dropping out of a flow or funnel_,
_User frustration_, _Unreliable technology_, _Missing and disputed knowledge_,
_Process ineffeciencies and bottlenecks_. These may lead to opportunities, so watch
out for those, too.

There are som tips and tricks for the facilitator, such as _Don't model, tell a story_,
_Qualify events with the same name_, _Avoiding bikeshedding_, and lots of others.

The summary at the end is excellent, which can be said for every chapter so far.

The second edition of the book will probably have a chapter about
[Event Modeling](https://eventmodeling.org/), too.

## 8. Product and domain modernization

When doing a modernization it makes sense to take a thorough look at the product,
the features, the user experience, the whole ting, actually. There's probably
a lot you don't need, that doesn't work well and so on. The chapter is about
avoiding _the mistake of rebuilding the old system, with all its flaws, using
new technology and framework._

It comes as no surprise that the slew of techniques presented is probably the
same as if you were developing a brand new product.

You should involve the right people, such as _User researcher_, _Product designer_,
_Subject matter expert_ and so on.

Normally you'd look at the cost-benefit of modernizing but it can be quite fruitful
to look into what it will cost _not_ to modernize. That may be an eye opener. A good
question to ask is _"What is likely to happen if nothing changes and things continue
as they are?"_

If you have any metrics or are able to add metrics to the existing system that can
be very valuable for getting knowledge of how it is used. And especially what parts
of it is never or hardly ever used.

You could also spend time with actual users! They are very useful when you want
to do _continuous discovery_. A co-creation mindset also needs access to the users.

And interesting question in the (continous) discovery is e.g.
_"What have you given up asking for?"_. Some questions will be answered with
_"We've always done it like that"._ People don't like change.

Another variation of EventStorming is presented: _Process modeling EventStorming_,
again with tips on how to facilitate a session.

_Domain Storytelling_ is yet another workshop technique for discovering more
insights and oppinions. Where EventStorming will have just one time line with
events (and stuff) Domain Storytelling will result in what more looks like
a state diagram (it is not, though).
