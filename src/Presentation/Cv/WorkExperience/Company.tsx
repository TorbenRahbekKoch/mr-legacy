import ReactMarkDown from 'react-markdown'
import * as Style from './Style'
import { CompanyHeader, CompanyTable, ItemText } from './Style'
import { formatPeriod, Period } from './Period'

export interface Props {
  id: string
  parentId: string
  period: Period
  name: string
  description: string
  jobDescription: string
  texts: Texts  
}

export interface Texts {
  period: string
  company: string
  jobDescription: string
  now: string
  monthNames: string[]
}

export function Company(props: Props) {
  const texts = props.texts
  const description = `**${props.name}**  \n\n${props.description}`

  const styleProps = {
    indent: props.parentId == null ? 0 : 3
  } as any

  return (
    <Style.Div>
      <CompanyTable {...styleProps}>
        <colgroup>
          <Style.TitleCol {...styleProps}></Style.TitleCol> 
        </colgroup>
        <tbody>
          <tr>
            <CompanyHeader>{texts.period}</CompanyHeader>
            <CompanyHeader>{formatPeriod(props.period, texts.monthNames, texts.now)}</CompanyHeader>
          </tr>
          <tr>
            <CompanyHeader>{texts.company}</CompanyHeader>
            <ItemText><ReactMarkDown>{description}</ReactMarkDown></ItemText>
          </tr>
          <tr>
            <CompanyHeader>{texts.jobDescription}</CompanyHeader>
            <ItemText>{props.jobDescription}</ItemText>
          </tr>
        </tbody>
      </CompanyTable>
    </Style.Div>
  )
}
