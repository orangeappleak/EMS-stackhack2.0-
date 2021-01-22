import React,{createContext,useState,useEffect} from 'react';
import firebase from 'firebase';
import {AuthContext} from './AuthContext';
// import firebase from 'firebase';

const firestore = firebase.firestore();

export const TeamContext = createContext();

const TeamContextProvider = (props) => {

    const [reRender, updateReRender] = useState(false);

    const [teamDetails, updateTeamDetails] = useState({
        teams:[]
    });

    const updateTeams = () => {
        updateTeamDetails({teams: []})
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
                firestore.collection('Teams').doc(user.displayName.toString()).collection('addedTeams').get().then((data) => {
                    data.forEach((el) => {
                        updateTeamDetails((prevState) => ({teams:[...prevState.teams,el.data()]}))
                    })
                })
            }
            else{
                updateTeamDetails({teams: []})
            }
        })
    }
    

    useEffect(() => {
        updateTeams();
    },[reRender]);

    const renderAgain = () => {
        updateTeams();
    }

    return(
        <TeamContext.Provider value = {{reRender:renderAgain,teamDetails,updateTeamDetails}}>
            {props.children}
        </TeamContext.Provider>
    )
}

export default TeamContextProvider;