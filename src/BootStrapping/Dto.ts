import * as Education from '../Education'

export interface EducationDto {
  formal : Education.FormalEducation[]
  courses : Education.Course[]
}