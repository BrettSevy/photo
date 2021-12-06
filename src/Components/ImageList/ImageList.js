import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles, Typography, } from "@material-ui/core";
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


const useStyles = makeStyles(theme => ({

  root: {
    minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
    width: "100%",
    padding: theme.spacing(20, 0, 15, 0),
    backgroundSize: "cover",
    backgroundColor: 'black',
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    "& .MuiGrid-box-md-8": {
      paddingRight: theme.spacing(10),
      [theme.breakpoints.down(1100)]: {
        paddingRight: theme.spacing(0),
      },
    },
  },

  "@global": {
    ".MuiImageList-Masony": {
      [theme.breakpoints.down(680)]: {
        display: "flex",
        justifyContent: "center",

      }
    }
  }
}
));

export default function MasonryImageList() {
  const classes = useStyles();

  return (
    <div id="Portfolio" className={classes.root}>

      <Box sx={{ width: '100%', height: 'auto', overflowY: '' }}>
        <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000"> Portfolio</Typography>

        <ImageList className='portfolio' variant="masonry" cols={4} gap={8}>
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
    </div>
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