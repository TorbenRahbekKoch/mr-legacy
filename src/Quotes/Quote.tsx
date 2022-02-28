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
  if (props?.quotes == null || props.quotes.length === 0)
    return null

  const now = new Date()
  const minute = now.getMinutes()
  const currentQuote = props.quotes[minute % props.quotes.length]
  return (
    <span>{currentQuote.quote}</span>
  )
}