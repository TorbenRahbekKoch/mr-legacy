import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter, MatchRoute } from '../../Infrastructure/Routing'
import * as State from '../../Library/State'
import { BlogController } from '../Blog'
import * as Cv from '../Cv'
import * as Header from '../Header'
import * as Repository from '../../Infrastructure/BootStrapping/Repositories'
import { ApplicationComposer } from './Application.composer'
import { AllTexts, defaultTexts } from '../../Infrastructure/BootStrapping/AllTexts'
import * as Fetch from '../../Infrastructure/BootStrapping'
import { ServicesController } from '../Services'

export function ApplicationController() {
  const [texts, setTexts] = useState<AllTexts>(defaultTexts)
  const [language, setLanguage] = useState("dk")

  useEffect(
    () => {Fetch.fetchTexts(language, setTexts)},
    [language]
  )

  const headerRepository = useMemo(
    () => new Repository.Header(language),
    [language]
  )

  const cvRepository = useMemo(
    () => new Repository.Cv(language),
    [language]
  )

  const blogRepository = useMemo(
    () => new Repository.Blog(),
    []
  )

  const servicesRepository = useMemo(
    () => new Repository.Services(language),
    [language]
  )

  const monthNames = useMemo(() => {
    if (language === "dk") {
      return State.i8nMonthNames.dk.longNames
    }
    else {
      return State.i8nMonthNames.en.longNames
    }
  },[language])

  const cvTexts = useMemo(
    () => ({
      period: texts?.period,
      project: texts?.project,
      description: texts?.description,
      technologies: texts?.technologies,
      company: texts?.company,
      jobDescription: texts?.jobDescription,
      now: texts?.now,
      workExperience: texts?.workExperience,
      education: texts?.education,
      length: texts?.length,
      location: texts?.location,
      course: texts?.course,
      time: texts?.time,
      monthNames: monthNames
    }) as Cv.Texts,
    [texts, monthNames]
  )

  const menuTexts = useMemo(() => ({
    danish: "Dansk",
    english: "English",
    services: texts.services
    }),
    [texts.services]
  )

  const headerTexts = useMemo(() => ({
    source: texts.source,
    twitterSource: texts.twitterSource,
    linkedinSource: texts.linkedinSource,
    oreillySource: texts.oreillySource
  }),[texts])

  const blogController = useCallback(
    (location: Location) => {
      return <BlogController repository={blogRepository} location={location.pathname} />
    },
    [blogRepository]
  )

  const cvController = useCallback(
    () => {
      return <Cv.Controller repository={cvRepository} birthDate={new Date(1970, 6, 30)} texts={cvTexts} />
    },
    [cvTexts, cvRepository]
  )

  const headerController = useCallback(
    () => {
      return <Header.HeaderController repository={headerRepository} texts={headerTexts}/>
    },
    [headerRepository, headerTexts]
  )

  const servicesController = useCallback(
    () => {
      return <ServicesController repository={servicesRepository}/>      
    },
    [servicesRepository]
  )

  const router = useRouter([
    new MatchRoute("blogs", (location) => blogController(location)),
    new MatchRoute("services", location => servicesController()),
    new MatchRoute("cv", (location) => cvController()),
  ],
  )

  router.setDefaultRoute(() => {
    return (servicesController())
  })


  if (texts == null) {
    return null
  }

  return (
    <ApplicationComposer 
      router={router}
      headerController={headerController} 
      texts={menuTexts}
      currentLanguage={language}
      requestLanguageChange={setLanguage}
      />
  );

}