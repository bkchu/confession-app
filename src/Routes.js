import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Page from './pages/page/page';

class Routes extends Component {
  render() {
    return (
      <div style={{ paddingTop: '5.625rem' }}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/part/:part/page/:page" component={Page} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
