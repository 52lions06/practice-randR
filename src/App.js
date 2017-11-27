import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Building a React + Redux App</h1>
        </header>
        <div className="Todo-App">
          <form action="#">
            <input type="text"/>
            <div className="Todo-List">
              <ul>
                <li>
                  <input type="checkbox"/> Create a Static UI
                </li>
                <li>
                  <input type="checkbox"/> Create an Initial State
                </li>
                <li>
                  <input type="checkbox"/> Use state to render UI
                </li>
              </ul>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
