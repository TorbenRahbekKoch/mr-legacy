import { useEffect, useState } from 'react'
import { QuoteData } from './Quote'
import { Repository } from './Repository'
import { Composer } from './Composer'

export interface Props {
  repository: Repository
}

export const defaultProps = {
  repository: {
    getQuotes: (quotesReceived: (quotes: QuoteData[]) => void) => { quotesReceived([]) }
  }
}

export function Controller(props: Props) {
  const [quotes, setQuotes] = useState<QuoteData[]>([])

  useEffect(() => {
    props.repository
      .getQuotes(quotes => {
        setQuotes(quotes)
      })
  }, [props.repository])

  return (
    <Composer quotes={quotes} quoteIntervalInSeconds={20} />
  )
}