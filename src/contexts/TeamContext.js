import React,{createContext,useState} from 'react';
// import firebase from 'firebase';

export const TeamContext = createContext();

const TeamContextProvider = (props) => {
    const [teamDetails, updateTeamDetails] = useState({
        teamName: '',
        teamHead: '',
        teamManager: '',
        totalTeamMembers: '',
    });

    return(
        <TeamContext.Provider value = {{teamDetails,updateTeamDetails}}>
            {props.children}
        </TeamContext.Provider>
    )
}

export default TeamContextProvider;