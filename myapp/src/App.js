import React, { Component } from 'react';
import Router from './Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router />
        </header>
      </div>
    );
  }
}

export default App;
