import React,{useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';

export default function MainHome(){

    const { userDetails } = useContext(AuthContext);
    return(
        <div id="main-page">
            <div id="employees-illustration">
                <img src="https://assets.website-files.com/5bff8886c3964a992e90d465/5c00621b7aefa4f9ee0f4303_wide-shot.svg"></img>
            </div>
            <div id="main-page-heading">
                <h1>Its easier to manage your teams and employees now.</h1>
            </div>
            <div id="main-page-details">
                <h1>This is where the word changes.</h1>
            </div>
            <div id="new-div">
                <h1>This is a new div.</h1>
            </div>

        </div>
    )
}