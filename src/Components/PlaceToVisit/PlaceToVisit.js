import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard/ImageCard';
import places from '../Static/Places';
import { Grid, } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/DSCF3207.JPG'})`,
        display: "flex",
        flexDirection: "column",
        background: 'black',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',

        },
    },
}));
export default function () {
    const classes = useStyles();
    return (
        <div className={classes.root} id="place-to-visit">
            <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="flex-start"

            >
                <div data-aos="fade-right" data-aos-duration="1500">
                    <ImageCard
                        place={places[1]}

                    />
                </div>
                <div data-aos="fade-left" data-aos-duration="1500">
                    <ImageCard place={places[0]}

                    />
                </div>
            </Grid>
        </div>
    );
}