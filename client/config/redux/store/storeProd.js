import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const storeProd = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

export default storeProd;
