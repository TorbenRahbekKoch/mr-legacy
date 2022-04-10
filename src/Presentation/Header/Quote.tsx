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