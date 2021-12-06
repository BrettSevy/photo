import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Route } from 'react-router'
import LandingPage from './Pages/LandingPage'
import PhotographyPage from './Pages/PhotographyPage'
import WebDevPage from './Pages/WebDevPage'


function Main() {
    return (
        <div>
            <Switch>
                <Route exact path ="/" component={LandingPage}></Route>
                
                <Route path="/photography" component={PhotographyPage}></Route>

                <Route path="/WebDev" component={WebDevPage}></Route>

            </Switch>
            
        </div>
    )
}

export default Main;
