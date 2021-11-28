import React from "react";
import { Container, makeStyles, Typography, AppBar, Toolbar } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import SocialNetwork from "../SocialNetwork";
import { Link } from "react-router-dom";
import { BrowserRouter as Switch} from 'react-router-dom';
import backgroundImage from './assets/parallax.jpeg';


const useStyles = makeStyles(theme => ({

  appbar: {
    background: "#263145"
  },
  menu: {
    flexGrow: 1,
  },
  menuItem: {
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#FA0063",
      cursor: "pointer"
    }
  },
  logo: {
    height: theme.spacing(9),
    fill: "#fff",
    "&:hover": {
      fill: "#FA0063",
      cursor: "pointer"
    }
  },
  name: {
    color: props => props.color,
    fontWeight: 400,
  },
  title: {
    color: "#FA0063",
  },
  parallax: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",

  },
  header: {
    background: "#263145",
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat"
  },
  "@global": {
    ".MuiToolbar-root": {
      [theme.breakpoints.down(680)]: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(2)
      }
    }
  },
  networks: {
    // background: "red"
    [theme.breakpoints.down(680)]: {
      display: "none"
    }
  }
}))


export default function Header() {
  const props = { color: 'white' };
  const classes = useStyles(props);


  return (
    <div id="header">
      <AppBar className={classes.appbar}>
        <Container maxWidth="md">
          <Toolbar className={classes.toolbar}>
            <Switch
              to="/"
              smooth={true}
              spy={true}
              duration={600}
            >
              <svg viewBox="0 0 100 100" className={classes.logo}>
                <text x="10" y="77" fontFamily="Arial" fontSize="73">B</text>
                <text x="46" y="77" fontFamily="Arial" fontSize="73">S</text>

              </svg>
            </Switch>
            <Typography className={classes.menu}>
              <Link
                to="/photography"
                smooth={true}
                spy={true}
                duration={600}
                variant="h6"
                underline="none"
                className={classes.menuItem}
              >
                PHOTOGRAPHY
              </Link>
              <Link
                to="/WebDev"
                smooth={true}
                spy={true}
                duration={600}
                variant="h6"
                underline="none"
                className={classes.menuItem}
              >
                CODING
              </Link>
              {/* <Link
                to="projects"
                smooth={true}
                spy={true}
                duration={600}
                variant="h6"
                className={classes.menuItem}
                underline="none">
                PROJECTS</Link>
              <Link
                to="contact"
                smooth={true}
                spy={true}
                duration={600}
                variant="h6"
                className={classes.menuItem}
                underline="none">
                CONTACT</Link> */}
            </Typography>
            <SocialNetwork className={classes.networks} />
          </Toolbar>
        </Container>
      </AppBar>


      <Parallax 
      strength={300}>
                <Background className="custom-bg">
                    <img src={backgroundImage} alt="fill murray" />
                </Background>


        <div className={classes.parallax}>
          <Typography variant="h1" className={classes.name} data-aos="fade-right" data-aos-duration="1500">Brett Sevy</Typography>
          <Typography className={classes.title} variant="h3" data-aos="fade-left" data-aos-duration="1500">Photographer / Web Developer</Typography>
        </div>
      </Parallax>
    </div>
  );
}