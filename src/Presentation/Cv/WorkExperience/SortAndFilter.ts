import { Props as Company } from './Company'
import { Props as Project } from './Project'
import { comparePeriods } from './Period';

export interface WorkExperienceCompany {
  company: Company
  childCompanies: WorkExperienceCompany[]
  projects: Project[]
}


export function buildWorkExperienceList(companies: Company[], projects: Project[]) {
  const companyMap = new Map<string, WorkExperienceCompany>()

  companies.forEach(company => {
    var workExperienceCompany: WorkExperienceCompany = {
      company: company,
      childCompanies: [],
      projects: []
    }
    companyMap.set(company.id, workExperienceCompany)
  });

  companies.forEach(company => {
    if (company.parentId != null) {
      var parentCompany = companyMap.get(company.parentId)
      var childCompany = companyMap.get(company.id)
      if (childCompany != null) {
        parentCompany?.childCompanies.push(childCompany)
      }
    }
  });

  projects.forEach(project => {
    var parentCompany = companyMap.get(project.companyId)
    if (parentCompany != null) {
      parentCompany.projects.push(project)
    }
  })

  companyMap.forEach(company => {
    company.projects = company.projects
      .sort((p1, p2) => comparePeriods(p1.period, p2.period))
      .reverse()
    company.childCompanies = company.childCompanies
      .sort((c1, c2) => comparePeriods(c1.company.period, c2.company.period))
      .reverse()
  })

  const companyList: WorkExperienceCompany[] = []
  companyMap.forEach(company => {
    if (company.company.parentId == null) {
      companyList.push(company)
    }

  })

  return companyList;
}