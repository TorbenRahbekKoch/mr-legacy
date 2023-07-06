# Decoupling views

## About View and Component

*Component* is a heavily overloaded word. To avoid confusing it
with e.g. [React Components](https://reactjs.org/docs/components-and-props.html)
I will generally use the word *View* instead. A *View* is usually
(in a React application, that is) implemented by one or more React Components.

*View* also seems to be a nice word since it will most likely end up being
rendered on the screen by a browser.

A *View* is not typically just one file (but it can be).

## Cohesion and coupling

A decoupled view is self-contained and have all - and I mean ALL - its
necessary external data and dependencies and callbacks and what have you
passed using properties.

What advantages do we get from this? Well, at least three things:

- Lower coupling
- Higher cohesion
- Easier testing

Cohesion can be defined as "the code that changes together stays together" (locality),
whereas "what changes together" is coupled.

Coupling can be defined as "interdependence between modules".

We want to have high cohesion and low coupling since this
seems to ease both understanding (readability) and maintaining code.
Low coupling also makes it far easier to test a view with e.g. React Testing Library.

Please be aware that your tests should not in itself *dictate* the shape of your code. This
is a common pitfall when using [TDD (Test-Driven development)](https://en.wikipedia.org/wiki/Test-driven_development) - you want to make the code testable, which is a noble goal, but if you
take this too far you may fall victim to [Test-induced design damage](https://www.thoughtworks.com/insights/blog/test-induced-design-damage-fallacy-or-reality) where you explicitly
twist and misshape your code so it can be tested.

Are there any drawbacks with this approach of passing all dependencies through properties?
Of course there is. It is software development. There is always drawbacks ;)

Even though the goal is to reduce coupling it may not do so as much as we want to. A
typical example of this is when the view basically shows some properties
from a table in a database. It happens. It has been seen before. People do that!

In this case if you decide to show yet another property you then have to work your
way through all the layers of the application. Backend as well frontend. Before
you are done you may easily have added the property in some incarnation in
5 or more different places. And the keyword here is *layers*. *Any* kind of
layering (and most applications have layers) introduces coupling. Often
through this kind of *property drilling* and not just in the
React/Frontend part of the application but in the backend, as well.

> There is also the word [Connascense](https://practicingruby.com/articles/connascence) to be aware of. It's such an interesting topic that someone made a [dedicated website](https://connascence.io/) for it.

If you instead of properties use some kind of state store you *might* save adding the
property in a couple of places. But is it worth the magic of the store
to save that? Be pragmatic about it and choose wisely.

The bottom line is that coupling is difficult to avoid, since views do not
live totally in isolation. They get their data from somewhere.

## Messaging instead of callbacks

Callbacks *can* be a nuisance sending through properties, but what can you do instead to
decouple that part of your views? (You still need to pass ordinary properties)
You can use e.g. messaging which in React probably best is implemented as *ambient infrastructure* - infrastructure that is always available everywhere. If state is needed
by this infrastructure it will often be implemented as a [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) which is just as often considered an antipattern.

But since *ambient infrastructure* in React is implemented with hooks it is probably not
*that* big a no-no (the alternative would be to inject the messaging infrastructure via properties). A state management library is also, by the way, a singleton, so I think
we are safe here ;)

Consider a Login-view

````typescript
const messaging = useMessaging();
messaging.Send(message...)


const messaging = useMessaging();
messaging.subscribe(Login.Messages.LoginRequestedEvent, (username, password) => ....)
````





## 1. Place each component in it's own directory

At the Mr. Legacy web site I have a component [`Quote` (source here)](https://github.com/TorbenRahbekKoch/mr-legacy/blob/fd5f3948ad9551cb1a30b8a8af2c1a28b19a231b/src/Presentation/Header/Quote.tsx), which
shows quotes. It automatically changes every 20 seconds to a new
quote from the list of available quotes.

The way this is implemented is using a timer with a timeout of 20 seconds
and the timer is placed inside the component itself. This means that
the showing of a quote is *coupled* to an infrastructure concern: the 20
second timer - and to make matters (not much) worse: the 20 seconds are hard coded into the component. Naughty me.

How would you go about (unit) testing that this component works correctly? I
probably wouldn't and instead would just test it manully in the UI. This
is, to some extent, fine and lots of UI need at least a manual inspection.

But since we want to able to test it and we also aim for lower coupling we
could rewrite the `Quote`-component to support this.

So we introduce the `TimedQuote` wherein we put all the timer logic and the original `Quote` now only contains presentation logic:

````typescript
import * as Style from './Style'

export interface QuoteData {
  quote: string
  author: string
}

export interface Props {
  quote: QuoteData
}

export function Quote(props: Props) {

  return (
      <Style.Quote>
        <Style.QuoteText>{props.quote.quote}</Style.QuoteText>
        <Style.Author> ({props.quote.author})</Style.Author>
      </Style.Quote>
  )
}
````

whereas `TimedQoute` is a bit more involved:

```` typescript

import { useCallback, useState} from 'react'
import { useInterval } from '../../Infrastructure/UseInterval/UseInterval'
import * as Quote from './Quote'

export interface Props {
  intervalInSeconds: number
  quotes: Quote.QuoteData[]
}

export function TimedQuote(props: Props) {
  const getNextQuote = useCallback(() => {
    const now = new Date().valueOf()
    const nextQuote = props.quotes[now % props.quotes.length]
    return nextQuote;
  }, [props.quotes])

  const [quote, setQuote] = useState<Quote.QuoteData | null>(() => getNextQuote())

  const setCurrentQuote = useCallback(() => {
    setQuote(getNextQuote)
  }, [getNextQuote])

  useInterval(
    props.intervalInSeconds * 1000,
    setCurrentQuote
  )

  if (props?.quotes == null || props.quotes.length === 0)
    return null

  if (quote == null) {
    setCurrentQuote()
    return null
  }

  return (
    <Quote.Quote quote={quote} />
  )
}

````

Testing `Quote` is now simply a matter of testing whether it renders both
the actual qoute and the corresponding author: