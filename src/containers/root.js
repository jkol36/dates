import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

const Root = ({ store, routes, history, DevTools }) => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default Root;