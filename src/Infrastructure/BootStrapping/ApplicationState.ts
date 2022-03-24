import { StateData } from '../../Library/State/State'
import * as WorkExperience from '../../Presentation/Cv/WorkExperience'
import * as Profile from '../../Presentation/Cv/Profile'
import * as Quote from '../../Presentation/Header'
import * as Education from '../../Presentation/Cv/Education'
import * as Blog from '../../Presentation/Blog'
import { AllTexts } from './AllTexts'

/// Application specific definitions
export interface AmbientState {
  printMode: boolean
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