import '../styles/login.css';

import React,{useEffect} from 'react';
import firebaseUiInit from '../contexts/firebaseConfig';


export default function Login(){


    useEffect(() => {
        firebaseUiInit();
    }, []);

    return(
        <div id="login-wrapper">
            <div id="login">
                <h1 id="login-heading">Please enter the following details to <span style={{color: 'white',textDecoration: 'underline'}}>Login</span></h1>
                <div id="login-credentials">
                    <div id="username-input">
                        <h1>Username</h1>
                        <input type="text"></input>
                    </div>
                    <div id="password-input">
                        <h1>Password</h1>
                        <input type="password"></input>
                    </div>
                </div>
                <div id="login-button">
                    <h1>Login</h1>
                </div>
                <div id="line">
                    <div id="line1"></div>
                    <h1>or</h1>
                    <div id="line2"></div>
                </div>
                <div id="google_login"></div>
            </div>

            {/* <h1>Current login status: {isLoggedIn.toString()}</h1>
            <h1>Currently logged in user: {userDetails.displayName}</h1> */}
        </div>
    )
}