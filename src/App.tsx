import { useCallback, useMemo } from 'react';
import styled from 'styled-components'
import './App.css';
import { fetchArticle } from './BootStrapping/Fetch'
import { Header } from './Header'
import { Profile } from './Profile/Profile'
import { Quote } from './Quotes/Quote'
import { Education } from './Education'
import { Menu } from './Menu'
import * as Blog from './Blog'
import { useStore } from './BootStrapping/';
import { useRouter, MatchRoute } from './Routing'
import * as WorkExperience from './WorkExperience'

const StyledApp = styled.div`  
  font-family: Luminary;
  text-align: center;
  background-color: snow;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  /*font-size: calc(10px + 2vmin);*/
  color: midnightblue;
`

function App() {
  const initialization = useStore(state => state.ambient.initializing)
  const profile = useStore(state => state.component.profile)
  const workExperience = useStore(state => state.component.workExperience)
  const education = useStore(state => state.component.education)
  const quotes = useStore(state => state.component.quotes)
  const blogs = useStore(state => state.component.blogs)

  const cv = useCallback(
    () => <>
      <Profile {...profile}></Profile>
      <Education {...education} />
      <WorkExperience.List {...workExperience}></WorkExperience.List>
    </>,
    [profile, education, workExperience]
  )

  const blogOverview = useCallback(
    () => <Blog.FilteredOverview {...blogs} />,
    [blogs]
  )

  const articleProps = useMemo(() => ({
    retrieveArticle: fetchArticle
  } as Blog.ArticleProps), [])

  const blogArticle = useCallback(
    () => <Blog.Article {...articleProps} />, [articleProps]
  )

  const router = useRouter([
    new MatchRoute("cv", cv),
    new MatchRoute("/blogs/", blogArticle),
    new MatchRoute("blog", blogOverview),
  ], cv
  )

  if (initialization < 5)
    return null

  return (
    <StyledApp>
      <Header />
      <Quote {...quotes} />
      <Menu />
      {router.execute(window.location)}
    </StyledApp>
  );
}

export default App;
