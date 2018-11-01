import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import firebase from 'firebase';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import * as serviceWorker from './serviceWorker';

//firebase config
let firebaseConfig = {
  apiKey: "AIzaSyDIYwP9d9jQ-HQWDwdtAM_yfyy5urhkrfU",
  authDomain: "a-chat-web-app-1512371.firebaseapp.com",
  databaseURL: "https://a-chat-web-app-1512371.firebaseio.com",
  projectId: "a-chat-web-app-1512371",
  storageBucket: "a-chat-web-app-1512371.appspot.com",
  messagingSenderId: "435828555837"
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// react-redux-firebase config
const rrfConfig = {

}


let store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument(getFirebase)),
  reactReduxFirebase(firebase, rrfConfig)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
