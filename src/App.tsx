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
  const state = useStore(state => state)
  console.log("App: ", state)

  return (
    <StyledApp className="App">
      <header className="App-header">
        <Header/>
         {/* <Menu></Menu> */}
         <Quote/>
         {/* <User></User> */}
        <Profile {...state.component1.profile}></Profile>
        <WorkExperience.List {...state.component1.workExperience}></WorkExperience.List>
      </header>
    </StyledApp>
  );
}

export default App;
 