import React from 'react'
import '../../App.css'
import Navbar from '../LandingPageHeader/Index';
import { Helmet } from "react-helmet";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";



const theme = createMuiTheme({
  spacing: 5,
  breakpoints: {
    values: {
      md: 1100,
    }
  }
});


export default function Home() {
    return (
        <>
        <Helmet>
      <title>Brett Sevy</title>
      </Helmet>
      <ThemeProvider theme={theme}>
          < Navbar/>
      </ThemeProvider>
      </>
          

    )
  }

