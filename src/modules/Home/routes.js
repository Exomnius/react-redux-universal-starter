import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Module from './Module';
import Home from './Home/Home';
import About from './About/About';

export default (
  <Route component={Module}>
    <IndexRoute component={Home} />
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Route>
);
