import React, { Component } from 'react';
import Router from './Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Austin Young</h1>
          <h2>literally all of my art</h2>
        </header>
        <Router />
        <footer>
          <span>&copy;2019</span><div className="bullet" />
          <span>Younggraphix LLC</span><div className="bullet" />
          <span>Built by Austin Young</span>
        </footer>
      </div>
    );
  }
}

export default App;
