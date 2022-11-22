// // import React from 'react'
// // import { Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TableRow, TableCell, Table,Button,Box } from '@mui/material'

// // function User_login() {
// //   return (
// //     <div class="card">
// //       <br/>
// //       <h1><b>USER LOGIN</b></h1>
// //              <Box sx={{ width:'500px',marginTop:'50px',marginLeft:'400px',marginRight:'200px',border:'5px solid grey',backgroundColor:'lightgrey'}}>
// //             <Table >
                
// //             <br/><br/>

// //                 <TableRow>
// //                 <TableCell><Typography variant="h6" >Email ID :</Typography></TableCell>
// //                 <TableCell> <TextField id="outlined-basic" label="Enter Email ID" variant="outlined"></TextField></TableCell>
// //                 <br />  <br />
// //                 </TableRow>

// //                 <TableRow>
// //                 <TableCell> <Typography variant="h6" >Password :</Typography></TableCell>
// //                 <TableCell><TextField id="outlined-basic" label="Enter Password" variant="outlined"></TextField></TableCell>
// //                </TableRow>
// //                <br />  
             
                
            
// //             </Table>
// //             <Button variant="contained" >LOGIN</Button>
// //             <br />  <br /> 

// //             </Box>

// //     </div>
// //   )
// // }

// // export default User_login




// // new code 




// import { useState } from "react"
// import axios from "axios"
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme();

// const artistData = {
//   Email: "",
//   Password: "",
// }

// const ArtistLogin = () => {

//   const [artist, setArtist] = useState(artistData)

//   const handleChange = (e) => {
    
//     console.log("handle change called 1" + e.target.value );
    
//     const { name, value } = e.target;
    
//     setArtist({...artist, [name]: value})
//     console.log("handle change called 2" + JSON.stringify(artist));
       
//   }

//   const isEmailValid = (email) => {
//     const emailRegexp = new RegExp(
//       /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
//     )
  
//     return emailRegexp.test(email)
//   }

  
//   const login = (e) => {
//     e.preventDefault()
//     // console.log("Hii");
//     // validation

//     console.log("my email validation" + isEmailValid(artist.Email));
//     if(isEmailValid(artist.Email)){
//       axios.get("http://localhost:4000/userLogin", artist)
//         .then(res => {
//           // alert(res.data)
//           console.log("response" + JSON.stringify(res.data))
//           // if (artist.Email && artist.Password) {
//           //   sessionStorage.setItem("artist",
//           //     JSON.stringify(artist.Email))
//           // }
//         })

//     }else{
//       console.log("email invalid");
//     }


//   }
//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '100%', borderRadius: '10px' ,backgroundImage:`url('https://c.stocksy.com/a/kvS800/z9/2017836.jpg')`,
  
//   height:'200%',
//   overflow:'auto',

// }}>
//         <CssBaseline />
//         <Box
//           borderRadius="5%"
//           sx={{
//             marginTop: 8,
//             p: 5,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             backgroundColor: "white",
//             border: '3px solid black',
           
//             backgroundColor: "#FFEFD6",
//                       color:"#393E46",
//                       marginLeft:40
      

//           }}
//         >


//           {/* Avatar commented */}
//           {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar> */}



//           <Typography component="h1" variant="h5">
          
//           </Typography>
//           <Box component="form" onSubmit={(e) => login(e)} sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required 
//               fullWidth
//               id="Email"
//               label="Email Address"
//               name="Email"
//               autoComplete="Email"
//               autoFocus
//               // value={artist.Email}
//               onChange={(e) => handleChange(e)}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="Password"
//               label="Password"
//               type="Password"
//               id="Password"
//               autoComplete="current-password"
//               onChange={(e) => handleChange(e)}
//               // value={artist.Password}
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               // onClick={(e) => login(e)}
//               // disabled={!artist.Email || !artist.Password}
//             >
//               Sign In
//             </Button>
//             <Grid container sx={{ mt: 2, mb: 2, p: 1 }}>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   {"  Forgot password?"}
//                 </Link>
//               </Grid>
//               <Grid item  >
//                 <Link href="/artregister" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>

//       </Grid>
//     </ThemeProvider>

  
//   )
// }

// export default ArtistLogin;


import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { Button, CssBaseline, TextField, Link, Grid, Box, Typography } from '@mui/material'


const theme = createTheme();



const User_login = () => {

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
      const result = await fetch("http://localhost:4000/userLogin", {
        method: 'GET'
      }).then((response) => response.json()).then((actualData) => {
        console.log(actualData);
        actualData && actualData.map((obj) => {
          if (obj.Email === lemail && obj.Password === lpassword) {
            alert("loged in successfully")
            found = true;
            navigate("/userdashboard")
           
          }
        })
        if (found != true) {
          alert("Invalid Email or password");
        }

      })
        .catch((err) => console.log(err))
      console.log("in");

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
            <b> User Login</b>
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
                <Link href="http://localhost:3000/userregistration" variant="body2">
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

export default  User_login ;






