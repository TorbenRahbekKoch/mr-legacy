import { produce } from 'immer'
import { setAutoFreeze } from 'immer';
import { unstable_batchedUpdates } from 'react-dom'
import create, { UseBoundStore, StoreApi } from 'zustand'
import { ApplicationState } from './ApplicationState'
import * as State from '../../Library/State'
import * as WorkExperience from '../../Presentation/Cv/WorkExperience'
import * as Fetch from './Fetch'
import * as Profile from '../../Presentation/Cv/Profile'
import * as Quotes from '../../Presentation/Header'
import * as Education from '../../Presentation/Cv/Education'
import * as Blog from '../../Presentation/Blog'
import { fetchArticle } from './Fetch'
import { AllTexts } from './AllTexts'

const defaultLanguage = 'dk'

function fetchData(language: string) {

  Fetch.fetchTexts(language, allTexts => {

    const texts: AllTexts = allTexts

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
      workExperience: texts.workExperience,
      monthNames: monthNames
    }

    const educationTexts: Education.Texts = {
      education: texts.education,
      length: texts.length,
      location: texts.location,
      period: texts.period,
      course: texts.course,
      time: texts.time,
      monthNames: monthNames
    }

    unstable_batchedUpdates(() =>
      useStore.setState(prevState => {
        const result = produce(prevState, draft => {
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.workExperience.texts = weTexts
          draft.component.education.texts = educationTexts
        })
        return result
      }))
  })

  Fetch.fetchProjects(projects => {
    unstable_batchedUpdates(() =>
      useStore.setState(prevState => {
        const result = produce(prevState, draft => {
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.workExperience.projects = projects["projects"]
        })
        return result;
      }))
  })

  Fetch.fetchCompanies(companyData => {
    unstable_batchedUpdates(() => {
      const companies = companyData["companies"]
        .map((company: any): WorkExperience.Company => ({
          id: company["id"],
          parentId: company["parentId"],
          period: company["period"],
          name: company["name"],
          jobDescription: language === "dk" ? company["dk"].jobDescription : company["en"].jobDescription,
          description: language === "dk" ? company["dk"].description : company["en"].description
        } as WorkExperience.Company))

      useStore.setState(prevState => {
        const result = produce(prevState, draft => {
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.workExperience.companies = companies
        })
        return result;
      })
    })
  })

  Fetch.fetchTechnologies(language, technologyData => {
    unstable_batchedUpdates(() => {
      const technologies = technologyData.technologies
        .map((technology): WorkExperience.Technology => ({
          id: technology.id,
          name: technology.name,
          description: technology.description,
          links: technology.links
        } as WorkExperience.Technology))

      useStore.setState(prevState => {
        const result = produce(prevState, draft => {
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.workExperience.technologyLookup = technologies
        })
        return result;
      })
    })
  })

  Fetch.fetchProfile(language, profileText => {
    unstable_batchedUpdates(() =>
      useStore.setState(prevState => {
        return produce(prevState, draft => {
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.profile.profile = profileText
        })
      }))
  })

  Fetch.fetchEducation(language, education => {
    unstable_batchedUpdates(() => {
      useStore.setState(prevState => {
        return produce(prevState, draft => {
          draft.ambient.initializing = prevState.ambient.initializing + 1
          draft.component.education.courses = education.courses
          draft.component.education.formal = education.formal
        })
      })
    })
  })

  Fetch.fetchQuotes(quotes => {
    unstable_batchedUpdates(() => {
      var applicableQuotes = quotes.quotes
        .filter(quote => quote.languages.find(value => value === language) != null)
        .map(quote => ({ quote: quote.quote, author: quote.author } as Quotes.QuoteData))

      useStore.setState(prevState => {
        return produce(prevState, draft => {
          draft.component.quotes.quotes = applicableQuotes
        })
      })
    })
  })

  Fetch.fetchBlogs(blogs => {
    const blogEntries = blogs.blogEntries
      .map(blog => {
        const date =
          blog.date === null
          ? undefined
          : new Date(blog.date)

        return { 
        url: blog.url,
        title: blog.title,
        teaser: blog.teaser,
        dir: blog.dir,
        date: date,
        categories: blog.categories
      } as Blog.BlogEntry
    })
    
    useStore.setState(prevState => {
      return produce(prevState, draft => {
        draft.component.blogs.blogEntries = blogEntries
      })
    })
  })

}

export function createApplicationState(): UseBoundStore<ApplicationState, StoreApi<ApplicationState>> {
  setAutoFreeze(false); // Stop immer from being stupid
  const monthNames = State.getMonthNames(defaultLanguage)

  const defaultState: ApplicationState = {
    ambient: { 
      username: "Your username", 
      printMode: false,
      language: defaultLanguage, 
      initializing: 0 },
    component: {
      workExperience: WorkExperience.defaultProps,
      profile: Profile.defaultProps,
      quotes: Quotes.defaultProps,
      education: Education.defaultProps,
      blogs: {
        ...Blog.defaultProps,
        retrieveArticle: fetchArticle,
      }
    },
    i8n: { monthNames: monthNames },
  }

  defaultState.component.profile.birthDate = new Date(1970, 6, 30)
  const useStore = create(set => defaultState)

  fetchData(defaultLanguage)

  return useStore;
}



export const useStore = createApplicationState()
