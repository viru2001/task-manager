import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin() {
  const classes = useStyles();

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
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
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
        <form className={classes.form} onSubmit={handleSubmit}>
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
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            Reset Password
          </Button>
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
        </form>
      </div>
    </Container>
  );
}