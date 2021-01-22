import React,{useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {TeamContext} from '../contexts/TeamContext';
import firebase from 'firebase';
import { useTrail,a } from 'react-spring';


function Trail({children}){
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        opacity: 1,
        y: 0,
        from: {opacity: 0,y:-20}
    })

    return(
        <div id='team-details'>
            {trail.map(({y,opacity},index) => (
                <a.div 
                key={index}
                className="team"
                style={{transform: y.interpolate((y) => `translateY(${y}%)`),opacity: opacity.interpolate((o)=>`${o}`)}}
                >{items[index]}</a.div>
            ))}
        </div>
    )
}


const Profile = () => {

    const {userDetails} = useContext(AuthContext);
    const {teamDetails,reRender} = useContext(TeamContext);


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
                {teamDetails.teams.length === 0 ? <h1>Looks empty, add some teams to display them here.</h1> :  <h1>Here are your teams.</h1>}
                <Trail>
                    {teamDetails.teams.map((el,index) => (
                        <div key={index} id="team" className="team-card">
                            <div id="delete-team" onClick={(el) => handleDelete(el,reRender)}>
                                <h2>delete</h2>
                                <h1 style={{fontSize: "15px"}}>X</h1>
                            </div>
                            <h1>{el.teamName.toUpperCase()}</h1>
                            <hr style={{width: '100%'}}></hr>
                            <h2><span id="bold">Team Manager: </span>{el.teamManager}</h2>
                            <h2><span id="bold">Team Head: </span>{el.teamHead}</h2>
                            <h2><span id="bold">Total Team Member: </span>{el.totalTeamMembers}</h2>
                        </div>
                    ))}
                </Trail>
            </div>

            <div id="add-new-team">
                <h1>Enter the following details.</h1>
                <input placeholder="Team Name" id="teamName"></input>
                <input placeholder="Team Manager" id="teamManager"></input>
                <input placeholder="Team Head" id="teamHead"></input>
                <input placeholder="Total Team Members" id="totalTeamMembers"></input>
                <button type="submit" onClick={() => submitTeam(reRender)}>Create</button>
            </div>

            <div id="add-team" onClick={(el) => (handleAddTeam())}><h1>Add Team</h1></div>
        </div>
    )
}

function handleAddTeam(){
    //add the new team to the database(firebase real time database)
    document.getElementById('add-new-team').classList.toggle('open')
}

function submitTeam(reRender){
    var team_name = document.getElementById('teamName').value.toUpperCase();
    var team_manager = document.getElementById('teamManager').value;
    var team_head = document.getElementById('teamHead').value;
    var tt_team_members = document.getElementById('totalTeamMembers').value;
    reRender();
    firebase.firestore().collection('Teams').doc(firebase.auth().currentUser.displayName).collection('addedTeams').doc(team_name).set({
        teamName: team_name,
        teamManager: team_manager,
        teamHead: team_head,
        totalTeamMembers: tt_team_members
    })
}

function handleDelete(el,reRender){
    firebase.firestore().collection('Teams').doc(firebase.auth().currentUser.displayName).
        collection('addedTeams').doc(el.target.parentNode.getElementsByTagName('h1')[1].innerHTML).delete().then(() => reRender());
}

export default Profile;
