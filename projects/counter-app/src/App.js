import React, { Component, Fragment } from 'react';

import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <Fragment>
        <Navbar />
        <main>
          <Counters />
        </main>
      </Fragment>
    );
  }
}

export default App;
