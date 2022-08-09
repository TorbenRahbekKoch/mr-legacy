import * as Quote from './Quote'
import { TimedQuote } from './TimedQuote'
import * as Style from './Style'

export interface Props {
  quotes: Quote.QuoteData[]
  quoteIntervalInSeconds: number
  texts: Quote.Texts
}

export function Composer(props: Props) {
  return (
    <Style.Header>
      <Style.MugShot>
        <source srcSet="/images/mugshot.jpg" media="(min-width: 1000px)" />
        <img src="/images/mugshot-small.jpg" alt="Mr. Legacy" />
      </Style.MugShot>
      <Style.PrintImage>
        <img src="/images/printshot.png" alt="Mr. Legacy" />
      </Style.PrintImage>
      <Style.HeaderDetails>
        <Style.MainTitle>Mr. Legacy</Style.MainTitle>
        <Style.PrintMainTitle>Torben Koch Pløen</Style.PrintMainTitle>
        <Style.ContactInformation>aka Torben Koch Pløen, +45 2482 1824, torben at kochploeen.dk</Style.ContactInformation>
        <Style.PrintContactInformation>+45 2482 1824, torben@kochploeen.dk</Style.PrintContactInformation>
        <TimedQuote quotes={props.quotes}  texts={props.texts} intervalInSeconds={props.quoteIntervalInSeconds}/>
      </Style.HeaderDetails>
    </Style.Header>
  )
}