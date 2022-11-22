import React from "react";
import PropTypes from "prop-types";
// import AddProducts from "../Products/AddProducts";
import "../css/Header.css";
// import DisplayProductDetails from "../Products/DisplayProductDetails";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import "../css/Nav.css";
import ShowPost from "../Artist/ShowPost";
import AddPost from "../Artist/AddPost";
 import ArtistLogin from "../Artist/ArtistLogin"
import Artist_registration from "../Artist/Artist_registration"
import User_login from "../User/User_login"
import User_registration from "../User/User_registration"
import Content from "./Content"
import ArtistDashboard from "../Artist/ArtistDashboard"
import UserDashboard from "../User/UserDashboard"

function Header(props) {
  return (
    <div class="header">
    
    <BrowserRouter>
   
        <ul><li><h1 id="name">Meet Artist</h1></li>
       
     
        
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* <li>
            <Link to="/artistlogin">ArtistLogin</Link>
          </li> */}
            {/* <li>
            <Link to="/artistregistration">Artist_registration</Link>
          </li>    */}
{/* 
          <li>
            <Link to="/userlogin">UserLogin</Link>
          </li> */}
          {/* <li>
            <Link to="/userregistration">Userregistration</Link>
          </li> */}
{/* 
<li>
            <Link to="/post">Show Post</Link>
          </li>

          <li>
          <Link to="/addpost"> Add Post</Link>
          </li> */}

          </ul>

         <Routes>

          <Route path="/" element={<Content/>}>
            {" "}
          </Route>

         

           <Route path="/artistlogin" element={<ArtistLogin/>}>
            {" "}
          </Route> 

           <Route path="/artistregistration" element={<Artist_registration/>}>
            {" "}
            </Route>
 

            <Route path="/userlogin" element={<User_login/>}>
            {" "}
          </Route> 

           <Route path="/userregistration" element={<User_registration/>}>
            {" "}
            </Route>

            <Route path="/artistdashboard" element={<ArtistDashboard />}>
            {" "}
          </Route>

          <Route path="/post" element={<ShowPost />}>
            {" "}
          </Route>

            <Route path="/addpost" element={<AddPost />}>
            {" "}
          </Route>

          <Route path="/userdashboard" element={<ShowPost />}>
            {" "}
          </Route>

         
  
          
         </Routes> 

      </BrowserRouter>
    
      
    </div>
  );
}

Header.propTypes = {};

export default Header;