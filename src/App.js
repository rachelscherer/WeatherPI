import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { weathermodule } from './weathermodule'

class App extends Component {
  render(){
    return (
      <div className="App">
        <br />
        <br />
        <h2>Welcome to weatherpi :)</h2>
        <Router>
          <weathermodule />
        </Router>
      </div>
    );
  }
}

export default App;