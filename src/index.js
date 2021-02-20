import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, typingNewPost} from "./redux/state";

 let rerender = () => {
    ReactDOM.render(<App posts={state.profilePage.posts} addPost = {addPost} typingNewPost = {typingNewPost}
                         typingValue = {state.profilePage.newPost}
                         dialogs={state.messagesPage.dialogs}
                         messages={state.messagesPage.messages} friendsData={state.friendsPage.friends}/>, document.getElementById('root'));
};

rerender(state);

subscribe(rerender);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
