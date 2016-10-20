import React from 'react';
import { Route } from 'react-router';
import Module from './Module';
import Links from './Links';

export default (
  <Route component={Module}>
    <Route path="/links" component={Links} />
  </Route>
);
