import ReactMarkDown from 'react-markdown'
import * as Style from './Style'

export interface QuoteData {
  quote: string
  author: string
  source: string
}

export interface Texts {
  source: string
  twitterSource: string
  linkedinSource: string
}

export interface Props {
  quote: QuoteData
  texts: Texts
}

export function Quote(props: Props) {
  let qouteText = `${props.quote.quote}   \n **${props.quote.author}**`

  // TODO: It could be definitely be argued that this
  // logic should not be here, but in a controller.
  // For now I choose to be pragmatic about it.
  if (props.quote.source.length > 0) {
    let source = props.quote.source.toLowerCase();
    let text = props.quote.source
    if (source.startsWith("http")) {
      if (source.indexOf("twitter.com") > 0) {
        text = props.texts.twitterSource
      }
      else if (source.indexOf("linkedin.com") > 0) {
        text = props.texts.linkedinSource
      }

      source = `[${text}](${props.quote.source})`
    }
    else {
      source = props.quote.source
    }

    qouteText = qouteText + ` - *${source}*`
  }

  return (
    <Style.Quote>
      <Style.QuoteText><ReactMarkDown className="quote">{qouteText}</ReactMarkDown></Style.QuoteText>
    </Style.Quote>
  )
}