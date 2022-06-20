import * as Dto from './Dto'

// This 

export type DataReceived = (data: any) => void;

async function fetchJson(url: string, dataReceived: (data: any) => void) {
  const response = await fetch(url)
  const json = await response.json()
  dataReceived(json)
}

export async function fetchTexts(language: string, dataReceived: DataReceived) {
  fetchJson(`/data/texts-${language}.json`, dataReceived)
}

export async function fetchServices(language: string, dataReceived: DataReceived) {
  const response = await fetch(`/data/services-${language}.md`)
  const text = await response.text()
  dataReceived(text)
}

export async function fetchProjects(dataReceived: (data: Dto.Projects) => void) {
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

export async function fetchTechnologies(dataReceived: (data: Dto.TechnologiesDto) => void) {
  fetchJson(`/data/technologies.json`, dataReceived)
}

export async function fetchCompanies(dataReceived: (data: Dto.Companies) => void) {
  fetchJson('/data/companies.json', dataReceived)
}

export async function fetchBlogs(dataReceived: (data: Dto.BlogEntries) => void) {
  fetchJson('/data/blogs/blogs.json', dataReceived)
}

export async function fetchArticle(url: string, dataReceived: (article: string) => void) {
  const response = await fetch(`/data/blogs/${url}/entry.md`)
  const text = await response.text()
  dataReceived(text)
}