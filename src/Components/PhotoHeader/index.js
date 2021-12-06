import React from "react";
import { Container, makeStyles, Typography, AppBar, Toolbar } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import SocialNetwork from "../SocialNetwork";
// import { Link } from "react-scroll";
import { BrowserRouter as Switch } from 'react-router-dom';
import backgroundImage from './images/parallax.jpeg';


const useStyles = makeStyles(theme => ({

    appbar: {
        background: "transparent"
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
        objectFit: 'contain',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },

    header: {
        background: "transparent",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
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
                        // smooth={true}
                        // spy={true}
                        // duration={600}
                        >
                            <svg viewBox="0 0 100 100" className={classes.logo}>
                                <text x="10" y="77" fontFamily="Arial" fontSize="73">B</text>
                                <text x="46" y="77" fontFamily="Arial" fontSize="73">S</text>

                            </svg>
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

            {/* <Parallax
                blur={10}
                bgImage={require('./images/IMG_01.jpg')}
                bgImageAlt="background"
                strength={300}

            > */}

            <Parallax strength={300}>
                <Background className="custom-bg">
                    <img src={backgroundImage} alt="Brett Sevy Web Developer" />
                </Background>


                <div className={classes.parallax}>
                    <Typography variant="h1" className={classes.name} data-aos="fade-right" data-aos-duration="1500">Brett Sevy</Typography>
                    <Typography className={classes.title} variant="h3" data-aos="fade-left" data-aos-duration="1500"> Photography</Typography>
                </div>
            </Parallax>
        </div >
    );
}