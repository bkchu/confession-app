import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronRight,
  faChevronLeft,
  faLongArrowAltUp
} from '@fortawesome/free-solid-svg-icons';

import Routes from './routes/Routes';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import './app.scss';

library.add([faChevronLeft, faChevronRight, faLongArrowAltUp]);
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
