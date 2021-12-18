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
        // background: 'red',
        margin: '20px',
        border: '20px',
        
    },

   
    media: {

        height: '50vh',
        width: '75vh',
        // padding: '100% ',
        // justifyContent: 'center',
        color: '#3f3446',
        
        filter: 'grayscale(75%)',
        "&:hover": {
            filter: 'grayscale(10%)',
            cursor: "pointer",
            color: '#726c91',
        }
    },
    title: {
        // fontWeight: 'bold',
        fontSize: '2rem',
        textAlign: 'center',
        position: 'relative',
        top: '25%',
        "&:hover": {
            
           
        }
        // left: '50%',
        // position: 'absolute',
        // margin: '0',
    },
    // desc: {
    //     fontSize: '1.1rem',
    //     color: 'black',
    // },
});



export default function ImageCard({ place }) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea component={RouterLink} to={'/' + (place.link)}>
                    <CardMedia className={classes.media} 
                    image={place.imageUrl}
                    title={'Brett Sevy ' + (place.title)} 
                    >
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
