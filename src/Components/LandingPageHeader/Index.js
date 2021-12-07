import React from "react";
import { Container, makeStyles, Typography, AppBar, Toolbar } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import SocialNetwork from "../SocialNetwork";
import backgroundImage from "./assets/5.jpg";
import logo from "./assets/whitesmall.jpeg";


const useStyles = makeStyles(theme => ({

    appbar: {
        background: "#8F8E8E"
    },
    menu: {
        flexGrow: 1,
    },
    menuItem: {
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "#FF87B7",
            cursor: "pointer"
        }
    },
    logo: {
        height: theme.spacing(9),
        fill: "#D0D0D0",
        "&:hover": {
            fill: "#FF87B7",
            cursor: "pointer"
        }
    },
    name: {
        color: props => props.color,
        fontWeight: 400,
    },
    title: {
        color: "#FF87B7",
    },
    parallax: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        minHeight: '100vh',
        alignItems: 'center',
        

    },
    // custombg: {
    //     width: '400%',
    //     height: 'auto',
    //     justifyContent: 'bottom',
    // },

    LandingPageHeader: {
        background: "#8F8E8E",
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
}))

// #FF87B7 pink
// #F9CADD light pink
// #2F2F2F darkest gray
// #4B4B4B 
// #575757 
// #8F8E8E
// #BCBCBC
// #D0D0D0 lightest gray


export default function LandingPageHeader() {
    const props = { color: '#8F8E8E' };
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
                            <svg viewBox="0 0 100 100" className={classes.logo}>
                                <text x="10" y="77" fontFamily="Arial" fontSize="73">B</text>
                                <text x="46" y="77" fontFamily="Arial" fontSize="73">S</text>

                            </svg>
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
                    <img src={backgroundImage} alt="Brett Sevy" />
                </Background>

                <div className={classes.parallax}>
                    <Typography variant="h2" className={classes.name} data-aos="fade-right" data-aos-duration="1500">Brett</Typography>
                    <Typography className={classes.title} variant="h2" data-aos="fade-left" data-aos-duration="1500">Sevy</Typography>
                </div>
            </Parallax>
        </div>
    );
                              }