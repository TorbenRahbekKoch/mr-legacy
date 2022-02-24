import * as Company from './Company'
import { buildWorkExperienceList } from './SortAndFilter'

import * as Project from "./Project"

export interface Props {
  projects: Project.Props[]
  companies: Company.Props[]
  texts: Texts
}

export interface Texts {
  period: string
  project: string
  description: string
  technologies: string
  company: string
  jobDescription: string
  now: string 
  monthNames: string[]
}

export const defaultProps = {
  projects: [],
  companies: [],
  texts : {
    period : "",
    project: "", 
    description: "",
    technologies: "",
    company: "",
    jobDescription: "",
    now: "",
    monthNames: []
  }
}

export const defaultName = "workExperiences"

export function List({...props} :Props) {
  // const name = componentName ?? defaultName
  // const texts = useStore(store => store.i8n.component.get(name)?.texts as Texts)
  // const state = useStore(store => store.component.get(name) as Props)
  // const projects = state?.projects

  console.log("Props in List: ", props)
  const texts = props.texts
  const projects = props.projects

  if (projects === undefined || texts === undefined || props.companies === undefined || props.companies.length === 0) {
    return null;
  }
  console.log("In list: ", texts, props)

  // const messaging = useMessaging();
  // messaging.subscribe<SetFilterMessage>(msg => { /*do stuff*/ })

  console.log("List projects", projects)
  console.log("texts", texts)

  const companies = buildWorkExperienceList(props.companies, projects)
  console.log("companies: ", companies)
  const elements: any[] = []


  const companyTexts: Company.Texts = {
    company : texts.company,
    jobDescription : texts.jobDescription,
    monthNames : texts.monthNames,
    now : texts.now,
    period : texts.period
  }
  companies.forEach(company => {
    company.company.texts = companyTexts
    // if (company.childCompanies.length == 0 && company.projects.length == 0)
    //   return;
    elements.push(<Company.Company {...company.company} key={company.company.id} />)

    company.childCompanies.forEach(company => {
      company.company.texts = companyTexts;
      elements.push(<Company.Company {...company.company} key={company.company.id} />)
      company.projects.forEach(project => {
        project.texts = texts
        elements.push(<Project.Project {...project} key={project.id} />)
      })
    })
    company.projects.forEach(project => elements.push(<Project.Project {...project} key={project.id} />))
  })

  console.log("Elements: ", elements)
  return (
    <div>
      {elements}
      {/* {companies.map(company => {
        <Company.Company {...company.company} key={company.company.id}>
        { company.childCompanies.map(company => {
          return (<Company.Company {...company.company}>
          { 
            company.projects.map(project => {
              return <Project.Project {...project}/>
            })
          }</Company.Company>)
        })
        }</Company.Company>})} */}
    </div>
  )
}