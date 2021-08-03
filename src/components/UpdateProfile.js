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
    

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        const promises = []
        setLoading(true)
        setError("")
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push("/task-manager")
        }).catch(() => {
            setError("Failed to update profile")
        }).finally(() => {
            setLoading(false)
        })

    }



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <FormContainer>
                <LockIcon >
                    <LockOutlinedIcon />
                </LockIcon>
                <Typography component="h1" variant="h5">
                    Update Profile
                </Typography>
                {error && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>}
                <Form  onSubmit={handleSubmit}>
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
                                defaultValue={currentUser.email}
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
                                placeholder="leave blank to keep same"
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
                                placeholder="leave blank to keep same"
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
                        Update
                    </StyledBtn>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/task-manager" variant="body2">
                                Cancel
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
            </FormContainer>

        </Container>
    );
}