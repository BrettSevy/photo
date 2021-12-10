import React from 'react';
import LandingPageHeader from '../LandingPageHeader/Index';
import LandingPageLinks from '../LandingPageLinks/LandingPageLinks';
import { Helmet } from "react-helmet";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import './LandingPage.css';
import Contact from '../Contact/index'


const theme = createMuiTheme({
  spacing: 5,
  breakpoints: {
    values: {
      md: 1100,
    }
  },

typography: {
  fontFamily: [
    'Sedgwick Ave Display',
      'cursive',
  ].join(','),
}});


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
      {/* <LandingPageLinks /> */}
      <Contact/>
      </ThemeProvider>
      

    
      
    </div>
  );
}

export default LandingPage
