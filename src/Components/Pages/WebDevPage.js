import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from '../Header';
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import { Helmet } from "react-helmet";

// import FaviconSvg from "./assets/favicon.svg";
// import FaviconJPG from "./assets/favicon.jpg";


const theme = createMuiTheme({
  spacing: 5,
  breakpoints: {
    values: {
      md: 1100,
    }
  },
  
  typography: {
    fontFamily: [
        'HansiefRough',
        
    ].join(','),
  }
});

function WebDevPage() {
  return (
    <div>
      <Helmet>
        {/* <link rel="icon" type="image/jpg+xml" href={FaviconJPG} />
        <link rel="icon" type="image/jpg" href={FaviconJPG} /> */}
        <title>Brett Sevy</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </ThemeProvider>
    </div>
  )
}

export default WebDevPage