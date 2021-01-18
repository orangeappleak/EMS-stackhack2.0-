import React,{createContext,Component} from 'react';

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

    updateLoginStats = (loginStatus) => {
        this.setState({isLoggedIn: loginStatus})
    }

    updateUserDetails = (displayName,email) => {
        this.setState({
            userDetails: {
                displayName: displayName,
                email: email
            }
        });
        console.log("new user is = ",this.state.userDetails)
    }

    render(){
        return(
            <AuthContext.Provider value={{
                ...this.state,
                updateUser: this.updateUserDetails,
                updateLogin: this.updateLoginStats
                }}>
                {this.props.children}
            </AuthContext.Provider>
        )

    }
}