import * as Education from '../Education'

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