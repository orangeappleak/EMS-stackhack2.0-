import React,{useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import firebase from 'firebase';

import '../styles/navbar.css'

const Navbar = () => {

    const {userDetails,isLoggedIn, updateLogin} = useContext(AuthContext)

    return ( 
        <div id="nav-bar">
            <img style={{height:"100%",borderRadius: '100px', margin: '20px'}} alt="" src={userDetails.profilePhoto}/>
            <h1 id="app-name">Currently logged in as: {userDetails.displayName}</h1>
            <div id="nav-links">
                <a href="/">Home</a>
                <a href="/Profile">Profile</a>
                {isLoggedIn ? <a href="/" onClick={() => firebase.auth().signOut().then(() => {
                    updateLogin(false);
                })}>Log out</a> : <a href="/Login">Login</a>}
            </div>
        </div>
     );
}
 
export default Navbar;