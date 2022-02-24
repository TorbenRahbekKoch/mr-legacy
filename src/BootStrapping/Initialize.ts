import create, { UseBoundStore, StoreApi } from 'zustand'
import { ApplicationState } from './ApplicationState'
import { ComponentI8n, ComponentState } from '../State/State'
import * as State from '../State'
import * as WorkExperience from '../WorkExperience'
import * as Fetch from './Fetch'
import * as Profile from '../Profile'
import { AllTexts } from './AllTexts'

const defaultLanguage = 'dk'

function fetchData(language: string) {
  Fetch.fetchTexts(language, allTexts => {

    const texts: AllTexts = allTexts
    console.log("texts: ", allTexts)

    let monthNames: string[]
    if (language === "dk")
      monthNames = State.i8nMonthNames.dk.longNames
    else
      monthNames = State.i8nMonthNames.en.longNames

    const weTexts : WorkExperience.Texts = {
      period: texts.period,
      project: texts.project,
      description: texts.description,
      technologies: texts.technologies,
      company: texts.company,
      jobDescription: texts.jobDescription,
      now: texts.now,
      monthNames: monthNames
    }

    useStore.setState(state => {
      state.ambient.initializing += 1
      state.component1.workExperience.texts = weTexts
      return state
    })
  })

  Fetch.fetchProjects(projects => {
    console.log("Projects:", projects)
    useStore.setState(state => {
      state.ambient.initializing += 1
      state.component1.workExperience.projects = projects["projects"]
      // const currentState = state.component1.workExperience
      // console.log("currentState: ", currentState)

      // let newProps: WorkExperience.Props = currentState
      // if (newProps == null) {
      //   newProps = WorkExperience.defaultProps
      // }

      // newProps.projects = projects["projects"]
      // console.log("newState we: ", newProps)
      // state.component1.workExperience = newProps
      console.log("fetchProjects: ", state)
      return state;
    })
  })

  Fetch.fetchCompanies(companies => {
    useStore.setState(state => {     
      state.ambient.initializing += 1 
      state.component1.workExperience.companies = companies["companies"]
      //const currentState = state.component1.workExperience
      // let newProps: WorkExperience.Props = currentState
      // if (newProps == null) {
      //   newProps = WorkExperience.defaultProps
      // }

      // newProps.companies = companies["companies"]
      // console.log("newState companies: ", newProps)
      // state.component1.workExperience = newProps
      console.log("fetchCompanies: ", state)
      return state;
    })
  })

  Fetch.fetchProfile(language, profileData => {
    useStore.setState(state => {
      state.ambient.initializing += 1
      state.component.set(Profile.defaultName, { profile: profileData }) 
    })
  })
}

export function createApplicationState(): UseBoundStore<ApplicationState, StoreApi<ApplicationState>> {
  const monthNames = State.getMonthNames(defaultLanguage) 

  const defaultState: ApplicationState = {
    ambient: { username: "Your username", language: defaultLanguage, initializing: 0 },
    component: new Map<string, ComponentState>(),
    component1: { workExperience: WorkExperience.defaultProps },
    i8n: { component: new Map<string, ComponentI8n>(), monthNames: monthNames },
  }

  const useStore = create(set => defaultState)

  fetchData(defaultLanguage)

  return useStore;
}

export const useStore = createApplicationState()
