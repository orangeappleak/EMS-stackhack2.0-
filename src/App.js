import React from 'react';

//various style sheets for all the components.
import './styles/global.css';
import './styles/mainHome.css';
import './styles/profile.css';

//various components used through out the app.
import Login from './components/login'
import MainHome from './components/MainHome';
import NavBar from './components/NavBar';
import Management from './components/Management';
import Profile from './components/Profile';

//state managements using contexts imported from the contexts folder.
import AuthContextProvider from './contexts/AuthContext';
import TeamContextProvider from './contexts/TeamContext';
import './contexts/firebaseConfig';

//react router for navigation through various links.
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MainHome />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Manage">
            <Management />
          </Route>
          <Route exact path="/Profile">
            <TeamContextProvider>
              <Profile />
            </TeamContextProvider>
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
   
  );
}

export default App;
