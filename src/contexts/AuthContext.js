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
                        email: user.email
                    }
                });
            }
            else{
                this.updateLoginStats(false);
                console.log("user not found");
            }
        });
        console.log("new user is = ",this.state.userDetails)
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