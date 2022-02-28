import './App.css';
import styled from 'styled-components'
import { Header } from './Header'
import { Profile } from './Profile/Profile'
import { Quote } from './Quotes/Quote'
import { Education } from  './Education'
import { useStore } from './BootStrapping/'; 
import * as WorkExperience from './WorkExperience'

const StyledApp = styled.div`  
`

function App() {
  const initialization = useStore(state => state.ambient.initializing)
  const profile = useStore(state => state.component.profile)
  const workExperience= useStore(state => state.component.workExperience)
  const education = useStore(state => state.component.education)
  const quotes = useStore(state => state.component.quotes)
  if (initialization < 5)
    return null

  return (
    <StyledApp className="App">
      <header className="App-header">
        <Header/>
         {/* <Menu></Menu> */}
         <Quote {...quotes}/>
         {/* <User></User> */}
        <Profile {...profile}></Profile>
        <Education {...education} />
        <WorkExperience.List {...workExperience}></WorkExperience.List>
      </header>
    </StyledApp>
  );
}

export default App;
 