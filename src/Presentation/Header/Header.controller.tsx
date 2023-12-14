import { useEffect, useState } from 'react'
import * as Quote from './Quote'
import { Repository } from './Repository'
import { HeaderComposer } from './Header.composer'

export interface Props {
  repository: Repository
  texts: Texts 
}

export interface Texts {
  source: string
  twitterSource: string
  linkedinSource: string
  oreillySource: string
}

export const defaultProps = {
  repository: {
    getQuotes: (quotesReceived: (quotes: Quote.QuoteData[]) => void) => { quotesReceived([]) }
  }
}

export function HeaderController(props: Props) {
  const [quotes, setQuotes] = useState<Quote.QuoteData[]>([])
  
  useEffect(() => {
    props.repository
      .getQuotes(quotes => {
        setQuotes(quotes)
      })
  }, [props.repository])

  return (
    <HeaderComposer quotes={quotes} texts={props.texts} quoteIntervalInSeconds={20} />
  )
}