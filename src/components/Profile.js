import React,{useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {TeamContext} from '../contexts/TeamContext';
import firebase from 'firebase';

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
            <div id='team-details-wrapper'>
                {console.log(teamDetails.teams.length)}
                {teamDetails.teams.length === 0 ? <h1>Looks empty, add some teams to display them here.</h1> :  <h1>Here are your teams.</h1>}
                <div id="team-details">
                    {teamDetails.teams.map((el,index) => (
                        <div key={index} id="team" className="team">
                            <h1>{el.teamName}</h1>
                            <hr style={{width: '100%'}}></hr>
                            <h2><span id="bold">Team Manager: </span>{el.teamManager}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div id="add-new-team">
                <h1>Enter the following details.</h1>
                <input placeholder="Team Name" id="teamName"></input>
                <input placeholder="Team Manager" id="teamManager"></input>
                <input placeholder="Team Head" id="teamHead"></input>
                <input placeholder="Total Team Members" id="totalTeamMembers"></input>
                <button type="submit" onClick={() => submitTeam()}>Create</button>
            </div>

            <div id="add-team" onClick={(el) => (handleAddTeam())}><h1>Add Team</h1></div>
        </div>
    )
}

function handleAddTeam(){
    //add the new team to the database(firebase real time database)
    document.getElementById('add-new-team').classList.toggle('open')
}

function submitTeam(){
    var team_name = document.getElementById('teamName').value;
    var team_manager = document.getElementById('teamManager').value;
    var team_head = document.getElementById('teamHead').value;
    var tt_team_members = document.getElementById('totalTeamMembers').value;

    firebase.firestore().collection('Teams').doc(firebase.auth().currentUser.displayName).collection('addedTeams').doc(team_name).set({
        teamName: team_name,
        teamManager: team_manager,
        teamHead: team_head,
        totalTeamMembers: tt_team_members
    })

}

export default Profile;
