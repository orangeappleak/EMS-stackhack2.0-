import React,{useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';

export default function MainHome(){

    const { userDetails } = useContext(AuthContext);
    return(
        <div id="main-page">
            <h1>This is the main page of the web app.</h1>
            <h1>The current logged in user is: {userDetails.displayName}</h1>
        </div>
    )
}