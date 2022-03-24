import { useCallback } from 'react';
import styled from 'styled-components'
import './App.css';
import * as Header from './Presentation/Header'
import { Profile } from './Presentation/Cv/Profile/Profile'
import { Education } from './Presentation/Cv/Education'
import { Menu } from './Presentation/Menu'
import * as Blog from './Presentation/Blog'
import { useStore } from './Infrastructure/BootStrapping';
import { useRouter, MatchRoute } from './Infrastructure/Routing'
import * as WorkExperience from './Presentation/Cv/WorkExperience'

const StyledApp = styled.div`  
  font-family: Luminary;
  text-align: center;
  margin-left: 5%;
  background-color: snow;
  min-height: 100vh;
  align-items: center;
  justify-content: top;
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
    (location) => <>
      <Profile {...profile}></Profile>
      <Education {...education} />
      <WorkExperience.List {...workExperience}></WorkExperience.List>
    </>,
    [profile, education, workExperience]
  )

  const blogSelector = useCallback(
    (location: Location) => <Blog.Selector location={location.pathname} {...blogs} />,
    [blogs]
  )

  // const articleProps = useMemo(() => ({
  //   retrieveArticle: fetchArticle
  // } as Blog.ArticleProps), [])

  // const blogArticle = useCallback(
  //   () => <Blog.Article {...articleProps} />, [articleProps]
  // )

  const router = useRouter([
    new MatchRoute("cv", cv),
    // new MatchRoute("/blogs/", blogArticle),
    new MatchRoute("blog", blogSelector),
  ], cv
  )

  if (initialization < 6)
    return null

  return (
    <StyledApp>
      <Header.Header {...quotes}/>
      <Menu />
      {router.execute(window.location)}
    </StyledApp>
  );
}

export default App;
