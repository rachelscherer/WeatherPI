import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weathermodule from './weathermodule'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Welcome to WeatherPi :)</h2>
          <hr />
          <Weathermodule />
        </Container>
      </div>
    );
  }
}

export default App;