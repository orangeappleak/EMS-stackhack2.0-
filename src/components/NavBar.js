import React from 'react';
import '../styles/navbar.css'

const Navbar = () => {
    return ( 
        <div id="nav-bar">
            <h1 id="app-name">Name</h1>
            <div id="nav-links">
                <h1>HOME</h1>
                <h1>PROFILE</h1>
                <h1>LOGIN</h1>
            </div>
        </div>
     );
}
 
export default Navbar;