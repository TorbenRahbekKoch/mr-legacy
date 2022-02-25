import ReactMarkDown from 'react-markdown'
import * as Style from './Style'

export interface Props {
  profile: string
}

export const defaultProps = {
  profile: ''
}

export function Profile({...props}: Props) {
  if (props?.profile == null)
    return null

  return (
    <Style.Profile>
      <ReactMarkDown>{props.profile}</ReactMarkDown>
    </Style.Profile>
  )
}