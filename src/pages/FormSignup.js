import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import api from '../services/api'

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
  },

  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
      }),
  },

  title: {
      flexGrow: 1,
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
  },
  container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
  },
  paper: {
      padding: 15,
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
  },
  formControl: {
      width: '100%'
  }
}));

export default function SignUp() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [weight, setWeight] = useState('');

  async function handleSubmit() {

    const data = {
      email: email,
      phone: phone,
      dob: dob,
      weight: weight
    }

    if(email !== '' && phone !== '' && dob !== '' && weight !== '') {
      await api.post('/contacts', data);
    } else {
      alert('Por favor, preencha todos os campos para cadastro')
    }
  }

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline/>
       <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} >
          <Paper className={classes.paper}>
            <h2>Registration</h2>
            <Grid container spacing={1} alignItems="center" justifyContent="center">
              <Grid item xs={8} >
                <TextField
                  align = "center"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={8} sm={4}>
                  <TextField
                    autoComplete="dob"
                    name="dob"
                    required
                    fullWidth
                    id="dob"
                    label="Date of Birth"
                    autoFocus
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                  />
                </Grid>
                <Grid item xs={8} sm={4}>
                  <TextField
                    required
                    fullWidth
                    id="weight"
                    label="Weight (kg)"
                    name="weight"
                    autoComplete="weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    id="phone"
                    autoComplete="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                </Grid>
              </Grid>
              <Grid>
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                href={"/"}
                sx={{ mt: 3, mb: 2 }}
              >
                REGISTER
              </Button>
              </Grid>

            </Grid>
      </Paper>
      <Box mt={5}>
        <Link color="primary" href="/" sx={{ mt: 3 }}>
          Go Back
        </Link>
      </Box>
    </Grid>
  </Grid >
  </Box>
  </Container >
      );
}