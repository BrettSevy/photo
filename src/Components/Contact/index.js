import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography, Box, Divider } from "@material-ui/core";
// import SocialNetwork from "../SocialNetwork";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#263145",
        height: theme.spacing(85),
        paddingTop: theme.spacing(10),
        "& .MuiDivider-root": {
            background: "#FFFFFF"
        }
    },
    footer: {
        background: "#263145",
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
    },
    contact: {
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(4)
        },
        "& div": {
            marginBottom: theme.spacing(6),
        }
    }
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div id="contact">
            <AppBar position="static" className={classes.root}>
                <Container maxWidth="md">
                    <Box mb={15}>
                        <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">Contact</Typography>
                        <Divider />
                    </Box>
                    <Box className={classes.contact}>
                        <div>
                            <Typography variant="h5" >Phone Number</Typography>
                            <Typography>+1(801)915-9397</Typography>
                        </div>
                        <div >
                            <Typography variant="h5">Email</Typography>
                            <Typography>justbrettt@gmail.com</Typography>
                        </div>
                    </Box>
                </Container>
            </AppBar>
            <Toolbar className={classes.footer} >
                <Typography>©2020 Brett Sevy</Typography>
            </Toolbar>
        </div>
    )
}