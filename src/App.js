import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

import BibleVerseFromText from './services/verse-parser';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          <BibleVerseFromText>
            hello world 2 Corinthians 13:4, John 3:16-17, John 15:3-5 aweofij a
            sdf we 35 sdf sdf sd Genesis 1:1
          </BibleVerseFromText>
        </p>
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
