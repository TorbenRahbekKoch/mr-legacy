# Architecture for Flow: Adaptive Systems with Domain-Driven Design, Wardley Mapping, and Team Topologies - a review

**Rating**

[Rating: ?????](/blogs/how-am-i-doing-my-reviews)

![Cover of Architecture for Flow](/data/blogs/architecture-for-flow.jpeg)

I'm reading [the O'Reilly ebook](https://learning.oreilly.com/library/view/architecture-for-flow/9780137392759/).

Written by Susanne Kaiser

I'm publishing the review as I'm reading the book.

# The review

## Series Editor Foreword

Brilliant foreword by [Vaughn Vernon](https://vaughnvernon.com/) 
(the book is part of his [Signature Series](https://www.informit.com/imprint/series_detail.aspx?ser=7937178)).

## Foreword

Simon Wardley praising Susanne Kaiser for a *masterful telling* of Wardley Mapping.

## Preface

A few clever words about change, Conways Law, the necessity of being able to adapt and
build adaptive, socio-technical systems, for which you need to understand the
competitive landscape in which you operate.

The book aims to align the business architecture, the technical architecture and
the team architecture to enable fast flow. Not in a strict, rigid way, but more as
a complementary to other techniques.

Dr. Russel Ackoff - a Systems Thinking pioneer - is introduced. I'm sure we'll
here more from him throughout the book, but especially his statement: "a system is ore than the 
sum of the behavior of its parts. It's a product of their interactions" is highlighted here.

Peter Drucker has in *The Effective Executive* a distinction between *effectiveness* (doing the right thing) and
*effeciency* (doing things right): "Doing the wrong thing right is not nearly as good as doing
the right thing wrong".

## Part I - The Concepts and Fundamentals

### 1. Business Strategy with Wardley Mapping

 *To “build the right thing,” it is critical to start from the user perspective.*

The *Jobs-to-be-done* theory, originated by Clayton Christensen, is brought forth leading up
to the introduction af Wardley Maps, which is a *business strategy framework*, and the 
*Strategy Cycle* contained therein. It is made up of *Purpose*, *Landscape*, *Climate*
*Doctrine*, *Leadership*.

Without having done a proper job of it, I think this is somewhat comparable to
[the Value Flywheel](/blogs/the-value-flywheel-effect) - at least the cycle part
of it.

*The Purpose* describes why the organization exists. *Landscape* is the environment
in which the organization operates, this is the part visualized by a Wardley Map.

Quite a few pages is here allocated to *introducing* Wardley Maps, bringing along
an example domain: *Event Planning*.

*Users* and their *User needs* and the *Components* fulfilling the needs are the
basic parts of a Wardley Map. 

The components are placed along two axes, a visibility axis (y) and an evolution
axis (x).

Some specific properties and characteristics, such as *ubiquity* and *market perception*
can be helpful when determining the evolution stage of a component.

This is a really good introduction to Wardley Maps (with more to come later in the book),
and I must say, the illustrations are really something!

*Climate* is the external forcing influencing and changing the landscape and over
which the organization has no control.

*It is not a lack of innovation that can kill an organization, but rather its inertia in response to change*.

*Climatic patterns help to reveal points of potential evolution*.

*Doctrine* is universal principles that apply to all industries, no matter their context, e.g.
*Know Your Users*, *Challenge Assumptions* 

There's loads of good stuff in this part, again helping determine where on the
evolution axis various components fit.

You team should consist of *Explorers*, *Villagers*, and *Town Planners*.

*Leadership* is where decisions are made, where strategies are chosen using techniques
such as *Open Approach* gameplay or *IPR* gameplay.

### 2. Exploring the Problem Space with Strategic Domain-Driven Design and Wardley Mapping

*Before diving straight into developing a technical solution that solves the user needs, it’s necessary to understand the problem domain first*.

Domain-Driven Design is absolutely one of collaborative ways to do this, using e.g.
the *ubiquitous language* and strategic planning.

DDD is useful for applying the doctrinal principles of Wardley Mapping. One can amend
a Wardley Map by putting the problem space at the top and the solution space
further down. Look at that figure 2.2. It is a work of art!

Strategic and tactical design (both from DDD) are very well suited for analyzing a problem 
domain and correspondingly design a software solution. 

When it comes to subdomains Wardley Mapping really shines. By placing these
on the evolutionary scale it becomes clear what to develop in-house and what
to buy.

*The Core Domain* is what distinguishes the organization from other organizations and is
just as much a subject for moving along the evolution axis as everything else is. 

*Supporting Subdomains* are non-differentiating, but still special enough not to be
widely available as off-the-shelf.

*Generic Subdomains* are areas such as authentication and payment.

**Build-or-Buy Decisions with Subdomain Types and Evolution Stages**

*Wardley Mapping emphasizes that each evolution stage has different characteristics*.

*Basing a “buy-versus-build” decision for a value-chain component solely on its location on the evolution axis risks overlooking its potential business-critical importance.*

*over-customizing off-the-shelf products beyond their core purpose can be costly and bears the risk of loss of standardization, reduced flexibility, upgrade limitations, performance issues, accidental complexity, and so on.*

*build-or-buy decisions are sometimes not either build or buy (i.e., binary), but rather build and buy.*

*if an organization’s core domain is perceived as well-defined, stable, and widespread, its components are typically mapped to the product or commodity evolution stage*

### 3. Designing the Solution Space with Strategic Domain-Driven Design

A bounded context is a vital concept in DDD. It defines
the boundary around a domain model and its 
ubuquitous language. 

Bounded contexts can be derived using e.g. 
Event Storming, Domain Storytelling, Example Mapping,
and User Story Mapping. All techniques are generally 
introduced in the chapter along with Architecture
Decision Records (ADR).

Bounded contexts do - at any given time - belong somewhere
on the evolution axis. And generally you want to move
it towards commoditity.

**Bounded Contexts and Architecture Styles**

*Bounded contexts do not mandate a particular software architecture style*.

**Bounded Contexts and Evolution Stages**

*Analyzing the problem domain, discovering the subdomain types, and designing the bounded contexts can be complemented with mapping the bounded contexts to their related evolution stages in the Wardley Map*.

**Strategic Design and Doctrine of Wardley Mapping**

*Mapping the bounded contexts to evolution stages and their related subdomain types reveals where the organization should strategically invest the most development effort, where it makes more sense to buy off-the-shelf products or to use open-source software, and where it should outsource to utility suppliers.*

**High Cohesion and Loose Coupling**

*Weak coupling allows modules to change without breaking other parts of the system. Teams owning weakly coupled modules can move changes forward far more quickly than if they have to change a strongly coupled system.*

**Overview of Context Maps**

*Context maps make change coupling explicit and visible*.

*Context maps consist of descriptive patterns that express different types of relationships and levels of influence, ranging from a free relationship, to an upstream–downstream relationship, to mutual dependency between bounded contexts and their teams*.

This is probably the best explanation - with examples - of context maps I have ever seen.

**Technical Communication Styles and Context Maps**

*Context maps illustrate integration and inter-team relationship patterns between bounded contexts and reflect change coupling, but are technology-agnostic and don’t mandate a particular technical communication style*.

**Summary**

*The solution space of strategic design focuses on designing subdomains as bounded contexts and mapping their relationships with well-defined context map patterns*.

*applying doctrinal principles enables an organization to adapt easily and respond to changes quickly*.

*Mapping bounded contexts to evolution stages and complementing them with context maps helps to visualize potentially problematic relationships, which might lead to tight change coupling.*

### 4. Implementing the Domain Model with Tactical Domain-Driven Design

The implementation part of DDD - Tactical design.

**The Ports and Adapters Architecture and Tactical Design**

*The Ports and Adapters architecture categorizes the software components into outside and inside parts*.

*This pattern decouples the business logic implementation from its environment components on the outside.*.

*It is well suited for complex, evolving domains with high levels of uncertainty requiring flexibility; for simple applications or short-lived prototypes, the added complexity may not be justified.*

*An application service is not a formal part of the domain model, nor is it part of the DDD building block patterns*.

*The application service must not contain business logic. If business logic operations exceed a single domain model’s finer-grained, self-contained behavior and need to address multiple domain objects, the domain service comes into play.*

From here on a smaller code example of the Conference Planner
System is used for showing the tactical design.

