import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ChatRoom, Settings } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ChatRoom} />
    <Route path="/settings" component={Settings} />
  </Switch>
);

export default Routes;