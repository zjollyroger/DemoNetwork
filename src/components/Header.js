import React from 'react';
import h from './Header.module.css' ;
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={h.header}>
            <div>
                <img className={h.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Radio.svg/1200px-Radio.svg.png" alt=""/>
                <div className={h.login}>
                    {(props.isAuth) ? props.login :  <NavLink to={'login'}>Login</NavLink>}
                </div>
            </div>

            <div className={h.menu}>
                <div><a href='#s'>Home</a></div>
                <div><a href='#s'>News</a></div>
                <div><a href='#s'>Feed</a></div>
                <div><a href='#s'>Messages</a></div>

                {/*<a href='#s'>News </a>*/}
                {/*<a href='#s'>Feed</a>*/}
                {/*<a href='#s'>Messages</a>*/}
            </div>

        </header>
    );
}

export default Header;