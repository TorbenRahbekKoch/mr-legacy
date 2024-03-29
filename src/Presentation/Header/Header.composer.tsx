import * as Quote from './Quote'
import { TimedQuote } from './TimedQuote'
import * as Style from './Style'
import { Banner } from './Banner'

export interface Props {
  quotes: Quote.QuoteData[]
  quoteIntervalInSeconds: number
  texts: Quote.Texts
}

export function HeaderComposer(props: Props) {
  return (
    <Style.Header id="header">
      <Banner/>

      <Style.HeaderDetails>
        <Style.PrintMainTitle>Torben Koch Pløen</Style.PrintMainTitle>
        <Style.ContactInformation>Torben Koch Pløen, +45 2482 1824, torben at kochploeen.dk</Style.ContactInformation>
        <Style.PrintContactInformation>+45 2482 1824, torben@kochploeen.dk</Style.PrintContactInformation>
        <TimedQuote quotes={props.quotes}  texts={props.texts} intervalInSeconds={props.quoteIntervalInSeconds}/>
      </Style.HeaderDetails>
    </Style.Header>
  )
}