import React,{createContext,Component,useState,useEffect} from 'react';
import firebase from 'firebase';

export const AuthContext = createContext();


const AuthContextProvider = (props) => {
    const[isLoggedIn, updateLogin] = useState(false);
    const[userDetails,updateUserDetails] = useState({
        username: '',
        displayName: '',
        email: '',
        profilePhoto: ''
    });

    var user = firebase.auth().currentUser;

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
                updateLogin(true);
                console.log(isLoggedIn);
                firebase.firestore().collection('Teams').doc(user.displayName.toString()).set({});
                console.log("The current logged in user = ",user);
                updateUserDetails({
                    displayName: user.displayName,
                    email: user.email,
                    profilePhoto: user.photoURL
                })
            }
            else{
                updateLogin(false);
                updateUserDetails({
                    displayName: '',
                    email: '',
                    profilePhoto: ''
                })
            }
        })
    },[])

    return(
        <AuthContext.Provider value={{isLoggedIn,userDetails,updateLogin}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

// export default class AuthContextProvider extends Component{
    
//     state = {
//         isLoggedIn: false,
//         userDetails: {
//             userName: 'Karthik',
//             displayName: '',
//             email: '',
//             profilePhoto: ''
//         }
//     }

//     componentDidMount(){
//         console.log("component")
//         firebase.auth().onAuthStateChanged(async (user) => {
//             if(user){
//                 this.setState({
//                     isLoggedIn: true,
//                     userDetails: {
//                         displayName: user.displayName,
//                         email: user.email,
//                         profilePhoto: user.photoURL
//                     }
//                 });
//             }
//             else{
//                 this.setState({
//                     isLoggedIn: false,
//                     userDetails: {
//                         displayName: '',
//                         email: '',
//                         profilePhoto: ''
//                     }   
//                 });
//                 console.log("user not found");
//             }
//         });
//     }

//     updateLoginStats = (loginStatus) => {
//         this.setState({isLoggedIn: loginStatus})
//     }

//     render(){
        
//     }
// }