import ReactMarkDown from 'react-markdown'
import * as Style from './Style'

export interface Props {
  profile: string
  birthDate: Date
}

export const defaultProps = {
  profile: '',
  birthDate: new Date()
}

export function Profile({ ...props }: Props) {
  if (props?.profile == null || props?.birthDate == null)
    return null

  const now = new Date()
  // Hacky, hacky and probably not entirely correct in the actual birth month
  // And yes, I really ought to create a proper function with a corresponding test for this :)
  const ageDiff = now.getFullYear() - props.birthDate.getFullYear()
    + (now.getMonth() < props.birthDate.getMonth() ? -1 : 0)

  const profileText = props.profile.replace("{age}", ageDiff.toString())
  return (
    <Style.Profile>
      <ReactMarkDown>{profileText}</ReactMarkDown>
    </Style.Profile>
  )
}