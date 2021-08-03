import React from 'react'
import { useState } from 'react';
import { Toolbar, CssBaseline, IconButton, Menu, MenuItem } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Alert, AlertTitle } from '@material-ui/lab';

import { Heading,DisplayMail,AppBarWithBackground } from './Nav.elements';
export default function Nav() {


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
        <div >
            <CssBaseline />

            <AppBarWithBackground
                position="fixed"
                
            >
                <Toolbar >
                    <Heading align="center" variant="h6" color="inherit" >
                        Task Manager
                    </Heading>
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
                        <DisplayMail >Email : {currentUser.email} </DisplayMail><hr></hr>
                        <MenuItem component={Link} to="task-manager/update-profile" >Update Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                    </Menu>
                </Toolbar>

            </AppBarWithBackground>
            {error && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>}
        </div>
    )
}



