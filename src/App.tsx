import shallow from 'zustand/shallow'
import './App.css';
import styled from 'styled-components'
import { Header } from './Header'
import { Profile } from './Profile/Profile'
import { Quote } from './Quotes/Quote'
import { useStore } from './BootStrapping/'; 
import * as WorkExperience from './WorkExperience'

const StyledApp = styled.div`  
`

function App() {
  const initialization = useStore(state => state.ambient.initializing)
  //const profile = useStore(state => state.component.profile, (prev, current) => current != null && (prev.profile !== current.profile || prev.birthDate !== current.birthDate))
  const profile = useStore(state => state.component.profile)
  const workExperience= useStore(state => state.component.workExperience, shallow)
  const quotes = useStore(state => state.component.quotes, shallow)
  console.log("App: ", initialization, profile, workExperience, quotes)
  if (initialization < 4)
    return null

  return (
    <StyledApp className="App">
      <header className="App-header">
        <Header/>
         {/* <Menu></Menu> */}
         <Quote {...quotes}/>
         {/* <User></User> */}
        <Profile {...profile}></Profile>
        <WorkExperience.List {...workExperience}></WorkExperience.List>
      </header>
    </StyledApp>
  );
}

export default App;
 