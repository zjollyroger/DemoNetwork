import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./redux/reduxStore";

 let rerender = () => {
    ReactDOM.render(<App store={store} state={store.getState()}  dispatch = {store.dispatch.bind(store)} />,
        document.getElementById('root'));
};

rerender();

store.subscribe(rerender);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
