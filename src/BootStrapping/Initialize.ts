import { produce } from 'immer'
import { setAutoFreeze } from 'immer';
import { unstable_batchedUpdates } from 'react-dom'
import create, { UseBoundStore, StoreApi } from 'zustand'
import { ApplicationState } from './ApplicationState'
import * as State from '../State'
import * as WorkExperience from '../WorkExperience'
import * as Fetch from './Fetch'
import * as Profile from '../Profile'
import * as Quotes from '../Quotes'
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

    const weTexts: WorkExperience.Texts = {
      period: texts.period,
      project: texts.project,
      description: texts.description,
      technologies: texts.technologies,
      company: texts.company,
      jobDescription: texts.jobDescription,
      now: texts.now,
      monthNames: monthNames
    }

    unstable_batchedUpdates(() =>
      useStore.setState(prevState => {
        const result = produce(prevState, draft => {
          console.log("fetchTexts:", prevState, draft)
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.workExperience.texts = weTexts
        })
        console.log("fetchTexts result:", result)
        return result
        // {
        //   ambient: {
        //     initializing: prevState.ambient.initializing + 1
        //   },
        //   component: {
        //     workExperience: {
        //       texts: weTexts
        //     }
        //   }
        // } as ApplicationState
      }))
  })

  Fetch.fetchProjects(projects => {
    console.log("Projects:", projects)
    unstable_batchedUpdates(() =>
      useStore.setState(prevState => {
        const result = produce(prevState, draft => {
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.workExperience.projects = projects["projects"]
        })
        console.log("Fetchprojects result: ", result)
        return result;
      }))
  })

  Fetch.fetchCompanies(companyData => {
    unstable_batchedUpdates(() => {
      console.log("fetchCompanies: ", companyData)
      const companies = companyData["companies"]
        .map((company: any): WorkExperience.Company => ({
          id: company["id"],
          parentId: company["parentId"],
          period: company["period"],
          name: company["name"],
          description: language === "dk" ? company["dk"].description : company["en"].description
        } as WorkExperience.Company))

      console.log("fetchCompanies 2: ", companies)
      useStore.setState(prevState => {
        const result = produce(prevState, draft => {
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.workExperience.companies = companies
        })
        console.log("Fetchcompanies result: ", result)
        return result;
      })
    })
  })

  Fetch.fetchProfile(language, profileText => {
    unstable_batchedUpdates(() =>
      useStore.setState(prevState => {
        return produce(prevState, draft => {
          console.log("fetchprofile draft:", prevState, draft)
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.profile.profile = profileText
        })
      }))
  })
}

export function createApplicationState(): UseBoundStore<ApplicationState, StoreApi<ApplicationState>> {
  setAutoFreeze(false); // Stop immer from being stupid
  const monthNames = State.getMonthNames(defaultLanguage)

  const defaultState: ApplicationState = {
    ambient: { username: "Your username", language: defaultLanguage, initializing: 0 },
    component: {
      workExperience: WorkExperience.defaultProps,
      profile: Profile.defaultProps,
      quotes: Quotes.defaultProps
    },
    i8n: { monthNames: monthNames },
  }

  defaultState.component.profile.birthDate = new Date(1970, 6, 30)
  const useStore = create(set => defaultState)

  console.log("Default state: ", defaultState)
  fetchData(defaultLanguage)

  return useStore;
}

export const useStore = createApplicationState()
