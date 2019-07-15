import React from 'react';
import classNames from 'classnames/bind';
import styles from './SignUp.scss';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const cx = classNames.bind(styles);

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SignUp = ({input, handleChange}) => {
    const onClick = () => {
      axios.post("http://192.168.137.167:3000/api/auth/register", {firstname: input.First_Name,
                                                            lastname: input.Last_Name,
                                                            email: input.Email_Address,
                                                            password: input.Password})
                                                            .then(response => {
                                                              console.log(response)
                                                            })
                                                            .catch(error => {
                                                              console.log(error)
                                                            })
      window.location.href = '/';
    }
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <div className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => handleChange({ name: e.target.name, value: e.target.value})}
                  autoComplete="fname"
                  name="First_Name"
                  variant="outlined"
                  value={input.First_Name}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => handleChange({ name: e.target.name, value: e.target.value})}
                  variant="outlined"
                  required
                  fullWidth
                  value={input.Last_Name}
                  id="lastName"
                  label="Last Name"
                  name="Last_Name"
                  autoComplete="lname"
               />
               </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => handleChange({ name: e.target.name, value: e.target.value})}
                  variant="outlined"
                  required
                  fullWidth
                  value={input.Email_Address}
                  id="emailAddress"
                  label="Email Address"
                  name="Email_Address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => handleChange({ name: e.target.name, value: e.target.value})}
                  variant="outlined"
                  required
                  fullWidth
                  value={input.Password}
                  name="Password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => onClick()}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    );
};

export default SignUp;