import React,{createContext,useState,useEffect} from 'react';
import firebase from 'firebase';
import {AuthContext} from './AuthContext';
// import firebase from 'firebase';

const firestore = firebase.firestore();

export const TeamContext = createContext();

const TeamContextProvider = (props) => {

    const [teamDetails, updateTeamDetails] = useState({
        teams:[]
    });
    

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
                firestore.collection('Teams').doc(user.displayName.toString()).collection('addedTeams').get().then((data) => {
                    data.forEach((el,index) => {
                        updateTeamDetails((prevState) => ({teams:[...prevState.teams,el.data()]}))
                    })
                })
            }
            else{
                updateTeamDetails({teams: []})
            }
        })
        
    },[]);

    return(
        <TeamContext.Provider value = {{teamDetails,updateTeamDetails}}>
            {props.children}
        </TeamContext.Provider>
    )
}

export default TeamContextProvider;