import { StateContainer, StateEntry, ComponentState, ComponentName } from '../State/State'
import { useStore } from '../BootStrapping'
import { ApplicationState } from '../BootStrapping/ApplicationState'

export function defaultName(): string {
  return "user"
} 

export interface UserState extends ComponentState {
  greeting: string
}

export function defaultState(): StateEntry {
  return {
    componentName : defaultName(),
    state: {
        greeting: "Hello again"
    }
  }
}

export function User({ componentName }: ComponentName) {
  const name = componentName ?? defaultName()
  const greeting = useStore(state => StateContainer.Get<UserState, ApplicationState>(state, name)?.greeting) ?? "Goodbye"
  const ambient = useStore(state => state.ambient)

  return (
    <span>{greeting} {ambient.username}</span>
  )
} 