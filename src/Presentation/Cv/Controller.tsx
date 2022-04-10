import { useEffect, useState } from "react";
import { Repository } from "./Repository";
import * as Education from './Education'
import * as WorkExperience from './WorkExperience'
import { Composer } from "./Composer";

export interface Texts {
  period: string,
  project: string,
  description: string,
  technologies: string,
  company: string,
  jobDescription: string,
  now: string,
  workExperience: string,
  education: string,
  length: string,
  location: string,
  course: string,
  time: string,
  monthNames: string[]
}

export interface Props {
  repository: Repository
  birthDate: Date
  texts: Texts
}

export function Controller(props: Props) {
  const [courses, setCourses] = useState<Education.Course[]>([])
  const [educations, setEducations] = useState<Education.FormalEducation[]>([])
  const [projects, setProjects] = useState<WorkExperience.Project[]>([])
  const [companies, setCompanies] = useState<WorkExperience.Company[]>([])
  const [profile, setProfile] = useState("")
  
  useEffect(() => {    
    props.repository.getAllEducations(
      (educations, courses) => {
        setEducations(educations) 
        setCourses(courses)
      })    
    props.repository.getProfile(setProfile)
    props.repository.getProjects(setProjects)
    props.repository.getCompanies(props.texts, setCompanies)
  }, [props.repository, props.texts])

  const texts = props.texts

  const educationTexts: Education.Texts = {
    education: texts.education,
    length: texts.length,
    location: texts.location,
    period: texts.period,
    course: texts.course,
    time: texts.time,
    monthNames: texts.monthNames
  }

  const workExperienceTexts: WorkExperience.Texts = {
    company: texts.company,
    description: texts.description,
    jobDescription: texts.jobDescription,
    monthNames: texts.monthNames,
    now: texts.now,
    period: texts.period,
    project: texts.project,
    technologies: texts.technologies,
    workExperience: texts.workExperience
  }

  return <Composer
    courses={courses} 
    formal={educations} 
    projects={projects}
    companies={companies}
    profile={profile} 
    birthDate={props.birthDate}
    texts={{educationTexts: educationTexts, workExperienceTexts: workExperienceTexts}}
     />
}