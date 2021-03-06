import React from "react";
import { Container, makeStyles, Typography, AppBar, Toolbar } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import SocialNetwork from "../SocialNetwork";
import backgroundImage from "./assets/purple.jpg";
import logo from "./assets/logomain.png";
import logo2 from "./assets/mainlogosm.png";
import LandingPageLinks from '../LandingPageLinks/LandingPageLinks';


const useStyles = makeStyles(theme => ({



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
        marginLeft: theme.spacing(5),
        fill: "#ffffff",
        "&:hover": {
            color: "#C6BFD2",
            cursor: "pointer"
        }
    },
    logo: {
        height: theme.spacing(9),
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
        height: "200vh",
        objectFit: 'scale-down',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",

    },

    backgroundImage: {

        height: "100px",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "200px",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",


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

}))


export default function LandingPageHeader() {
    const props = { color: 'pink' };
    const classes = useStyles(props);

    return (
        <div id="LandingPageHeader">
            <AppBar className={classes.appbar}>
                <Container maxWidth="md">
                    <Toolbar className={classes.toolbar}>
                        {/* <Switch
                            to="/WebDev"
                        smooth={true}
                        spy={true}
                        duration={600}
                        > */}
                        {/* <img viewBox="0 0 100 100" className={classes.logo} src={logo} alt="Brett Sevy" /> */}
                        {/* <svg viewBox="0 0 100 100" className={classes.logo}> */}
                        {/* <text x="10" y="77" fontFamily="Arial" fontSize="73">B</text> */}
                        <img src={logo2} viewBox="0 0 100 100" className={classes.logo} alt="Brett Sevy" />
                        {/* <text x="46" y="77" fontFamily="Arial" fontSize="73">S</text> */}

                        {/* </svg> */}
                        {/* </Switch> */}
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
                                ABOUT
                            </Link>
                            <Link
                                to="skills"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                underline="none"
                                className={classes.menuItem}
                            >
                                SKILLS
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

            <Parallax strength={300}>
                <Background className={classes.custombg}>
                    <img src={backgroundImage} alt="Brett Sevy" style={{height: '250vh'}}/>
                </Background>

                <div className={classes.parallax}>
                    <img src={logo} alt="Brett Sevy" />
                    {/* <Typography variant="h1" className={classes.name} data-aos="fade-right" data-aos-duration="1500">Brett</Typography>
                    <Typography className={classes.title} variant="h1" data-aos="fade-left" data-aos-duration="1500">Sevy</Typography> */}
                    <LandingPageLinks />
                </div>
            </Parallax>
        </div>
    );
}