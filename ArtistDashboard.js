import React from "react";
// import { BrowserRouter , Link} from "react-router-dom";
// 
import { Button, CssBaseline, TextField, Link, Grid, Box, Typography } from '@mui/material'


// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import  "../Artist/ArtistDashboard.css"
import ShowPost from "../Artist/ShowPost";
import AddPost from "../Artist/AddPost";
function ArtistDashboard(props) {
    return (
      <div class="ArtistDashboard">
        
        

        
            <Grid container sx={{ mt: 2, mb: 2, p: 1 }}>
              <Grid item xs>
                <Link href="/addpost" variant="body2">
                  {" ADD NEW POST"}
                </Link>
              </Grid>
              <Grid item  >
                <Link href="/post" variant="body2">
                  {"SHOW POST"}
                </Link>
                </Grid>
            </Grid>
      </div>
  );
}

ArtistDashboard.propTypes = {};

export default ArtistDashboard;