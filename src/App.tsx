import './App.css';
import { User } from './Users'
import { Header } from './Header'
import { Profile } from './Profile/Profile'
import { Quote } from './Quotes/Quote'
import { ApplicationState, useStore } from './BootStrapping/'; 
import * as WorkExperience from './WorkExperience'

function App() {
  const state = useStore(state => state)
  console.log("App: ", state)

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
         {/* <Menu></Menu> */}
         <Quote/>
         <User></User>
        <Profile></Profile>
        <WorkExperience.List {...state.component1.workExperience}></WorkExperience.List>
      </header>
    </div>
  );
}

export default App;
 