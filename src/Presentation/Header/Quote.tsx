import { Suspense, useCallback, useState } from 'react'
import * as Style from './Style'
import { useInterval } from '../../Infrastructure/UseInterval/UseInterval'

export interface QuoteData {
  quote: string
  author: string
}

export interface Props {
  quotes: QuoteData[]
}

export const defaultProps = {
  quotes: []
}


export function Quote({ ...props }: Props) {

  const getNextQuote = useCallback(() => {
    const now = new Date().valueOf()
    const nextQuote = props.quotes[now % props.quotes.length]
    return nextQuote;
  }, [props.quotes])

  const [quote, setQuote] = useState<QuoteData | null>(() => getNextQuote())

  const setCurrentQuote = useCallback(() => {
    setQuote(getNextQuote)
  }, [getNextQuote])

  useInterval(
    20000,
    setCurrentQuote
  )

  if (props?.quotes == null || props.quotes.length === 0)
    return null

  if (quote == null) {
    setCurrentQuote()
    return null
  }

  return (
    <Suspense fallback={<></>}>
      <Style.Quote>
        <Style.QuoteText>{quote.quote}</Style.QuoteText>
        <Style.Author> ({quote.author})</Style.Author>
      </Style.Quote>
    </Suspense>
  )
}