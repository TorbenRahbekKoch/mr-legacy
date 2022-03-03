import './App.css';
import styled from 'styled-components'
import { Header } from './Header'
import { Profile } from './Profile/Profile'
import { Quote } from './Quotes/Quote'
import { Education } from './Education'
import { Menu } from './Menu'
import { useStore } from './BootStrapping/';
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
  if (initialization < 5)
    return null

  return (
    <StyledApp>
      <Header />
      <Quote {...quotes} />
      <Menu></Menu>
      {/* <User></User> */}
      <Profile {...profile}></Profile>
      <Education {...education} />
      <WorkExperience.List {...workExperience}></WorkExperience.List>
    </StyledApp>
  );
}

export default App;
