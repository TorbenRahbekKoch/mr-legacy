import styled from 'styled-components'

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

const StyledQuote = styled.div`
  left: 10%;
  width: 80%;
  font-size: 1em;
`

const StyledQuoteText = styled.span`
  font-style: italic;
`

const StyledAuthor = styled.span`
  font-style: italic;
  font-size: smaller;
`

export function Quote({ ...props }: Props) {
  if (props?.quotes == null || props.quotes.length === 0)
    return null

  const now = new Date()
  const minute = now.getMinutes()
  const currentQuote = props.quotes[minute % props.quotes.length]
  return (
    <StyledQuote>
      <StyledQuoteText>{currentQuote.quote}</StyledQuoteText>
      <StyledAuthor> ({currentQuote.author})</StyledAuthor>
    </StyledQuote>
  )
}