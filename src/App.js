import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HeaderCanvas from './components/headerCanvas';
import AboutMe from './components/aboutMe/aboutMeComponent'
import Education from './components/Education/education';
import Work from './components/work/work';
import Social from './components/social/social';


function App() {
  return (
    <div className="App">
      <div>
        <p>Development is in Progress..</p>
      </div>
      <div className="mainBody">
        <HeaderCanvas />
        <Social />
        <Switch>
          <Route path="/education" component={Education}></Route>
          <Route path="/work" component={Work}></Route>
          <Route path="/" component={AboutMe}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
