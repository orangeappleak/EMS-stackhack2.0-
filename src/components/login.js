import React,{useContext,useEffect} from 'react';
import firebase from 'firebase';
import firebaseInit from '../contexts/firebase';
import {AuthContext} from '../contexts/AuthContext';

export default function Login(){

    firebaseInit();

    const {isLoggedIn, userDetails, updateUser, updateLogin} = useContext(AuthContext);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
                console.log(user);
                updateLogin(true)
                updateUser(user.displayName,user.email);
            }
            else{
                console.log("no user signed in currently");
                updateLogin(false);
            }
        })
    },[]);

    return(
        <div id="login">
            <h1>This is where you login</h1>
            <h1>Current login status: {isLoggedIn.toString()}</h1>
            <h1>Currently logged in user: {userDetails.displayName}</h1>
            <button onClick = {() => (alert("login using google pls"))}>LOGIN</button>
            <button onClick={() => firebase.auth().signOut().then(updateUser('',''),console.log("signed out successfully"))}>LOGOUT</button>
        </div>
    )
}