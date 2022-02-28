import * as Dto from './Dto'

export type DataReceived = (data: any) => void;

async function fetchJson(url: string, dataReceived: (data: any) => void) {
  const response = await fetch(url)
  const json = await response.json()
  dataReceived(json)  
}

export async function fetchTexts(language: string, dataReceived: DataReceived) {
  fetchJson(`/data/texts-${language}.json`, dataReceived)
}

export async function fetchProjects(dataReceived: DataReceived){
  fetchJson('/data/projects.json', dataReceived)
}

export async function fetchProfile(language: string, dataReceived: DataReceived) {
  const response = await fetch(`/data/profile-${language}.md`)
  const text = await response.text()
  dataReceived(text)
}

export async function fetchEducation(language: string, dataReceived: (data: Dto.EducationDto) => void) {
  fetchJson(`/data/education-${language}.json`, dataReceived)
}

export async function fetchQuotes(dataReceived: (data: Dto.QuoteDto) => void) {
  fetchJson(`/data/quotes.json`, dataReceived)
}

export async function fetchCompanies(dataReceived: DataReceived) {
  fetchJson('/data/companies.json', dataReceived)
}