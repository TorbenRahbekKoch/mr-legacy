import ReactMarkDown from 'react-markdown'
import * as Style from './Style'
import { ItemHeader as ProjectHeader, ItemTable as ProjectTable, ItemText as ProjectText } from './Style'
import { formatPeriod, Period } from './Period'

export interface Texts {
  period: string
  project: string
  description: string
  technologies: string
  now: string
  monthNames: string[]
}

export interface ProjectDescription {
  project: string
  description: string
}

export interface Technology {
  id: string
  name: string
  description: string
  links: string[]
}

export interface Props {
  hasParentCompany: boolean
  companyId: string
  id: string
  period: Period
  project: ProjectDescription
  technologies: string[]
  texts: Texts
}

export function Project(props: Props) {
  const technologies = props.technologies
    ?.reduce((prev, current) => {
      if (prev === "")
        return current
      else
        return `${prev}, ${current}`
    }, "")
    
  const texts = props.texts

  const tableProps = {
    indent: props.hasParentCompany ? 6 : 3
  }
  const styleProps = {
    indent: props.hasParentCompany ? 6 : 3
  } as any

  return (
    <Style.Div>
      <ProjectTable {...tableProps}>
        <colgroup>
          <Style.TitleCol {...styleProps}></Style.TitleCol>
        </colgroup>
        <tbody>
          <tr>
            <ProjectHeader>{texts.period}</ProjectHeader>
            <ProjectHeader>{formatPeriod(props.period, texts.monthNames, texts.now)}</ProjectHeader>
          </tr>
          <tr>
            <ProjectHeader>{texts.project}</ProjectHeader>
            <ProjectText>{props.project.project}</ProjectText>
          </tr>
          <tr>
            <ProjectHeader>{texts.description}</ProjectHeader>
            <ProjectText><ReactMarkDown>{props.project.description}</ReactMarkDown>
            </ProjectText>
          </tr>
          <tr>
            <ProjectHeader>{texts.technologies}</ProjectHeader>
            <ProjectText>{technologies}</ProjectText>
          </tr>
        </tbody>
      </ProjectTable>
    </Style.Div>
  )
}