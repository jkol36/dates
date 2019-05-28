import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import reducers from 'reducers';
import DevTools from 'containers/DevTools';
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory)),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey())
);

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

export default function configureStore(initialState) {
  console.log('configuring store dev')
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducers, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}