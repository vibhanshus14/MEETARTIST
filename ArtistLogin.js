import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { Button, CssBaseline, TextField, Link, Grid, Box, Typography } from '@mui/material'


const theme = createTheme();



const ArtistLogin = () => {

  let navigate  = useNavigate();


  const [lemail, setEmail] = useState("")
  const [lpassword, setPassword] = useState("")


  const login = async (event) => {
    event.preventDefault()
    var valid = true;
    var found = false;

    const regex = /^[A-Za-z._]{1,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,4}$/;
    const passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if ((!regex.test(lemail)) && (!passwordRegEx.test(lpassword))) {
      alert("Invalid Email or password");
      valid = false;
    }
    if (valid) {
      console.log("in Methode");
      const result = await fetch("http://localhost:4000/artistLogin", {
        method: 'GET'
      }).then((response) => response.json()).then((actualData) => {
        console.log(actualData);
        actualData && actualData.map((obj) => {
          if (obj.Email === lemail && obj.Password === lpassword) {
            alert("loged in successfully")
            found = true;
            navigate("/artistdashboard")
          }
        })
        if (found != true) {
          alert("Invalid Email or password");
        }

      })
        .catch((err) => console.log(err))
      console.log("inside");

    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{
        height: '80vh', borderRadius: '10px', backgroundImage: `url('https://c.stocksy.com/a/kvS800/z9/2017836.jpg')`,

        height: '100%',
        overflow: 'auto',

      }}>
        <CssBaseline />
        <Box
          borderRadius="5%"
          sx={{

            marginTop: 8,
            marginLeft: 40,
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: "#FFEFD6",
            color: "#393E46",
            border: '3px solid black'

          }}
        >
          <Typography component="h1" variant="h5">
            <b> Artist Login</b>
          </Typography>
          <Box component="form" onSubmit={(e) => login(e)} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email Address"
              name="Email"
              autoComplete="Email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="Password"
              id="Password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             >
              Sign In
            </Button>
            <Grid container sx={{ mt: 2, mb: 2, p: 1 }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {"  Forgot password?"}
                </Link>
              </Grid>
              <Grid item  >
                <Link href="http://localhost:3000/artistregistration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Grid>
    </ThemeProvider>

  )
}

export default ArtistLogin;





