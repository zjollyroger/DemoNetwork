import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.css';
import Navbar from "./components/Navbar";
import a from './App.module.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setting";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/HeaderContainer";


const App = (props) => {
    return (
        <Router>
            <div>

                <HeaderContainer/>
                <div className={a.content}>
                    <Navbar/>

                    <Route path='/profile/:userId?' render={()=><ProfileContainer/> } />
                    <Route exact path='/dialogs' render={()=><DialogsContainer/> } />
                    <Route path='/news'><News/></Route>
                    <Route path='/music'><Music/></Route>
                    <Route path='/settings'><Settings/></Route>
                    <Route path='/friends' render={()=><Friends/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>

                </div>

            </div>
        </Router>
    );
}


export default App;