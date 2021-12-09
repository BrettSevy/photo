import * as React from 'react';
import { useState } from 'react';
import './Gallery.css';
// import CloseIcon from '@material-ui/icons/Close';
import Box from '@mui/material/Box';
import { Typography, Divider, } from "@material-ui/core";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import image7 from "./images/7.jpg";
import image8 from "./images/8.jpg";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import image16 from "./images/16.jpg";
import image17 from "./images/17.jpg";
import image18 from "./images/18.jpg";
import image19 from "./images/19.jpg";
import { Close } from '@material-ui/icons';

const Gallery = () => {

  const data = [
    {
      id: 1,
      imgSrc: image1,
    },
    {
      id: 2,
      imgSrc: image2,

    },
    {
      id: 3,
      imgSrc: image3,

    },
    {
      id: 4,
      imgSrc: image4,

    },
    {
      id: 5,
      imgSrc: image5,

    },
    {
      id: 6,
      imgSrc: image6,

    },
    {
      id: 7,
      imgSrc: image7,

    },
    {
      id: 8,
      imgSrc: image8,

    },
    {
      id: 9,
      imgSrc: image9,

    },
    {
      id: 10,
      imgSrc: image10,

    },
    {
      id: 11,
      imgSrc: image11,

    },
    {
      id: 12,
      imgSrc: image12,

    },
    {
      id: 13,
      imgSrc: image13,

    },
    {
      id: 14,
      imgSrc: image14,

    },
    {
      id: 15,
      imgSrc: image15,

    },
    {
      id: 16,
      imgSrc: image16,

    },
    {
      id: 17,
      imgSrc: image17,

    },
    {
      id: 18,
      imgSrc: image18,

    },
    {
      id: 19,
      imgSrc: image19,

    },


  ]

  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);

  }
  return (
    <>
      <div className={modal ? 'modal open' : 'modal'}>
        <img src={tempImgSrc} onClick={() => setModal(false)} />
        {/* <CloseIcon onClick={() => setModal(false)} /> */}

      </div>
      <div>
      <Box className="portfolioheader" mb={10}>
        <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000"> Portfolio</Typography>
        <Divider />
      </Box>
      </div>
      <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{ width: '100%' }} />

            </div>


          )
        })}
      </div>
    </>
  )
}

export default Gallery