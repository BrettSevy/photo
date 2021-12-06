import React from 'react';
import LandingPageHeader from '../LandingPageHeader/Index';
import PlaceToVisit from '../PlaceToVisit/PlaceToVisit';
import { Helmet } from "react-helmet";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import './LandingPage.css';
import Contact from '../Contact/index'


const theme = createMuiTheme({
  spacing: 5,
  breakpoints: {
    values: {
      md: 1100,
    }
  }
});

function LandingPage() {
  return (
    <div>
      <Helmet>
        {/* <link rel="icon" type="image/jpg+xml" href={FaviconJPG} />
        <link rel="icon" type="image/jpg" href={FaviconJPG} /> */}
        <title>Brett Sevy</title>
      </Helmet>
      <ThemeProvider theme={theme}>
      <LandingPageHeader />
      <PlaceToVisit />
      <Contact/>
      </ThemeProvider>
      

    
      
    </div>
  );
}

export default LandingPage
