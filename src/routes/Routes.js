import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './routes.module.scss';
import Landing from '../pages/landing/landing';
import Page from '../pages/page/page';
import Error from '../pages/error/error';

class Routes extends Component {
  render() {
    return (
      <div className={styles['routes']}>
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
