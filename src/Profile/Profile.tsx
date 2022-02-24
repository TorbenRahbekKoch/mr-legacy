import ReactMarkDown from 'react-markdown'
import { ComponentName, StateContainer } from '../State/State'
import { useStore } from '../BootStrapping'
import { ApplicationState } from '../BootStrapping/ApplicationState'

export interface State {
  profile: string
}

export const defaultName = "profile"

export function Profile({ componentName }: ComponentName) {
  const name = componentName ?? defaultName
  const profile = useStore(state => StateContainer.Get<State, ApplicationState>(state, name)?.profile)

  if (profile == null)
    return null

  return (
    <ReactMarkDown>{profile}</ReactMarkDown>
  )
}