import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import { Alert, AlertTitle } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';

import { Form, StyledBtn , LockIcon,FormContainer } from './form.elements';


export default function Signup() {


    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/task-manager")
        }
        catch (e) {
            console.log(e)
            setError("Failed to create an account")
        }
        setLoading(false)
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <FormContainer>
                <LockIcon>
                    <LockOutlinedIcon />
                </LockIcon>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                {error && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>}
                <Form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                inputRef={emailRef}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                inputRef={passwordRef}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirm-password"
                                autoComplete="current-password"
                                inputRef={passwordConfirmRef}
                            />
                        </Grid>
                    </Grid>
                    <StyledBtn
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={loading}
                    >
                        Sign Up
                    </StyledBtn>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/task-manager/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
            </FormContainer>

        </Container>
    );
}