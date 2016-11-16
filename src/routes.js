import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
  App,
  Home,
  Info,
  About,
  NotFound
} from 'containers';

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/info" component={Info} />
    <Route path="/about" component={About} />

    {/* Catch all route */}
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
  /* const loadAuthIfNeeded = cb => {
    if (!isAuthLoaded(store.getState())) {
      return store.dispatch(loadAuth()).then(() => cb());
    }
    return cb();
  };
  const checkUser = (cond, replace, cb) => {
    const { auth: { user } } = store.getState();
    if (!cond(user)) replace('/');
    cb();
  };

  const requireNotLogged = (nextState, replace, cb) => {
    const cond = user => !user;
    loadAuthIfNeeded(() => checkUser(cond, replace, cb));
  };
  const requireLogin = (nextState, replace, cb) => {
    const cond = user => !!user;
    loadAuthIfNeeded(() => checkUser(cond, replace, cb));
  }; */
