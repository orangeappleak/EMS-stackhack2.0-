import '../styles/login.css';

import React,{useContext,useEffect} from 'react';


import firebase from 'firebase';
import firebaseInit from '../contexts/firebase';
import {AuthContext} from '../contexts/AuthContext';

export default function Login(){

    const {isLoggedIn, userDetails, updateLogin} = useContext(AuthContext);


    return(
        <div id="login">
            <h1>Please login in to explore more</h1>
            <div id="username">
                <div id="username_wrapper">
                    <h1>Username</h1>
                    <input id="username_input"></input>
                </div>
            </div>
            <div id="password">
                <div id="password_wrapper">
                    <h1>Password</h1>
                    <input id="password_input"></input>
                </div>
            </div>

            <div id="google_login"></div>
            {/* <h1>Current login status: {isLoggedIn.toString()}</h1>
            <h1>Currently logged in user: {userDetails.displayName}</h1> */}
        </div>
    )
}