import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import DashBoard from './pages/DashBoard/DashBoard';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/dashboard" component={DashBoard} />
  </Switch>
);