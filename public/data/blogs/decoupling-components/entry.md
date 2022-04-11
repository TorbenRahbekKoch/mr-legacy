# Decoupling components

(**Note! This article will be continually updated as enlightment strikes me**)

Walking the talk on cohesion and coupling.

A decoupled component is self-contained and have all - and I mean ALL - its
necessary external data and dependencies and callbacks and what have you
passed using properties.

What advantages do we get from this? Well, at least three things:

- Lower coupling
- Higher cohesion
- Easier testing

Cohesion can be defined as "the code that changes together stays together",
whereas "what changes together" is coupled.

We want to have high cohesion and low coupling since this
seems to ease both understanding (readability) and maintaining code. 
Low coupling also makes it far easier to test a component with e.g. React Testing Library.



## 1. Place each component it it's own directory




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