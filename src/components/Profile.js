import React,{useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {TeamContext} from '../contexts/TeamContext';

const Profile = () => {

    const {userDetails} = useContext(AuthContext);
    const {teamDetails} = useContext(TeamContext);

    return(
        <div id="profile">
            <div id="profile-background"></div>
            <div id="account">
                <h1>Welcome, {userDetails.displayName}</h1>
                <div id="account-details">
                    <h2>Username: <span style={{fontWeight: 'bold',color: 'black'}}>{userDetails.displayName}</span></h2>
                    <h2>Email:<span style={{fontWeight: 'bold',color: 'black'}}>{userDetails.email}</span></h2>
                </div>

            </div>

            <div id="team-details">
                {teamDetails.teamName === '' ? <h1>Looks empty, add a team.</h1> : <h1>Here are your team details</h1>}
            </div>
            <div id="add-team" onClick={(el) => (handleAddTeam(),document.getElementById('team-details').classList.toggle('openTeamDetails'))}><h1>Add Team</h1></div>
        </div>
    )
}

function handleAddTeam(){
    //add the new team to the database(firebase real time database)
    console.log("added new team");
}

export default Profile;
