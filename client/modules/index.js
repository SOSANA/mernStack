import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from '../config/redux/store';
import routes from './routes';
import { loadPosts } from './home/actions';
import './home/styles.css';

const store = configureStore();
store.dispatch(loadPosts());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('container')
);

