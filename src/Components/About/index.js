import React from "react";
import { makeStyles, Typography, Box, Container, Divider, Grid } from "@material-ui/core";
import portrait from "./assets/13.jpg";


const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        width: "100%",
        padding: theme.spacing(20, 0, 15, 0),
        backgroundSize: "cover",
        backgroundColor: 'white',
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        "& .MuiGrid-grid-md-8": {
            paddingRight: theme.spacing(10),
            [theme.breakpoints.down(1100)]: {
                paddingRight: theme.spacing(0),
            },
        },
    },
    portrait: {
        height: theme.spacing(50),
        // borderRadius: "50%",
        float: "left",
        // shapeOutside: "circle(50%)",
        marginRight: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(0),
        },
        [theme.breakpoints.down(670)]: {
            height: theme.spacing(30),
        },
    },
    timeline: {
        borderLeft: "2px solid grey",
        padding: theme.spacing(1.4, 10),
        [theme.breakpoints.down(1100)]: {
            display: "none"
        }
    },
    timelineItem: {
        lineHeight: 2,
        position: "relative",
        "&:nth-child(-n+2)": {
            paddingBottom: theme.spacing(8),
        }
    },
    date: {
        paddingBottom: theme.spacing(3),
        "&:first-child": {
            fontWeight: "bold",
            position: "relative",
            fontSize: theme.spacing(2.7),
            paddingTop: 0,
        },
        "&:before": {
            content: "''",
            display: "block",
            width: theme.spacing(2),
            height: theme.spacing(2),
            borderRadius: "50%",
            position: "absolute",
            top: theme.spacing(0.4),
            left: theme.spacing(-11.6),
            background: "white",
            border: "2px solid grey"
        },
    }
}))

export default function About() {
    const classes = useStyles();

    return (
        <div id="about" className={classes.root}>
            <Container maxWidth="md">
                <Box mb={10}>
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000"> About Me</Typography>
                    <Divider />
                </Box>
                <Grid container>
                    <Grid item md={8} >
                        <img
                            src={portrait}
                            className={classes.portrait}
                            alt="portrait"
                        />
                        <Typography paragraph align="justify" className={classes.description}>
                            <Box lineHeight={2}>
                                From the moment I produced “Hello World” in the console I was hooked. I had a child on the way working 60+
                                hours, no mental stimulation and no real opportunities for growth. Something needed to change. I knew as
                                soon as I started my first course that I had found what I was searching for. It offered an engaging challenge
                                to continually learn and improve my skills in creating easy to use web applications. Coding has allowed me to
                                be creative but within a structure that I need. I often don’t know what I’m doing and need to ask constant
                                questions but the amount of satisfaction I get from seeing something I have built go live is amazing.
                               
                             </Box>
                            
                            <Box lineHeight={2}>
                                When not working, I can be found doing dad things with a tiny human, searching for a cheap house with
                                “lots of potential” so I can construct an open concept kitchen like the HGTV designers, passive-aggressively
                                talking to the trees in my yard about dropping leaves right after I mow the lawn, regretting doing crossfit
                                workouts while doing crossfit workouts, drinking mediocre whiskey, listening to podcasts, and watching all
                                the sports on TV with his high-spirited wife.
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <div className={classes.timeline}>
                            <div className={classes.timelineItem}>
                                <Typography className={classes.date} > Jan 2020 - April 2020 </Typography>
                                <Typography variant="h6"> Southern Methodist University </Typography>
                                <Typography variant="p"> Full Stack Web Development Coding</Typography>
                                <Typography variant="body2"> Dallas, Texas </Typography>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}