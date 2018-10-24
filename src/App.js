import React, { Component, Fragment } from 'react';

import Routes from './Routes';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import './app.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Sidebar />
        <Routes />
      </Fragment>
    );
  }
}

export default App;
