import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Route } from 'react-router'
import LandingPage from './Components/Pages/LandingPage'
import PhotographyPage from './Components/Pages/PhotographyPage'
import WebDevPage from './Components/Pages/WebDevPage'
import { BrowserRouter } from 'react-router-dom';


export default function App() {
 
  return (
    <BrowserRouter basename="/photo">
      <div>
          <Switch>
              <Route exact path ="/" component={LandingPage}></Route>
              
              <Route path="/photography" component={PhotographyPage}></Route>

              <Route path="/WebDev" component={WebDevPage}></Route>

          </Switch>
          
      </div>
      </BrowserRouter>
  )
}