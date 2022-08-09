import { useEffect, useState } from 'react'
import * as Quote from './Quote'
import { Repository } from './Repository'
import { Composer } from './Composer'

export interface Props {
  repository: Repository
  texts: Texts 
}

export interface Texts {
  source: string
  twitterSource: string
  linkedinSource: string
}

export const defaultProps = {
  repository: {
    getQuotes: (quotesReceived: (quotes: Quote.QuoteData[]) => void) => { quotesReceived([]) }
  }
}

export function Controller(props: Props) {
  const [quotes, setQuotes] = useState<Quote.QuoteData[]>([])
  
  useEffect(() => {
    props.repository
      .getQuotes(quotes => {
        setQuotes(quotes)
      })
  }, [props.repository])

  return (
    <Composer quotes={quotes} texts={props.texts} quoteIntervalInSeconds={20} />
  )
}