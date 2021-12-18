import React from "react";
import { Container, Typography, Box, makeStyles, Divider, Button } from "@material-ui/core/";
import Card from "../Card";
import password from "../Projects/assets/password.png";
import quiz from "../Projects/assets/quiz.png";
import planner from "../Projects/assets/planner.png";
import weather from "../Projects/assets/weather.png";
import coinflip from "../Projects/assets/coinflip.png";
import teamgenerator from "../Projects/assets/teamgenerator.png";
import notetaker from "../Projects/assets/notetaker.png";
import burgers from "../Projects/assets/burgers.png";
import stocks from "../Projects/assets/stocks.png";
import fitness from "../Projects/assets/fitness.png";
import googlebooks from "../Projects/assets/googlebooks.png";
import whiskey from "../Projects/assets/whiskey.png";



const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        padding: theme.spacing(20, 0, 15, 0),
        backgroundColor: '#ffffff',
        "& Button:nth-child(n+2)": {
            marginLeft: theme.spacing(5)
        },
    },
    card: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        
    },

    
    title:{
        color: '#726C91'
    },


    "@global": {
        ".MuiBox-root-281": {
            [theme.breakpoints.down(680)]: {
                display: "flex",
                justifyContent: "center"
            }
        }
    },
}));



function arrayEquals(array1, array2) {
    return array1.length === array2.length && array1.every(value => array2.includes(value))
}

export default function Projects() {
    const classes = useStyles()

    const all = ['projects', 'team']
    const [categoriesToShow, setCategoriesToShow] = React.useState(all)

    return (
        <div id="projects" className={classes.root}>
            <Container maxWidth="md">
                <Box mb={10}>
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000" className={classes.title}>PROJECTS</Typography>
                    <Divider />
                </Box>
                <Box mb={10} >
                    <Button onClick={() => setCategoriesToShow(all)} disabled={arrayEquals(categoriesToShow, all)}>Show all</Button>
                    <Button onClick={() => setCategoriesToShow(["projects"])} disabled={arrayEquals(categoriesToShow, ["projects"])}>Solo projects</Button>
                    <Button onClick={() => setCategoriesToShow(["team"])} disabled={arrayEquals(categoriesToShow, ["team"])}>Team projects</Button>
                </Box>
                <Box className={classes.card}>
                    {(categoriesToShow.includes("team") ? <Card
                        image={whiskey}
                        title="WHISKET"
                        alt="Whisket"
                        tools="MERN stack"
                        text="compare different whiskeys and vote on which you like with friends"
                        github="https://github.com/BrettSevy/project3"
                        heroku="https://quiet-badlands-95961.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={googlebooks}
                        title="GOOGLE BOOKS"
                        alt="Google Books"
                        tools="MERN stack"
                        text="Display books based on user searches. Use of Express.js and MongoDB so that users can save books to review or purchase later"
                        github="https://github.com/BrettSevy/hwbooksearch"
                        heroku="https://limitless-woodland-99715.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={fitness}
                        title="FITNESS TRACKER"
                        alt="Fitness Tracker"
                        tools="MONGO DB, Express, JavaScript"
                        text=" View, create, and track daily workouts."
                        github="https://github.com/BrettSevy/hwFitnessTracker"
                        heroku="https://limitless-journey-76220.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("team") ? <Card
                        image={stocks}
                        title="STOCKS"
                        alt="Stocks"
                        text="Compare your stock portfolio and track stocks you are interested in"
                        tools="JQuery, Handlebars, MySQL, Sequelize"
                        github="https://github.com/BrettSevy/projectTwoStocks"
                        heroku="https://project2-umesh-brett-javier-sa.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={burgers}
                        title="EAT THE BURGERS"
                        alt="Eat the Burgers"
                        tools="MySQL, Express, Handlebars, ORM"
                        text="Add, eat and track burgers you've eaten or would like to eat."
                        github="https://github.com/BrettSevy/hwBurger"
                        heroku="https://intense-shore-00387.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={notetaker}
                        title="NOTE TAKER"
                        alt="Note Taker"
                        text="App that allows the user to write/save/ and delete notes for better orginization."
                        tools="NODE.js Express, JSON"
                        github="https://github.com/BrettSevy/hwNotetaker"
                        heroku="https://floating-oasis-90629.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={teamgenerator}
                        title="WORK TEAM GENERATOR"
                        alt="Team Generator"
                        tools="NODE.js, Express, ES6"
                        text="The application will generate a team page that displays a nicely formatted team roster based on user input from the terminal"
                        github="https://github.com/BrettSevy/hwTeamGenerator"
                        heroku="https://github.com/BrettSevy/hwTeamGenerator"
                        locked={true}
                    /> : null)}
                    {(categoriesToShow.includes("team") ? <Card
                        image={coinflip}
                        title="COIN FLIP"
                        alt="CoinFlip"
                        text="after flipping the quarter the user receive a joke or a GIF"
                        tools="API, JavaScript, HTML, CSS"
                        github="https://github.com/BrettSevy/projectOneCoinFlip"
                        heroku="https://claudhue.github.io/Project1/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={weather}
                        title="WEATHER DASHBOARD"
                        alt="Weather Dashboard"
                        tools="JavaScript, Jquery, OpenWeather API"
                        text="Seach for weather in any city, also receive a 5 day forcast"
                        github="https://github.com/BrettSevy/hwWeather"
                        heroku="https://brettsevy.github.io/hwWeather/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={planner}
                        title="DAY PLANNER"
                        alt="day planner"
                        text="Schedule hourly events daily"
                        tools="JavaScript, JQuery"
                        github="https://github.com/BrettSevy/hwPlanner"
                        heroku="https://brettsevy.github.io/hwPlanner/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={quiz}
                        title="KOBE BRYANT QUIZ"
                        alt="Kobe Bryant Quiz"
                        tools="HTML5, CSS, JavaScript"
                        text="How well do you know Kobe Bryant?"
                        github="https://github.com/BrettSevy/hwQuiz"
                        heroku="https://brettsevy.github.io/hwQuiz/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={password}
                        title="PASSWORD GENERATOR"
                        alt="Password Generator"
                        text="Generates a password based on user input"
                        tools="HTML5, CSS, JavaScript"
                        github="https://github.com/BrettSevy/hwPassword"
                        heroku=" https://brettsevy.github.io/hwPassword/"
                        locked={false}
                    /> : null)}
                </Box>
            </Container>
        </div>
    )
}