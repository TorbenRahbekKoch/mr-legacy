import { FormalEducation, Course } from '../../../Presentation/Cv/Education';
import { Repository } from '../../../Presentation/Cv/Repository'
import { Project, Company, Technology, CompanyTexts } from '../../../Presentation/Cv/WorkExperience';
import * as Fetch from '../Fetch'

export class Cv implements Repository {
  private language: string;
  private technologies: Technology[] | null

  constructor(language: string) {
    this.language = language
    this.technologies = null
  }

  
  getAllEducations(educationsReceived: (educations: FormalEducation[], courses: Course[]) => void) {
    Fetch.fetchEducation(
      this.language,
      educations => {
        educationsReceived(educations.formal, educations.courses)
      }
    )
  }

  getTechnologies(technologiesReceived: (technologies: Technology[]) => void) {
    if (this.technologies != null) {
      technologiesReceived(this.technologies)
    }
    else {
      Fetch.fetchTechnologies(
        technologyData => {
          const technologies = technologyData.technologies
            .map(t => ({
              id: t.id,
              name: t.name,
              description: this.language ==="en" ? t.en : t.dk,
              links: t.links
            }) as Technology)
          this.technologies = technologies
          technologiesReceived(this.technologies)
        })
    }
  }

  getProfile(profileReceived: (profile: string) => void) {
    Fetch.fetchProfile(this.language, profileReceived)
  }

  getProjects(projectsReceived: (projects: Project[]) => void) {

    this.getTechnologies(technologies => {

      function convertTechnologies(projectTechnologies: string[]): string[] {
        const convertedTechnologies = projectTechnologies
          .map(technology => {
            const tryFindTech = technologies
              .find(tech => tech.id === technology)
            const actual = tryFindTech != null
              ? tryFindTech.name
              : technology
            return actual
          })  
        return convertedTechnologies
      }
  
      Fetch.fetchProjects(projectData => {
        const actualProjects = projectData.projects
          .map(project => {
            const p = {
              companyId: project.companyId,
              id: project.id,
              period: project.period,
              project: this.language === 'en' ? project.en : project.dk,
              technologies: convertTechnologies(project.technologies),
            } as Project
            return p
          })

        projectsReceived(actualProjects)
      })

    })
  }

  getCompanies(texts: CompanyTexts, companiesReceived: (companies: Company[]) => void) {
    Fetch.fetchCompanies(companyData => {
      const companies = companyData.companies
        .map(c => ({
          id: c.id,
          parentId: c.parentId,
          period: c.period,
          name: c.name,
          description: this.language ==='en' ? c.en.description : c.dk.description,
          jobDescription: this.language ==='en' ? c.en.jobDescription : c.dk.jobDescription,
          texts: texts
        } as Company))
      companiesReceived(companies)
    })
  }
}