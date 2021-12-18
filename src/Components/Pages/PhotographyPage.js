import React from 'react';
import PhotoHeader from '../PhotoHeader';
import { Helmet } from "react-helmet";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import About from '../About';
import Contact from '../Contact/index'
import Gallery from '../ImageList/Gallery';

const phototheme = createMuiTheme({
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

function PhotographyPage() {
  // const [selectedImg, setSelectedImg,] = useState(null);

  return (
    <>
      <Helmet>
        <title>Brett Sevy</title>
      </Helmet>
      <ThemeProvider theme={phototheme}>
        <PhotoHeader />
        {/* <About/> */}
        {/* <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} */}
        <Gallery />
        <Contact />

      </ThemeProvider>
    </>
  );
}

export default PhotographyPage