  
import React from "react";
import { makeStyles, IconButton, Link } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link as RouterLink } from 'react-router-dom'
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from '@material-ui/icons/Code';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
    iconButton: {
        padding: theme.spacing(1)
    },
    icons: {
        fill: "#D0D0D0",
            // fill: "#FA0063",
            // cursor: "pointer"}
    },
}));


export default function SocialNetwork(props) {
    const classes = useStyles(props);

    return (
        <div className={props.className}>
            <Link component={RouterLink} to={'/'} target="" >
                <IconButton className={classes.iconButton}>
                    <HomeIcon className={classes.icons} fontSize="" aria-label="Home" />
                </IconButton>
            </Link>
            <Link component={RouterLink} to={'/photography'} target="" >
                <IconButton className={classes.iconButton}>
                    <PhotoCameraIcon className={classes.icons} fontSize="" aria-label="Photography" />
                </IconButton>
            </Link>
            <Link component={RouterLink} to={'/WebDev'} target="" >
                <IconButton className={classes.iconButton}>
                    <CodeIcon className={classes.icons} fontSize="" aria-label="Web Developer" />
                </IconButton>
            </Link>
            <Link href="https://github.com/BrettSevy" target="_blank" >
                <IconButton className={classes.iconButton}>
                    <GitHubIcon className={classes.icons} fontSize="" aria-label="github" />
                </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/brettsevy/" target="_blank">
                <IconButton className={classes.iconButton}>
                    <LinkedInIcon className={classes.icons} fontSize="" aria-label="linkedin" />
                </IconButton>
            </Link>
            <Link href="mailto:justbrettt@gmail.com" target="_blank">
                <IconButton className={classes.iconButton}>
                    <EmailIcon className={classes.icons} fontSize="" aria-label="email" />
                </IconButton>
            </Link>
        </div>
    );
};