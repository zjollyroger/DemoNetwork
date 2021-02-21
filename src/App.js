import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Profile from "./components/Profile/Profile";
import a from './App.module.css';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setting";
import Friends from "./components/Friends/Friends";


const App = (props) => {
    return (
        <Router>
            <div>

                <Header/>
                <div className={a.content}>
                    <Navbar/>
                    {/*<Profile/>*/}


                    <Route path='/profile' render={()=><Profile posts={props.state.profilePage.posts}
                                                                dispatch = {props.dispatch}
                                                                typingValue={props.state.profilePage.newPost}/>}/>
                    <Route exact path='/dialogs' render={()=><Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} />}/>
                    <Route path='/news'><News/></Route>
                    <Route path='/music'><Music/></Route>
                    <Route path='/settings'><Settings/></Route>
                    <Route path='/friends' render={()=><Friends friendsData={props.state.friendsPage.friends}/>}/>

                </div>

            </div>
        </Router>
    );
}


export default App;