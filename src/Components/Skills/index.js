import React from "react";
import { makeStyles, CardHeader, Container, Typography, Paper, Box, Divider, Grid, Link } from "@material-ui/core/";
import html from "./assets/html.png";
import css from "./assets/css.png";
import bootstrap from "./assets/bootstrap.png";
// import materialize from "./assets/materialize.png";
import material from "./assets/material.svg";
import javascript from "./assets/js.png";
import react from "./assets/react.png";
import jquery from "./assets/jquery.png";
import node from "./assets/node.png";
import mysql from "./assets/mysql.png";
import mongo from "./assets/mongodb.png";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        width: "100%",
        padding: theme.spacing(20, 0, 15, 0),
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background: "#ffffff",
        color: '#726C91',
        "& .MuiGrid-item": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(10)
        },
        "& .MuiGrid-root": {
            display: "flex",
            justifyContent: "center",
        }
    },
    paper: {
        background: '#3F3446',
        color: '#C6BFD2'

    },
    logos: {
        height: 60,
        filter: "grayscale(100%)",
        "&:hover": {
            filter: "grayscale(35%)"
        }
    },
    title: {
        fontWeight: "bold",

    },
}));



export default function Skills() {
    const classes = useStyles();

    return (
        <div id="skills" className={classes.root}>
            <Container maxWidth="md">
                <Box mb={10}>
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">SKILLS</Typography>
                    <Divider />
                </Box>
                <Paper elevation={1} className={classes.paper} >
                    <CardHeader
                        align="center"
                        title="WEB DEVELOPER"
                    />
                    <Grid container>
                        <Grid item xs={3}>
                            <Link href="https://www.w3.org/Style/CSS/Overview.en.html" target="-blank">
                                <img src={html} alt="HTML" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>HTML</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://www.w3.org/Style/CSS/Overview.en.html" target="-blank">
                                <img src={css} alt="CSS" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>CSS</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://www.javascript.com" target="-blank">
                                <img src={javascript} alt="Javascript" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>JAVASCRIPT</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://reactjs.org" target="-blank">
                                <img src={react} alt="React.js" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>REACT</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://getbootstrap.com" target="-blank">
                                <img src={bootstrap} alt="Bootstrap" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>BOOTSTRAP</Typography>
                        </Grid>
                        {/* <Grid item xs={3}>
                            <Link href="https://materializecss.com" target="-blank">
                                <img src={materialize} alt="Materialize" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>Materialize</Typography>
                        </Grid> */}
                        <Grid item xs={3}>
                            <Link href="https://material-ui.com" target="-blank">
                                <img src={material} alt="Material UI" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>MATERIAL UI</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://jquery.com" target="-blank">
                                <img src={jquery} alt="JQuery" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>JQUERY</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://nodejs.org/en/" target="-blank">
                                <img src={node} alt="Node" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>NODE</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://www.mysql.com/" target="-blank">
                                <img src={mysql} alt="MySql" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>MYSQL</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://www.mongodb.com" target="-blank">
                                <img src={mongo} alt="Mongo DB" className={classes.logos} />
                            </Link>
                            <Typography className={classes.title}>MONGO DB</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}