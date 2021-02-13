import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';

const Routes = () => {
  return (
    <Switch> 
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/contact' component={Contact}></Route>
    </Switch>
  );
}

export default Routes;