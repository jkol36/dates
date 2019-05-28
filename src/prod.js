import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore.prod';
import createRoutes from './routes'

import Root from './containers/root'


const store = configureStore();
const routes = createRoutes()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <div>
    <Root history={history} routes={routes} store={store}/>
  </div>,
  document.getElementById('root')
);