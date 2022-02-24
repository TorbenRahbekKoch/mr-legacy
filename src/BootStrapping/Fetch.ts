export type DataReceived = (data: any) => void;

async function fetchJson(url: string, dataReceived: (data: any) => void) {
  const response = await fetch(url)
  const json = await response.json()
  dataReceived(json)  
}

export async function fetchTexts(language: string, textsReceived: (texts: any) => void) {
  const response = await fetch(`/data/texts-${language}.json`)
  const json = await response.json()
  textsReceived(json)  
}

export async function fetchProjects(dataReceived: (data: any) => void){
  const response = await fetch('/data/projects.json')
  const json = await response.json()
  dataReceived(json)
}

export async function fetchProfile(language: string, dataReceived: (data: any) => void) {
  const response = await fetch(`/data/profile-${language}.md`)
  const text = await response.text()
  dataReceived(text)
}

export async function fetchCompanies(dataReceived: DataReceived) {
  fetchJson('/data/companies.json', dataReceived)
}