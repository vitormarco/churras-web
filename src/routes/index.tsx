import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import Appointments from '../pages/Appointments';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/appointments" component={Appointments} isPrivate />
  </Switch>
);

export default Routes;
