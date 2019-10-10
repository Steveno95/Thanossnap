import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  reload() {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <img src={logo} className="App-logo" alt="logo" />
          <button id="start-btn">Snap!</button>
        </div>
        <div className="outside-content">
          <button onClick={this.reload} id="start-btn">reload</button>
        </div>
      </div>
    );
  }
}

export default App;
