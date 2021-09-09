import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';


const Contact = ({ title, dark, id }) => {
    const classes = useStyles();

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">Ponerse en contacto</Typography>
                <Paper className={classes.root}>
                    <div className={classes.titleandchoices}>
                        <Typography variant="h5">Contactame</Typography>
                      
                      
                    </div>
                    <form className={classes.form} noValidate autoComplete="off">
                        <div >
                            <TextField label="Tu nombre" className={classes.label}/>
                            <TextField label="Tu e-mail" className={classes.label}/>
                            <TextField label="Escribe un mensaje" className={classes.label}/>
                        </div> 
                    </form>
                    <Button variant="contained" className={classes.button}>Enviar</Button>
                </Paper>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flexstart",
        alignItems:"center",
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    sectioncontent:{
        maxWidth:"80vw",
    },
    label:{
        display:"block"
    },
    root:{
        marginTop:theme.spacing(4),
        background:"#c7ecf6",
        color:"#fff",
        fontSize: "1.2rem",
        maxWidth:"500px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        padding:theme.spacing(5),
        "& button":{
            background:"#000f",
            color:"#c7ecf6",
            fontWeight:900,
            fontSize:"1.1rem",
            marginTop:theme.spacing(4)
        }
    },
    button:{
        marginTop:theme.spacing(3)
    },
    form: {
        display: "flex",
        alignItems:"center",
        flexDirection:"column",
    },
    titleandchoices:{
        "& h5": {
            marginTop:theme.spacing(4)
        }
    }
}))

export default Contact;