import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import Header from './Components/Header/index';
// import Home from './components/pages/Home';
// import Services from './components/pages/Services';
// import Products from '../src/PhotoComponents/pages/Products';
import Home from './Components/Pages/LandingPage';
import PhotographyPage from './Components/Pages/PhotographyPage';
import WebDevPage from './Components/Pages/WebDevPage';
// import SignUp from './PhotoComponents/pages/Pages/SignUp';
// import Header from './Components/Header';
// import Navbar from './Components/Navbar/Navbar';
// import { Home } from '@material-ui/icons';


function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path='/Photography' component={PhotographyPage} />
          <Route path='/WebDev' component={WebDevPage} />
         
        </Switch>
      </Router>
    </>
  );
}



export default App;