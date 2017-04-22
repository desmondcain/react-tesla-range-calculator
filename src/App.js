import React, { Component } from 'react';
import TeslaRange from './components/TeslaRange';
import reactLogo from './images/logo-react.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={reactLogo} className="app-logo" alt="React Logo" />
          <h1>React Tesla Range Calculator</h1>
        </div>

        <TeslaRange />
      </div>
    );
  }
}

export default App;
