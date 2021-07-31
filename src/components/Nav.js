import React from 'react'
import { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Typography, CssBaseline, IconButton, Menu, MenuItem } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Alert, AlertTitle } from '@material-ui/lab';

export default function Nav() {

    const useStyles = makeStyles((theme) => ({
        grow: {
            flexGrow: 1
        },
        email: {
            padding: "4%"
        },
        appbar: {
            background: "#b80751"
        }
    }));

    const classes = useStyles();
    const [anchorEl, open] = useState(null)

    const handleMenu = (event) => {
        open(event.currentTarget)
    }

    const handleClose = () => {
        open(null)
    }


    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.pushState("/task-manager/signin")

        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar
                position="fixed"
                className={classes.appbar}
            >
                <Toolbar >
                    <Typography align="center" variant="h6" color="inherit" className={classes.grow}>
                        Task Manager
                    </Typography>
                    <IconButton
                        area-haspopup="true"
                        color="inherit"
                        onClick={handleMenu}
                    >
                        <AccountCircle />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        aria-controls="fade-menu"
                        keepMounted
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        transformOrigin={{ vertical: "top", horizontal: "right" }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <p className={classes.email}>Email : {currentUser.email} </p><hr></hr>
                        <MenuItem component={Link} to="task-manager/update-profile" >Update Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                    </Menu>
                </Toolbar>

            </AppBar>
            {error && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>}
        </div>
    )
}



