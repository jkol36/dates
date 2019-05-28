import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory)),
);


export default function configureStore(initialState) {
  console.log('configuring store prod')
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducers, initialState, enhancer);
  return store;
}