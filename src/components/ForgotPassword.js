import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useRef, useState } from 'react';
import { Form, StyledBtn , LockIcon,FormContainer } from './form.elements';



export default function Signin() {
  
  const emailRef = useRef();
  const {resetPassword } = useAuth();


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")

  async function handleSubmit(e) {
      e.preventDefault();   
      try {
          setMessage("")
          setError("")
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage('check your inbox for further instructions')
      
      }
      catch(e) {
          console.log(e)
          setError("Failed to reset Password")
      }
      setLoading(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormContainer>
        <LockIcon >
          <LockOutlinedIcon />
        </LockIcon>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        {error && <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>}
        {message && <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {message}
         </Alert>   }
        <Form  onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
          />
        
          <StyledBtn
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Reset Password
          </StyledBtn>
          <Grid container>
            <Grid item xs>
              <Link to="/task-manager/signin" variant="body2">
                Sign In
              </Link>
            </Grid>
            <Grid item>
              <Link to="/task-manager/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </FormContainer>
    </Container>
  );
}