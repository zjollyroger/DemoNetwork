import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, withRouter} from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import a from './App.module.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setting";
import Friends from "./components/Friends/Friends";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {InitializeAppThunk} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

// lazy loading
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";

// No need in this HOC in new version of React,
// we can wrap all Routers by <React.Suspense/>, so
//import {WithSuspenseWrap} from "./components/hoc/withSuspenseWrap";


/*
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
                    <Route path='/login' render={()=><LoginContainer/>}/>
                </div>
            </div>
        </Router>
    );
}*/

class App extends React.Component {

    componentDidMount() {
        this.props.InitializeAppThunk();
    }

    render() {

        if (!this.props.initSuccess) return <Preloader/>

        return (
            <React.Suspense fallback={Preloader}>
                <Router>
                    <div>
                        <HeaderContainer/>
                        <div className={a.content}>
                            <Navbar/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/news'><News/></Route>
                            <Route path='/music'><Music/></Route>
                            <Route path='/settings'><Settings/></Route>
                            <Route path='/friends' render={() => <Friends/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginContainer/>}/>
                        </div>
                    </div>
                </Router>
            </React.Suspense>
        );
    }
}

const mapStateToProps = (state) => ({
    initSuccess: state.app.initSuccess,
});

export default withRouter(connect(mapStateToProps, {InitializeAppThunk})(App));