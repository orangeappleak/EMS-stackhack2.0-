import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwRfkeMiWVnSIlQwglsOo5oG-TAlwp4xo",
    authDomain: "stackhack2.firebaseapp.com",
    databaseURL: "https://stackhack2-default-rtdb.firebaseio.com",
    projectId: "stackhack2",
    storageBucket: "stackhack2.appspot.com",
    messagingSenderId: "500031398666",
    appId: "1:500031398666:web:9b4a4889506d61e6d310f3"
  };

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl)=>{
            console.log("sign in was a success,authresult = ",authResult);
            return true;
        }
    },
    signInFlow: 'popup',
    signInSuccessurl: '/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
}

var firebaseui = require('firebaseui')
var ui

const firebase_config = firebaseConfig;
const ui_config = uiConfig;

//checking if the firebase app is already initialized or not.
if(!firebase.apps.length){
    firebase.initializeApp(firebase_config);
}
else{
    firebase.app();
}


//checking if an instance of firebase ui already exists or not
//if it does we just use that instance
//else we create a new firebase ui instance.
if(firebaseui.auth.AuthUI.getInstance()){
    ui = firebaseui.auth.AuthUI.getInstance();
    ui.start("#google_login",ui_config);
}
else{
    ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#google_login",ui_config);
}
