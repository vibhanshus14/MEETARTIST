import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Button, TextField, FormControlLabel, CssBaseline, Link, Checkbox, Paper, Grid, Box, Typography, RadioGroup, Radio, FormControl, FormLabel, LockOutlinedIcon } from '@mui/material';

const theme = createTheme();

export default function Artist_registration() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var Email = data.get('Email');
    var Password = data.get('Password');
    var FirstName = data.get('FirstName').trim();
    var MobileNumber = data.get('MobileNumber');
    var ArtForm = data.get('ArtForm ').trim();
    var ConfirmPassword = data.get('ConfirmPassword');
    var Gender = data.get('Gender');




    var valid = true;
    const nameReg = /^[a-zA-Z]{2,}/;
    if (!nameReg.test(FirstName)) {
      alert("Enter Valid First Name");
    }

    if (!nameReg.test(ArtForm )) {
      alert("Enter Valid Art Form ");
    }

    



    const regex = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,4}$/;
    if (!regex.test(Email)) {
      alert("Invalid Email");
      valid = false;
    }
    const passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegEx.test(Password)) {
      alert("Weak Password");
      valid = false;
    }

    if (Password != ConfirmPassword) {
      alert("Confirm Password Not Matched")
      valid = false;
    }


    if (valid) {


      let result = await fetch("http://localhost:4000/artistRegister", {
        method: 'POST',
        body: JSON.stringify({ FirstName, ArtForm , Email, Password, ConfirmPassword, Gender }),
        headers: {
          'Content-type': 'application/json'
        }
      })
      result = await result.json()
      console.log(result);
    }
  };

  return (
    <ThemeProvider theme={theme}>
     
      <Grid container component="main" sx={{ height: '80vh', borderRadius: '10px' ,backgroundImage:`url('https://c.stocksy.com/a/kvS800/z9/2017836.jpg')`,
  
  height:'100%',
  overflow:'auto',

}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
           

            
            
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ borderRadius: '10px',marginLeft:'400px', border: '3px solid black',backgroundColor: "#FFEFD6",
                      color:"#393E46",}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '10px',
              
             


            }}
          >



            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}





            <Typography component="h1" variant="h5">
              Register Here!!!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 0.5, borderRadius: '10px' }}>
              <TextField
                margin="normal"
                required

                id="FirstName"
                label="FirstName"
                name="FirstName"
                autoComplete="FirstName"
                autoFocus
              /> 
              <br/>  
              <TextField
                margin="normal"
                required

                id="ArtForm "
                label="ArtForm "
                name="ArtForm "
                autoComplete="ArtForm "
                autoFocus

              /> <br/>  

              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="Gender"
                  id='Gender'
                  row

                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>

              <TextField
                margin="normal"
                required

                id="MobileNumber"
                label="Mobile Number "
                name="MobileNumber "
                autoComplete="MobileNumber "
                autoFocus

              /> <br/> 


              <TextField
                margin="normal"
                required
                id="Email"
                label="Email Address"
                name="Email"
                autoComplete="Email"

                autoFocus
              /> <br/>  

              <TextField
                margin="normal"
                required

                name="Password"
                label="Password"
                type="password"
                id="Password"

                autoComplete="current-password"
              /><br/>  
              <TextField
                margin="normal"
                required

                name="ConfirmPassword"
                label="Confirm Password"
                type="password"
                id="ConfirmPassword"
                autoComplete="current-password"
              /><br/>  

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="http://localhost:3000/artistlogin" variant="body2">
                    {"Already have an account? Login here "}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
