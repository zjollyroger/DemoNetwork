import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./redux/state";

 let rerender = () => {
    ReactDOM.render(<App  state={store.getState()}
                          addPost = {store.addPost.bind(store)}
                          typingNewPost = {store.typingNewPost.bind(store)}
                          typingValue = {store.getState().profilePage.newPost}
        />,
        document.getElementById('root'));
};

rerender(state);

store.subscribe(rerender);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
