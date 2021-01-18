import firebase from 'firebase';
import {firebaseConfig,uiConfig} from './firebaseConfig';

export default function firebaseInit(){

    var firebaseui = require('firebaseui')

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
        var ui = firebaseui.auth.AuthUI.getInstance();
        ui.start("#login",ui_config);
    }
    else{
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#login",ui_config);
    }

}