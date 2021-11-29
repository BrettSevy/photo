import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
import './ImageList.css';



export default function MasonryImageList() {
  return (
    <Box sx={{ width: '100%', height: 'auto', overflowY: '' }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: image1,
    title: 'christmas',
  },
  {
    img: image3,
    title: 'dessert',
  },
  {
    img: image14,
    title: 'headshot',
  },
  {
    img: image4,
    title: 'chelsea',
  },
  {
    img: image8,
    title: 'wyatt',
  },
  {
    img: image12,
    title: 'sar',
  },
  {
    img: image7,
    title: 'newborn',
  },
  {
    img: image5,
    title: 'engagement',
  },
  {
    img: image10,
    title: 'pink',
  },
  {
    img: image2,
    title: 'makeup',
  },
  {
    img: image6,
    title: 'family',
  },
  {
    img: image9,
    title: 'watermelon',
  },
  {
    img: image13,
    title: 'brett',
  },
  {
    img: image11,
    title: 'fall',
  },
    
];