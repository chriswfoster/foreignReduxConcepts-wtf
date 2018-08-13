import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import Other from './Other/Other';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Main />
        <Other />
      </div>
    );
  }
}

export default App;
