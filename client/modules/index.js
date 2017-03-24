import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import getRoutes from '../config/reducers';
import rootReducer from './reducers';
import { AUTH_USER } from './actions/types';
import './home/style.css'; // importing css so webpack knows that its a dependency

const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes} />
  </Provider>
  , document.getElementById('.container'));
