import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import createStore
//create store is used to create the store
//import applyMiddleware
//applyMiddleware is used to apply the middleware thunk

import {createStore , applyMiddleware} from 'redux';

//import provider: used to provide store to appComponent
import {Provider} from 'react-redux';

//import reducer
import reducer from './reducer/reducer';

//import thunk Middleware
import thunk from 'redux-thunk';

//create the store object

const store= createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
