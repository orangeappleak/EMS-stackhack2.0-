import React,{useContext,useEffect} from 'react';

//various style sheets for all the components.
import './styles/global.css';

//various components used through out the app.
import Login from './components/login'
import MainHome from './components/MainHome';
import NavBar from './components/NavBar';

//state managements using contexts imported from the contexts folder.
import AuthContextProvider from './contexts/AuthContext';
import firebaseInit from './contexts/firebase';

//react router for navigation through various links.
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  firebaseInit();

  return (
    <AuthContextProvider>
      <Router>
        <NavBar />
        <div id="app">
        </div>
        <Switch>
          <Route exact path="/">
            <MainHome />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
   
  );
}

export default App;
