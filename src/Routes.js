import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Header} />
      </Switch>
    );
  }
}

export default Routes;
