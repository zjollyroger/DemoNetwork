import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {addPost} from "./redux/state";
import {typingNewPost} from "./redux/state";

export let rerender = (state) => {
    ReactDOM.render(<App posts={state.profilePage.posts} addPost = {addPost} typingNewPost = {typingNewPost}
                         typingValue = {state.profilePage.newPost}
                         dialogs={state.messagesPage.dialogs}
                         messages={state.messagesPage.messages} friendsData={state.friendsPage.friends}/>, document.getElementById('root'));
};


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
