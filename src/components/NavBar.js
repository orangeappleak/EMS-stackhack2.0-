import React,{useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import firebase from 'firebase';

import '../styles/navbar.css'

const Navbar = () => {

    const {userDetails,isLoggedIn, updateLogin} = useContext(AuthContext)

    return ( 
        <div id="nav-bar">
            <h1 id="app-name">Currently logged in as: {userDetails.displayName}</h1>
            <div id="nav-links">
                <a href="/">Home</a>
                <a href="/Profile">Profile</a>
                {isLoggedIn ? <h1 onClick={() => firebase.auth().signOut().then(() => {
                    updateLogin(false);
                })}>Log out</h1> : <a href="/Login">Login</a>}
            </div>
        </div>
     );
}
 
export default Navbar;