import * as Course from './Course'
import * as Formal from './Formal'

export interface Texts {
  course: string
  time: string
  education: string
  period: string
  location: string
  length: string
  monthNames: string[]
}

export const defaultProps: Props = {
  formal: [],
  courses: [],
  texts: {
    time: "",
    education: "",
    period: "",
    location: "",
    length: "",
    course: "",
    monthNames: []
  }
}

export interface Props {
  formal: Formal.FormalEducation[]
  courses: Course.CourseData[]
  texts: Texts
}

export function Education({ ...props }: Props) {
  const texts = props.texts
  const formalTexts: Formal.Texts = {
    education: texts.education,
    period: texts.period,
    location: texts.location
  }

  const courseTexts: Course.Texts = {
    time: texts.time,
    course: texts.course,
    length: texts.length,
    location: texts.location,
    monthNames: texts.monthNames
  }

  const formalProps: Formal.Props = {
    educations: props.formal,
    texts: formalTexts          
  }

  const courseProps: Course.Props = {
    courses : props.courses,
    texts: courseTexts
  }

  return (
    <div>
      <h2>{props.texts.education}</h2>
      <Formal.Formal {...formalProps} />
      <Course.Course {...courseProps} />
    </div>
  )
}