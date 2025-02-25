# Accelerate - a review

Serverless as a Game Changer: How to Get the Most Out of the Cloud

**Rating**

[Rating: ⍟⍟⍟⍟◯](/blogs/how-am-i-doing-my-reviews)

I'm reading [the O'Reilly ebook](https://learning.oreilly.com/library/view/accelerate/9781457191435/).

It is written by Nicole Forsgren, Jez Humble, Gene Kim.

Foreword by Martin Fowler and Courtney Kissler.

See also [my reading list](/pages/reading-list) and [resources](/pages/resources)

I'm publishing the review as I go along.

# Who is it for?

Architects, developers, project managers. You know. Software people!

# What is it about?

How to go faster and better.

---

# The Review

## Preface

A short introduction with the promises of the book.

## Part One: What We Found

### Chapter 1 - Accelerate

_"Business as usual" is no longer enough to remain competitive_.

A lot of companies are turning into software companies and struggle with it, because
_Software and technology are key differentiators for organizations to deliver value to customers and stakeholders_. It has been shown that
_the strategic use of technology explains revenue and productivity gains more than mergers and acquisitions (M&A) and entrepreneurship_.

_The key to successful change is measuring and understanding the right things with a focus on capabilities—not on maturity_.

The authors have in their research _identified 24 key capabilities that drive improvement in software delivery performance and, in turn, organizational performance_.

### Chapter 2 - Measuring Performance

Measuring lines of code is so easy, but really not a good idea. Code is a liability, so
that is bound to go wrong.

Velocity ain't much better and it is not comparable between teams, even though many
have tried.

Some even have the idea to measure utilization, how much of the time available is
spent on "producing" something. Well, math (queue theory) tells us how bad an idea this is.

A successful measure should focus on outcomes, global outcomes, so
teams basically can't compete.

Four measures have been shown to be good for software delivery: delivery lead time
deployment frequency, time to restore service, change fail rate, although only
the first three can be shown to correlate with delivery performance. But
_these results demonstrate that there is no tradeoff between improving performance and achieving higher levels of stability and quality_.

It is also interesting to see that software delivery performance impacts
general organizational performance. One reason is that
_the ability to take an experimental approach to product development is highly correlated with the technical practices that contribute to continuous delivery._

### Chapter 3 - Measuring and Changing Culture

There is often talk about changing the culture in a company but not often are there
any actual actions behind the sentiment.

Surprisingly the authors have _discovered that it is possible to influence and improve culture by implementing DevOps practices._ That is, the tools and methods will actually
change the culture in the company. Who would have thought that:
\*the way to change culture is not to first change how people think, but instead to start by changing how people behave—what they do."

_Lean management, along with a set of other technical practices known collectively as continuous delivery (Humble and Farley 2010), do in fact impact culture_.

But if we want to make sure that we are "improving culture" we need to measure it.

For this the _Westrum model_ is chosen. It divides organizations into
_Pathological_, _bureaucratic_, and _Generative_ organizations.

Westrup also found that _the organizational culture predicts the way information flows through an organization_. Likert-type questions can be used to measure what kind
of organization an organization is and it seems that
_organizations with better information flow function more effectively_.

This fits with the findings in Google:
_who is on a team matters less than how the team members interact, structure their work, and view their contributions_.

### Chapter 4 - Technical Practices

I'd never thought enough about to notice, but Extreme Programming (XP)
\*prescribes a number of technical practices such as test-driven development
and continuous integration". This is in stark contrast to Scrum, which emphasizes
management and team practices.

It sort of makes perfect sense that having the focus on the technical side is
a good idea when you work with developers. Both because we generally like it and
because they make it easier and therefore more fun to deliver value.

One technical practice is of course _continuous delivery_, which enables us
_to get changes of all kinds—features, configuration changes, bug fixes, experiments—into production or into the hands of users safely, quickly, and sustainably._

The five key principles are: _Build quality in_, _Work in small batches_,
_Computers perform repetitive tasks; people solve problems_,
_Relentlessly pursue continuous improvement_,
_Everyone is responsible_.

To do this, we need _Conprehensive configuration management_,
_Continuous integration (CI)_, _Continuous testing_.

All this entails multiple feedback loops where we can se whether
we live up to our own quality goals.

_By giving developers the tools to detect problems when they occur, the time and resources to invest in their development, and the authority to fix problems straight away, we create an environment where developers accept responsibility for global outcomes such as quality and stability._

All this brings more joy to work and also less burnout. It also
ensures higher quality. And to know this we naturally need to be able to
_measure quality_.

Some indicators are _The (perceived) quality and performce of applications_,
_The precentage of time spent on rework or unplanned work_,
_The percentage of time spent working on defects identified by end users_.

Especially unplanned work is a good proxy for quality because it shows
that we failed _to build quality into our product_.

Version control goes without saying these days, but it needs to contain more
than "just the code". Also configuration scripts, test scripts, and what have you
should be in version control.

Having reliable, automated tests is important for a short feedback loop. And
short feedback loops are essential for minimizing context switches and the
cognitive load it brings.

Correspondingly long-lived branches should be avoided since they will
likely be costly to integrate and possibly cause more context switches.
Look towards trunk-based development, which really needs everything else to
be in place.

Information security should be "shifted left".

It can be difficult to adopt continuous delivery and it may take many
months to get there, but every improvement is an improvement!

### Chapter 5 - Architecture

Cathedrals can be very beautiful, but also very costly to remodel and renovate
and even though spaghetti may taste very good it _is_ a hazzle to untangle.

Architecture matters!

The keywords here are loose coupling, for both the systems and teams building them.
More keywords are deployability and testability: It is important to ask the
question: "How to we test this?" before implementing anything. If there is doubt
about how to test, there is probably also doubt about what to implement.

Having loosely coupled teams mean that you are able to e.g. _make large-scale
changes to the design of the system without the permission of somebody outside
the team_. You can also deploy and release the product without other teams
being involved. This leans into both Conway's law and
cross-functional teams, which have the necessary
skills to design, develop, test, deploy and operate the systems. This is
also known as a _stream-aligned team_ in _Team Topologies_.
