import { useCallback, useState} from 'react'
import { useInterval } from '../../Infrastructure/UseInterval/UseInterval'
import * as Quote from './Quote'


export interface Props {
  intervalInSeconds : number
  quotes: Quote.QuoteData[]
  texts: Quote.Texts
}

export function TimedQuote(props: Props) {
  const getNextQuote = useCallback(() => {
    const now = new Date().valueOf()
    const nextQuote = props.quotes[now % props.quotes.length]
    return nextQuote
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
    <Quote.Quote quote={quote} texts={props.texts}/>
  )
}