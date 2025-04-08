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

How to go faster and better and how to measure whether
we actually do go faster and better.

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

### Chapter 6 - Grating InfoSec into the Delivery Lifecycle

Cycle as if your life depends on it! Or rather: Build security in
as if your life depends on it, because _building security into
software development not only improves delivery performance but also
improves security quality._

"Shifting left" on information security means that information security
experts contribute to the design of applications and test suites, before any code
has been written. They are part of making _easy-to-consume, preapproved libraries, packages, toolchains, and processes available for developers and IT operations._ thereby
giving the developers the necessary means to easily build security in.

_High performers were spending 50% less time remediating security issues than low performers._

The _Rugged Manifesto_ is introduced by _Rugged DevOps_.

_Being rugged is everybody's responsibility._

### Chapter 7 - Management Practices for Software

How do you manage software development? (Wannabe) agile seems very popular these
days. Looking into _Lean_ as introduced by Mary and Tom Poppendieck may
serve you well.

The researchers looked at _Limiting work in progress (WIP)_,
_Having visual displays showing key quality and productivity metrics, available for everybody_,
_Using data from application performance and infrastructure monitoring tools to make
business decisions on a daily basis_.

These practices increase delivery performance, have a positive impact on team culture
and performance, decrease burnout, lead to a more generative culture.

Change management is necessary to some degree. We have limited time and resources
available so we want to make sure that we spend them on valuable stuff.

The research shows that the best performance is obtained when the approval for
change lies within the team. It makes sense, there is then no wait for external
parties to figure things out.

Auditing is necessary in some places and generally very useful, so
_ no changes should be able to be made to production unless they have been committed to version control, validated by the standard build and test process, and then deployed through an automated process triggered through a deployment pipeline_, which gives audibility.

### Chapter 8 - Product Development

Why lean is more mean than agile.

Lean development practices will predict a higher software delivery performance. These
practices include working in small batches, make flow of work visible, gather and
implement customer feedback, and team experimentation.

The research shows that it goes both ways. When you have a team with high
delivery performance it also most like uses lean practices.

### Chapter 9 - Making Work Sustainable

The pain of deployment is real (it is a contributing factor to burnout), but it shouldn't
be. So we may have to measure!

_teams that implement comprehensive test and deployment automation; use continuous integration, including trunk-based development; shift left on security; effectively manage test data; use loosely coupled architectures; can work independently; and use version control of everything required to reproduce production environments decrease their deployment pain._

Standard DevOps practices will help allievating deployment pain.

Burnout is a severe condition, but again DevOps practices can help prevent and reverse it.

Instead of trying to fix the person and ignore the work environment you should naturally
try to fix the environment.

Three questions are effective for measuring burnout: Do you feel burned out or exhausted?
Do you feel indifferent or cynical about your work or do you feel ineffective?
Is your work having a negative effect on your life?

Some organizational factors correlated with burnout: Organizational culture,
deployment pain, effectiveness of leaders, organizational investments in DevOps,
organizational performance.

Also alignment of individual values with organizational values can be used
to decrease burnout.

### Chapter 10 - Employee satisfaction, identity, and engagement

Satisfied and engaged employees are essential for a high-performing team. So how do
we measure that?

Net Promoter Score (NPS) in the variant of Employee Net Promoter Score (eNPS)
is a valuable tool and it shows that employees in high-performing organizations
are 2,2 times more likely to recommend their organization as a great place to
work. This also correlates with better business outcomes.

The actual questions asked are: "_Would you recommend your ORGANIZATION as a
place to work to a friend or a colleague?_" and "_Would you recommend
your TEAM as a place to work to a friend or colleague?_"

eNPS is significantly correlated with other interesting constructs such
as whether the organizations collects customer feedback and uses it actively.

The authors then continue on to measure how the employees identify with
the organizations they work for. Six Likert-type questions, such as "_I talk of this
organization to my friends as a great company to work for_" help determine
how strong the identity alignment is. A strong alignment predicts generative,
performance-oriented culture.

Diversity. Does it matter? It turns out it does! Gender, underrepresented
minorities and general inclusitivity are important.

### Chapter 11 - Leaders and Managers

Potato, potato one should think. But no! Leader and manager is not the same.

It shouldn't really be a surprise but _leadership really does have a
powerful impact on results_. It is essentail for successful DevOps
transformations.

The authors looked at five characteristics of transformational leaders:
_Vision_, _Inspirational communication_, _Intellectual stimulation_,
_Supportive leadership_, _Personal recognition_.

To measure transformational leadership the authors used survey
qustions adapted from a couple of guys named Rafferty and Griffin. The
characteristics covered by those questions are highly correlated with
software delivery performance.

And now it gets interesting: If the transformational leaders are _also managers_, they
can have an even bigger role in affecting change, because managers play a
critical role in connecting the strategic objectives of the business to the work
their teams do. They also have the means to invest in the working environment, helping
employees to feel safe and supported.

Investing in DevOps can be done in many ways, some of which are: _Create space and
opportunities for learning and improving_, _Internal hack days_,
_Internal DevOps mini-conferences_, _Dedicated time to experiment_.

Also important is _cross-functional collaboration_, which can be cultivated by
_Building trust with your counterparts on other teams_, Encouraging practitioners to move
between departments*, \_Actively seeking, encouraging, and rewarding work that
facilitates collaboration*.

A _climate of learning_ can facilitated by _Creating a training budget and
advocating for it internally_, _Ensuring that your team has the resources to engage in
informal learning and the space to explore ideas_, _Making it safe to fail_,
_Creating opportunities and spaces to share information_, _Encourage sharing
and innovation by having demo days and forums_.

Tools are important, so _Make sure your team can choose their tools_, _Make
monitoring a priority_.

## Part Two: The Research

### Chapter 12 - The Science Behind This Book

Rigorous primary research. This is what the book is based on primary research.

_Secondary research utilizes data that was collected by someone else._ Primary
research, on the other hand, is build on new data collected by the research
team. It can provide not already known information and insights and there is more
control over the questions.

Research can be qualitative or quantitative, the former being data, which
isn't in numerical form, like interviews and so on. Quantitative is numerical
and one way to get answers in numerical form is to Likert-type questions.

Having research in numerical form makes it available for statistical data
analysis, which exists in six levels: Descriptive, Exploratory,
Ingerential predictive, Predictive, Causal, Mechanistic where the book
uses the first three.

The terms _population_ and _sample_ is, respectively, the entire group
versus the part of the group, you're using for research by, e.g. interviewing.

A little reminder that "correlation doesn't imply causation".

Classification (or clustering) analysis is when you talk about
e.g. high-, medium- or low-performance software delivery teams.

The authors use _hierarchical clustering_ in the book.

### Chapter 13 - Introduction to Psychometrics

_Bad surveys are all over._

It takes a well-trained survey writer, to not be in risk of creating
surveys with
_Leading questions_, _Loaded questions_, _Multiple questions in one_,
_Unclear language_.

Most single question surveys are weak, although one well-known
exception is _Net Promoter Score (NPS)_, which use and applicability
are well-documented. On top of that it has become and industry
standard and it is therefore easily comparable across teams
and companies.

A _latent construct_ is a way of measuring something that can't be
measured directly, such as organizational culture. It is
measured by measuring its component parts (_manifest variables_) and
those are measured through survey questions.

_It is important to start with a clear definition and understanding
of what it is we want to measure_.

When the data have been collected statistical methods verify that the
measures reflect the underlying concept, weeding out any rogue data. Two
such methods are _Discriminant validity_ and _Convergent validity_.

_All measures are proxies_.
