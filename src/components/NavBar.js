import React,{useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import  {Link} from 'react-router-dom';
import firebase from 'firebase';

import '../styles/navbar.css'

const Navbar = () => {

    const {userDetails,isLoggedIn, updateLogin} = useContext(AuthContext)

    return ( 
        <div id="nav-bar-wrapper">
            <div id="nav-bar">
                <h1 id="app-name">EMS</h1>
                <div id="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/Manage">Manage</Link>
                    {isLoggedIn ? 
                    <div id="profile-wrapper">
                        <div id="profile-details">
                            <img style={{height:"30px",borderRadius: '100px', margin: '10px'}} src={userDetails.profilePhoto}/>
                            <Link to="/Profile">{userDetails.displayName}</Link>
                        </div>
                        <div id="profile-dropdown">
                            {isLoggedIn ? <Link to="/" onClick={() => firebase.auth().signOut().then(() => {
                            updateLogin(false);
                            })}>Log out</Link> : <Link to="/Login">Login</Link>}
                            <Link to="/Profile">Account</Link>
                        </div>
                    </div> :
                    <div id="signup">
                        <Link to="/Login">Login</Link>
                        <Link to="/SignUp">Sign Up</Link>
                    </div>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
