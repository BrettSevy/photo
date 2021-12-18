import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography, Box, Divider } from "@material-ui/core";
// import SocialNetwork from "../SocialNetwork";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#726c91",
        color: "#000000",
        height: theme.spacing(85),
        paddingTop: theme.spacing(10),
        "& .MuiDivider-root": {
            background: "#000000"
        }
    },
    footer: {
        background: "#726c91",
        color: "#000000",
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
                        <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">CONTACT</Typography>
                        <Divider />
                    </Box>
                    <Box className={classes.contact}>
                        <div>
                            <Typography variant="h5" >PHONE NUMBER</Typography>
                            <Typography>+1(801)915-9397</Typography>
                        </div>
                        <div >
                            <Typography variant="h5">EMAIL</Typography>
                            <Typography>JUSTBRETTT@GMAIL.COM</Typography>
                        </div>
                    </Box>
                </Container>
            </AppBar>
            <Toolbar className={classes.footer} >
                <Typography>©2022 Brett Sevy</Typography>
            </Toolbar>
        </div>
    )
}