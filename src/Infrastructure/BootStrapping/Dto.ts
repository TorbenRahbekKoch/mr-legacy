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