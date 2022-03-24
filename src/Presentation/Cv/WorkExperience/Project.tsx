import ReactMarkDown from 'react-markdown'
import { useStore } from '../../../Infrastructure/BootStrapping'
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
  companyId: string
  id: string
  period: Period
  dk: ProjectDescription
  en: ProjectDescription
  technologies: string[]
  technologyLookup: Technology[]
  texts: Texts
}

export function Project(props: Props) {
  const technologies = props.technologies
    ?.reduce((prev, current) => {
      const tryFindTech = props.technologyLookup
        .find(tech => tech.id === current)
      const actual = tryFindTech != null
        ? tryFindTech.name
        : current
      if (prev === "")
        return actual
      else
        return `${prev}, ${actual}`
    }, "")
  const texts = props.texts

  const language = useStore(state => state.ambient.language)
  const project: ProjectDescription =
    (language === 'en'
      ? props.en
      : props.dk)

  return (
    <Style.Div>
      <ProjectTable>
        <colgroup>
          <Style.TitleCol></Style.TitleCol>
        </colgroup>
        <tbody>
          <tr>
            <ProjectHeader>{texts.period}</ProjectHeader>
            <ProjectHeader>{formatPeriod(props.period, texts.monthNames, texts.now)}</ProjectHeader>
          </tr>
          <tr>
            <ProjectHeader>{texts.project}</ProjectHeader>
            <ProjectText>{project.project}</ProjectText>
          </tr>
          <tr>
            <ProjectHeader>{texts.description}</ProjectHeader>
            <ProjectText><ReactMarkDown>{project.description}</ReactMarkDown>
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