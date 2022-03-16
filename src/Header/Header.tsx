import * as Style from './Style'
import { Quote, QuoteData } from './Quote'

export interface Props {
  quotes: QuoteData[]
}

export const defaultProps = {
  quotes: []
}

export function Header({...props}: Props) {
  return (
    <div>
      <Style.Header>Mr. Legacy</Style.Header>
      <Style.PrintHeader>Torben Koch Pløen</Style.PrintHeader>
      <Style.MugShot>
        <source srcSet="/images/mugshot.jpg" media="(min-width: 1000px)" />
        <img src="/images/mugshot-small.jpg" alt="Mr. Legacy" />
      </Style.MugShot>
      <Style.PrintImage>
        <img src="/images/printshot.png" alt="Mr. Legacy"/>
      </Style.PrintImage>
      <Style.ContactInformation>aka Torben Koch Pløen, +45 2482 1824, torben at kochploeen.dk</Style.ContactInformation>
      <Style.PrintContactInformation>+45 2482 1824, torben@kochploeen.dk</Style.PrintContactInformation>
      <Quote {...props } />
    </div>
  )
}