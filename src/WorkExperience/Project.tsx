import { useStore } from '../BootStrapping'
import { ComponentState } from '../State/State'
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

export interface Props extends ComponentState {
  companyId: string
  id: string
  period: Period
  dk: ProjectDescription
  en: ProjectDescription
  technologies: string[]
  texts: Texts
}

export function Project(props: Props) {
  const monthNames = useStore(store => store.i8n.monthNames)
  const technologies = props.technologies?.reduce((prev, current) => `${prev}, ${current}`)
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
            <ProjectText>{project.description}
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