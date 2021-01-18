import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwRfkeMiWVnSIlQwglsOo5oG-TAlwp4xo",
    authDomain: "stackhack2.firebaseapp.com",
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

export {firebaseConfig,uiConfig};