import React from "react";
import { Container, makeStyles, Typography, AppBar, Toolbar } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import SocialNetwork from "../SocialNetwork";
// import { Link } from "react-scroll";
import { BrowserRouter as Switch } from 'react-router-dom';
import backgroundImage from './images/purple.jpg';
import logo from "./images/logocamera.png";
import logo2 from "./images/cameralogosm.png";


const useStyles = makeStyles(phototheme => ({



    typography: {
        fontFamily: [
            'HansiefRough',
            'Roboto',
            'sans-serif',

        ].join(','),
    },

    appbar: {
        background: "#726C91"
    },
    menu: {
        flexGrow: 1,

    },
    menuItem: {
        marginLeft: phototheme.spacing(5),
        fill: "#ffffff",
        "&:hover": {
            color: "#C6BFD2",
            cursor: "pointer"
        }
    },
    logo: {
        height: phototheme.spacing(9),
        fill: "#ffffff",
        "&:hover": {
            fill: "#C6BFD2",
            cursor: "pointer"
        }
    },
    name: {
        color: "#726C91",
        fontWeight: 400,
    },
    title: {
        color: "#000000",
    },
    parallax: {
        height: "100vh",
        Position: 'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",


    },
   

    PhotoHeader: {

        height: "100vh",
        width: "100%",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
    },

    "@global": {
        ".MuiToolbar-root": {
            [phototheme.breakpoints.down(680)]: {
                display: "flex",
                flexDirection: "column",
                padding: phototheme.spacing(2)
            }
        }
    },

}))


export default function PhotoHeader() {
    const props = { color: 'red' };
    const classes = useStyles(props);


    return (
        <div id="PhotoHeader">
            <AppBar className={classes.appbar}>
                <Container maxWidth="md">
                    <Toolbar className={classes.toolbar}>
                        <Switch
                            to="/"
                        // smooth={true}
                        // spy={true}
                        // duration={600}
                        >
                            {/* <svg viewBox="0 0 100 100" className={classes.logo}>
                                <text x="10" y="77" fontFamily="Arial" fontSize="73">B</text>
                                <text x="46" y="77" fontFamily="Arial" fontSize="73">S</text>

                            </svg> */}
                            <img src={logo2} viewBox="0 0 100 100" className={classes.logo} alt="Brett Sevy" />
                        </Switch>
                        <Typography className={classes.menu}>
                            {/* <Link
                                to="about"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                underline="none"
                                className={classes.menuItem}
                            >
                                About
                            </Link>
                            <Link
                                to="/portfolio"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                underline="none"
                                className={classes.menuItem}
                            >
                                PORTFOLIO
                            </Link>
                            <Link
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

            <Parallax strength={-200}>

                <Background className='custom-bg' >
                    <img src={backgroundImage} alt="Brett Sevy Web Developer" style={{height: '200vh'}}/>
                </Background>


                <div className={classes.parallax}>
                    <img src={logo} alt="Brett Sevy" />
                    {/* <Typography variant="h1" className={classes.name} data-aos="fade-right" data-aos-duration="1500">Brett Sevy</Typography>
                    <Typography className={classes.title} variant="h3" data-aos="fade-left" data-aos-duration="1500"> Photography</Typography> */}
                </div>
            </Parallax>
        </div >
    );
}