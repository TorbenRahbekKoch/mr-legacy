import { StateData } from '../State/State'
import * as WorkExperience from '../WorkExperience'
import * as Profile from '../Profile'
import * as Quote from '../Quotes'
import * as Education from '../Education'
import * as Blog from '../Blog'
import { AllTexts } from './AllTexts'
import { BlogEntries } from './Dto'

/// Application specific definitions
export interface AmbientState {
  username: string
  language: string
  initializing : number
}

export interface ComponentState {
  workExperience : WorkExperience.Props
  profile: Profile.Props
  quotes: Quote.Props
  education : Education.Props
  blogs: Blog.Props
}

export interface ApplicationState extends StateData {
  i8n1 ?: AllTexts
  ambient: AmbientState
  component: ComponentState
}