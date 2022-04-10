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
  workExperience: string
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
    workExperience: "",
    monthNames: []
  }
}

export function List({...props} :Props) {
  const texts = props.texts
  const projects = props.projects

  if (projects === undefined || texts === undefined || props.companies === undefined || props.companies.length === 0) {
    return null;
  }

  const companyTexts = {
    period: props.texts.period,
    company: props.texts.company,
    jobDescription: props.texts.jobDescription,
    now: props.texts.now,
    monthNames: props.texts.monthNames  
  }

  const projectTexts ={
    period: props.texts.period,
    project: props.texts.project,
    description: props.texts.description,
    technologies: props.texts.technologies,
    now: props.texts.now,
    monthNames: props.texts.monthNames 
  }

  const companies = buildWorkExperienceList(props.companies, projects)
  const elements: any[] = []

  companies.forEach(company => {
    elements.push(<Company.Company {...company.company} key={company.company.id} texts={companyTexts}/>)
    company.projects.forEach(project => {      
      elements.push(<Project.Project {...project} key={project.id} texts={projectTexts}/>)
    })


    company.childCompanies.forEach(company => {
      elements.push(<Company.Company {...company.company} key={company.company.id} texts={companyTexts}/>)
      company.projects.forEach(project => {
        elements.push(<Project.Project {...project} key={project.id} texts={projectTexts}/>)
      })
    })
  })

  return (
    <div>
      <h2>{texts.workExperience}</h2>
      {elements}
    </div>
  )
}