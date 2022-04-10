import * as Education from '../../Presentation/Cv/Education'

export interface EducationDto {
  formal : Education.FormalEducation[]
  courses : Education.Course[]
}

export interface SingleQuote {
  quote: string
  author: string
  languages: string[]
}

export interface QuoteDto {
  quotes : SingleQuote[]
}

export interface TechnologyDto {
  id : string
  name : string
  description: string
  links: string[]
}

export interface TechnologiesDto {
  technologies: TechnologyDto[]
}

export interface BlogEntry {
  url: string
  title : string
  teaser: string
  dir: string
  date: string
  categories: string[]
}

export interface BlogEntries {
  blogEntries: BlogEntry[]
}

export interface PeriodPoint {
  month : number
  year : number
}

export interface Period {
  start : PeriodPoint
  end ?: PeriodPoint
}

export interface ProjectDescription {
  project: string
  description: string
}


export interface Project {
  companyId: string
  id: string
  period: Period
  dk: ProjectDescription
  en: ProjectDescription
  technologies: string[]
}

export interface Projects {
  projects: Project[]
}

export interface Description {
  description: string
  jobDescription: string
}

export interface Company {
  id: string
  parentId: string
  period: Period
  name: string
  jobDescription: string
  dk: Description
  en: Description
}

export interface Companies {
  companies: Company[]
}