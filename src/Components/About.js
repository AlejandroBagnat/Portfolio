import React from 'react';
import { makeStyles, Typography, Card, CardMedia, CardContent, CardActions,Button } from "@material-ui/core";
import ale from '../Images/Ale.jpg';
import TypeWriterEffect from "react-typewriter-effect";
import pdf from '../Images/CV.pdf';

const About = ({ title, dark, id }) => {
  const classes = useStyles();

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={ale} className={classes.media}/>
                    <CardContent className={classes.cardcontent}>
                        <TypeWriterEffect 
                           text="Hi, I'm Alejandro Bagnat"
                           textStyle={{fontSize:"2rem",fontWeight:"700px", color: "#0B346F"}}
                           startDelay={100}
                           cursorColor="#020913"
                           typeSpeed={100}
                        />
                        <TypeWriterEffect 
                           text="Soy analista en sistemas"
                           textStyle={{fontSize:"1.2rem",fontWeight:"500px"}}
                           startDelay={2500}
                           cursorColor="#1B4582"
                           typeSpeed={100}
                        />
                        <CardActions>
                            <Button variant="contained" className={classes.pdfbutton}>
                                <a href={pdf} download>
                                    Download CV
                                </a>
                            </Button>
                        </CardActions>
                        <Typography variant="h6" color="textSecondary">
                            Texto que describe como somos de buenos programadores y lo mucho que vamos a aportar a la empresa que nos contrate.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight:"100vh",
    },
    sectiondark: {
        background:"#333",
        color:"#fff",
    },
    sectioncontent:{
        maxWidth:"80vw",
        margin:"0 auto",
    },
    card:{
        height:"70vh",
        display:"flex",
        marginTop:theme.spacing(6),
        position:"relative"
    },
    media:{
        width:"250px",
        height:"auto",
        objetiveFit:"cover",
        borderRadius:"10px",
        margin: theme.spacing(4)
    },
    pdfbutton:{
        position: "absolute",
        top:"33rem",
        right:"4rem",
        backgroundColor:"#c7ecf6",
        [theme.breakpoints.down("sm")]:{
            bottom:1000,
            right:"1rem",
        },
        padding:theme.spacing(2),    
        "&:hover":{
            backgroundColor:"#fff",            
        },
        "& a":{
            color:"#000",
            textDecoration:"none",
            fontWeight:"600"
        },
        "& a:hover":{
            color:"#0B346F",
        },
        cardcontent:{
            marginTop:theme.spacing(1),
            "& h6":{
                marginTop:theme.spacing(6),
                [theme.breakpoints.down("sm")]:{
                    display:"none",
                },
            },
        },
    }
}))


export default About;

