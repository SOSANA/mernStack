import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import getRoutes from '../config/reducers';
import rootReducer from './reducers';
import { AUTH_USER } from './actions/types';
import '../../modules/home/style.css'; // importing css so webpack knows that its a dependency

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes} />
  </Provider>
  , document.getElementById('.container'));
