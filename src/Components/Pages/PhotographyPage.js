import React from 'react';
// import './App.css';
// import Cards from '../Cards';
// import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import ImageList from '../ImageList/ImageList';
// import Modal from '../Modal/Modal';
// import UploadForm from '../UploadForm/UploadForm';
import './PhotographyPage.css';
import PhotoHeader from '../PhotoHeader';
import { Helmet } from "react-helmet";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import About from '../About';

const theme = createMuiTheme({
  spacing: 5,
  breakpoints: {
    values: {
      md: 1100,
    }
  }
});

function PhotographyPage() {
  // const [selectedImg, setSelectedImg,] = useState(null);

  return (
    <>
    <Helmet>
      <title>Brett Sevy</title>
      </Helmet>
      <ThemeProvider theme={theme}>
      <PhotoHeader/>
      <About/>
      {/* <UploadForm/> */}
      {/* <HeroSection /> */}
      {/* <Cards /> */}
           {/* <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} */}
      <ImageList/>
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default PhotographyPage