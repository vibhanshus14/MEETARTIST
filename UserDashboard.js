
// import React ,{useEffect} from 'react'
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { useState } from 'react';
// import Button from '@mui/material/Button';
//  import { Grid } from '@mui/material';
// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

// export default function () {
//     const[data,setData]=useState(null)
//   useEffect(()=>{

//     fetch("http://localhost:4000/showNewPost",
//     {
//         method:'GET'
//     }).then((response)=>response.json()).then((actualData)=>
//     {
//         console.log(actualData);
//         setData (actualData)
//     })
//     .catch((err)=>console.log(err))
// },[])
//     return (
//         <div>
//              <Grid container spacing={0.5}>
//                 <Grid item xs={0}  >
//                     <Grid container justifyContent="center" >

//                         {data && data.map((value) => (
//                             <Grid key={value.testName} item>
//                                 <Card sx={{ maxWidth: 900, flexDirection: "column", justifyContent: 'space-between' }}>
//                                     <CardContent>
//                                         <Typography variant="h5" component="div">
//                                             {value.testName}
//                                         </Typography>
//                                         <Typography variant="body2">
//                                            {value.testDescription}
//                                         </Typography>
//                                         <Typography variant="h6" component="div">
//                                              Price:{value.price}
//                                         </Typography>
//                                     </CardContent>
//                                     <CardActions>
//                                         <Button size="small">Book Now</Button>
//                                     </CardActions>
//                                 </Card>
//                              </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }

import React from "react";
// import { BrowserRouter , Link} from "react-router-dom";
// 
import { Button, CssBaseline, TextField, Link, Grid, Box, Typography } from '@mui/material'
import  "../Artist/ArtistDashboard.css"
import ShowPost from "../Artist/ShowPost";
import AddPost from "../Artist/AddPost";
function UserDashboard(props) {
    return (
      <div class="UserDashboard">
        
        
            {/* <Grid container sx={{ mt: 2, mb: 2, p: 1 }}>
              <Grid item xs>
                <Link href="/addpost" variant="body2">
                  {" ADD NEW POST"}
                </Link>
              </Grid> */}
              <Grid item  >
                <Link href="/post" variant="body2">
                  {"SHOW POST"}
                </Link>
                </Grid>
            
      </div>
  );
}

UserDashboard.propTypes = {};

export default UserDashboard;