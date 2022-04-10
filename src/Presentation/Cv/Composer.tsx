import { FormalEducation } from "./Education/Formal";
import * as Education from "./Education";
import { CourseData } from "./Education/Course";
import { Profile } from "./Profile/Profile";
import * as WorkExperience from './WorkExperience'

export interface Texts {
  educationTexts: Education.Texts
  workExperienceTexts: WorkExperience.Texts
}

export interface Props {
  formal: FormalEducation[]
  courses: CourseData[]
  projects: WorkExperience.Project[]
  companies: WorkExperience.Company[]
  profile: string
  birthDate: Date
  texts: Texts
}

export function Composer(props: Props) {
  return (<>
    <Profile profile={props.profile} birthDate={props.birthDate}></Profile>
    <Education.Education 
      formal={props.formal} 
      courses={props.courses} 
      texts={props.texts.educationTexts} />
    <WorkExperience.List 
      projects={props.projects}
      companies={props.companies}
      texts={props.texts.workExperienceTexts}
      />
  </>)
}