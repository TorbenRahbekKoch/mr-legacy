import * as Style from './Style'

export interface Texts {
  period: string
  education: string
  location: string
}

export interface FormalEducation {
  education: string
  location: string
  description: string
  when: string
}

export interface Props {
  educations: FormalEducation[]
  texts: Texts
}

export function Formal({ ...props }: Props) {
  const texts = props.texts

  return (
    <Style.Div>
      <Style.EducationTable>
        <colgroup>
          <Style.TitleCol></Style.TitleCol>
        </colgroup>
        <tbody>
          <tr>
            <Style.EducationHeader>{texts.period}</Style.EducationHeader>
            <Style.EducationHeader>{texts.education}</Style.EducationHeader>
            <Style.EducationHeader>{texts.location}</Style.EducationHeader>
          </tr>
          {
            props.educations.map(education => {
              return (
                <tr>
                  <Style.EducationText>{education.when}</Style.EducationText>
                  <Style.EducationText>{education.education}</Style.EducationText>
                  <Style.EducationText>{education.location}</Style.EducationText>
                </tr>)
            })
          }
        </tbody>
      </Style.EducationTable>
    </Style.Div>
  )
}