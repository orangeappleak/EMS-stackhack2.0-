import React,{createContext,Component} from 'react';
import firebase from 'firebase';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component{
    
    state = {
        isLoggedIn: false,
        userDetails: {
            userName: 'Karthik',
            displayName: '',
            email: '',
            profilePhoto: ''
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
                this.setState({
                    isLoggedIn: true,
                    userDetails: {
                        displayName: user.displayName,
                        email: user.email,
                        profilePhoto: user.photoURL
                    }
                });
            }
            else{
                this.setState({
                    isLoggedIn: false,
                    userDetails: {
                        displayName: '',
                        email: '',
                        profilePhoto: ''
                    }   
                });
                console.log("user not found");
            }
        });
    }

    updateLoginStats = (loginStatus) => {
        this.setState({isLoggedIn: loginStatus})
    }

    render(){
        return(
            <AuthContext.Provider value={{
                ...this.state,
                updateLogin: this.updateLoginStats
                }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}