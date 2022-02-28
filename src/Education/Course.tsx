import * as Style from './Style'

export interface Texts {
  time: string
  course: string
  length : string
  location: string
  monthNames: string[]
}

export interface When {
  year: number
  month: number
}

export interface CourseData {
  when : When
  course: string
  description: string
  location: string
  length: number
}

export interface Props {
  courses: CourseData[]
  texts: Texts
}

export function Course({...props}: Props) {

  const texts = props.texts

  function formatTime(when: When) {
    return `${when.year}, ${texts.monthNames[when.month-1]}`
  }

  return (
    <Style.Div>
      <Style.EducationTable>
        <colgroup>
          <Style.TitleCol></Style.TitleCol>
        </colgroup>
        <tbody>
          <tr>
            <Style.EducationHeader>{texts.time}</Style.EducationHeader>
            <Style.EducationHeader>{texts.course}</Style.EducationHeader>
            <Style.EducationHeader>{texts.length}</Style.EducationHeader>
            <Style.EducationHeader>{texts.location}</Style.EducationHeader>
          </tr>
          {
            props.courses.map(course => {
              return (
                <tr key={`${course.course}-${formatTime(course.when)}`}>
                  <Style.EducationText>{formatTime(course.when)}</Style.EducationText>
                  <Style.EducationText>{course.course}<br/>{course.description}</Style.EducationText>
                  <Style.EducationText>{course.length}</Style.EducationText>
                  <Style.EducationText>{course.location}</Style.EducationText>
                </tr>)
            })
          }
        </tbody>
      </Style.EducationTable>
    </Style.Div>
  )
}