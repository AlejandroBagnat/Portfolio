import { AppBar, Divider, Drawer, IconButton, List, ListItem, makeStyles, Toolbar } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import React, { useState } from 'react';
import logo from '../Images/logo.png'
import { Link, animateScroll as scroll } from 'react-scroll';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
// import ContactMailTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import ContactMailIcon from '@material-ui/icons/ContactMail'
import CancelIcon from '@material-ui/icons/Cancel';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';







const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const links = [
        {
            id: "about",
            text: "About me",
            icon: <InfoTwoToneIcon fontSize="large"/>
        },
        {
            id: "skills",
            text: "Timeline",
            icon: <EmojiObjectsTwoToneIcon fontSize="large"/>
        },
        {
            id: "work",
            text: "My work",
            icon: <BuildTwoToneIcon fontSize="large"/>
        },
        {
            id: "contact",
            text: "Get in touch",
            icon: <ContactMailIcon fontSize="large"/>
        }
    ]

    return (
        <>
            <AppBar position="sticky" className={classes.root} >
                <Toolbar className={classes.Toolbar}>
                    <img src={logo} className={classes.logo} alt="Logo" />
                    <List className={classes.menu}>
                        {
                            links.map(({ id, text }, index) => (
                                <Link key={index} to={id} spy={true} smooth={true} activeClass="active" duration={1500} offset={-30} className={classes.title}>{text}</Link>
                            ))
                        }
                    </List>
                    <IconButton edge="end" className={classes.menubutton} onClick={() => setOpen(true)}>
                        <MenuIcon fontSize="large" tooltipPosition="top-right" />
                    </IconButton>

                </Toolbar>

            </AppBar>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <IconButton onClick={() => setOpen(!open)} className={classes.cancelIcon}>
                    <CancelIcon fontSize="large"/>
                </IconButton>
                <Divider />
                {
                    links.map(({ id, text, icon }, index) => (
                        <Link key={index}
                            className={classes.sidebar}
                            to={id}
                            spy={true}
                            smooth={true}
                            activeClass="active"
                            duration={1500}
                            offset={-30}
                            // className={classes.title}
                        >
                            <ListItem component="h5">
                                <span>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                            </ListItem>
                        </Link>
                    ))
                }
            </Drawer>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    logo: {
        height: "2rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        },
        left: 0,
        [theme.breakpoints.down("xs")]: {
            height: "1.5rem",
            marginLeft: "10px"
        },
    },
    root: {
        background: "rgb(180, 180, 180)",
        Top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    Toolbar: {
        display: "flex",
        justifyContent: "flexstart",
        alignItems: "center",
        margin: "-15px",
        marginLeft: "-25px",
        marginTop: "-17px",
        marginBottom: "-16px",
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        "& a": {
            color: "rgb(280, 280, 280)",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            borderBottom: "2px solid #000"
        }
    },
    title: {
        "&:hover": {
            color: "#000"
        }
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "primary",
            position: "absolute",
            top: 0,
            right: 20
        }

    },
    sidebar:{
        width:"50vw",
        "& h5":{
            margin:theme.spacing(10,0,0,4),
            fontSize:"1.4rem",
            color:"#000"
        },
        [theme.breakpoints.down("xs")]:{
            width:"80vw"
        },
        "& h5:hover":{
            color:"#999",
            cursor:"pointer"            
        }
    },
    cancelIcon:{
        color: "tomato",
        position: "absolute",
        top:0,
        left:35
    }


}))

export default Navbar;