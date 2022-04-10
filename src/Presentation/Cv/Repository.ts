import * as Education from './Education'
import * as WorkExperience from './WorkExperience'

export interface Repository {
  getAllEducations: (educationsReceived: (educations: Education.FormalEducation[], courses: Education.Course[]) => void) => void
  getProfile: (profileReceived: (profile: string) => void) => void
  getProjects: (projectsReceived: (projects: WorkExperience.Project[]) => void) => void
  getCompanies: (texts: WorkExperience.CompanyTexts, companiesReceived: (companies: WorkExperience.Company[]) => void) => void
}