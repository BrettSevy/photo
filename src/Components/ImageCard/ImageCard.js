import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link as RouterLink } from 'react-router-dom'



const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: '#D0D0D0',
        margin: '20px',

    },
    media: {
        height: '50vh',
        width: '75vh',
        filter: 'grayscale(100%)',
        "&:hover": {
            filter: 'grayscale(0%)',
            cursor: "pointer"
        }
    },
    title: {

        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#FF87B7',
        textAlign: 'center',
    },
    desc: {

        fontSize: '1.1rem',
        color: 'black',
    },
});



export default function ImageCard({ place }) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea component={RouterLink} to={'/' + (place.link)}>
                    <CardMedia className={classes.media} image={place.imageUrl} title={'Brett Sevy ' + (place.title)} >
                    <Typography gutterbottom variant="h5" component="h2" className={classes.title} >
                {place.title}
                    </Typography>
                    </CardMedia>
                </CardActionArea>
                {/* <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.desc}
                    >
                        {place.description}
                    </Typography>
                </CardContent> */}
            </Card>
        </div>
    );
}
