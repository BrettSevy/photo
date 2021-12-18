import React from "react";
import { Container, makeStyles, Typography, AppBar, Toolbar } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import SocialNetwork from "../SocialNetwork";
import { Link } from "react-scroll";
import backgroundImage from "./assets/parallax.jpg";
// import { Switch } from "react-router-dom";
import '../Fonts/HansiefRough.otf';
import logo2 from "./assets/codingLogo.png";
import logo from "./assets/codinglogosm.png";




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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",

    },
    header: {
       
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


export default function Header() {
    const props = { color: '#000000' };
    const classes = useStyles(props);


    return (
        <div id="header">
            <AppBar className={classes.appbar}>
                <Container maxWidth="md">
                    <Toolbar className={classes.toolbar}>
                        {/* <Switch
                            to="/WebDev"
                        smooth={true}
                        spy={true}
                        duration={600}
                        > */}
                        <img src={logo} viewBox="0 0 100 100" className={classes.logo} alt="Brett Sevy" />
                        {/* <svg viewBox="0 0 100 100" className={classes.logo}>
                       
                            <text x="10" y="77" fontFamily="Arial" fontSize="73">B</text>
                            <text x="46" y="77" fontFamily="Arial" fontSize="73">S</text>

                        </svg> */}
                        {/* </Switch> */}
                        <Typography className={classes.menu}>
                            <Link
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
                                CONTACT</Link>


                        </Typography>
                        <SocialNetwork className={classes.networks} />
                    </Toolbar>
                </Container>
            </AppBar>


            <Parallax strength={300}>
                <Background className="custom-bg">
                    <img src={backgroundImage} alt="Brett Sevy Web Developer" />
                </Background>


                <div className={classes.parallax}>
                <img src={logo2} alt="Brett Sevy" />
                    {/* <Typography variant="h1" className={classes.name} data-aos="fade-right" data-aos-duration="1500">Brett Sevy</Typography>
                    <Typography className={classes.title} variant="h3" data-aos="fade-left" data-aos-duration="1500"> Web Developer</Typography> */}
                </div>
            </Parallax>
        </div>
    );
}