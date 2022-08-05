import ReactMarkDown from 'react-markdown'
import * as Style from './Style'

export interface QuoteData {
  quote: string
  author: string
  source: string
}

export interface Props {
  quote: QuoteData
}

export function Quote(props: Props) {

  let qouteText = `${props.quote.quote}   \n **${props.quote.author}**`
  if (props.quote.source.length > 0)
    qouteText = qouteText + ` - *${props.quote.source}*`
  return (
      <Style.Quote>       
        <Style.QuoteText><ReactMarkDown className="quote">{qouteText}</ReactMarkDown></Style.QuoteText>
      </Style.Quote>
  )
}