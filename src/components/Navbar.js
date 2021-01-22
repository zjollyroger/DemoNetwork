import React from 'react';
import nav from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
       <nav className={nav.nav}>
           <div>
               <NavLink activeClassName={nav.activeLink} to="/profile">Profile</NavLink>
           </div>
           <div>
               <NavLink activeClassName={nav.activeLink} to="/dialogs">Messages</NavLink>
           </div>
           <div>
               <NavLink activeClassName={nav.activeLink} to="/news">News</NavLink>
           </div>
           <div>
               <NavLink activeClassName={nav.activeLink} to="/music">Music</NavLink>
           </div>
           <div>
               <NavLink activeClassName={nav.activeLink} to="/settings">Settings</NavLink>
           </div>
           <div>
               <NavLink activeClassName={nav.activeLink} to="/friends">Friends</NavLink>
           </div>

       </nav>

    );
}

export default Navbar;