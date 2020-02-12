import React from 'react';
import Login from './navbar/login';
import Logo from './navbar/logo';
import './navbar/style.css';

const Navbar = () =>{
    return(
        <div className='nav'>
            <Logo/>
            <Login/>
        </div>
    )
}
 export default Navbar;