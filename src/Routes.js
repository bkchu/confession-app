import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Page from './pages/page/page';
import Error from './pages/error/error';

class Routes extends Component {
  render() {
    return (
      <div style={{ paddingTop: '5.625rem', backgroundColor: 'white' }}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/part/:part/page/:page" component={Page} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
