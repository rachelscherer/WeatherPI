import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weathermodule from "./weathermodule";
import Amplify, { API } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

let apiName = 'sampleCloudApi';
let path = '/test';

class App extends Component {

  componentDidMount(){
    API.get(apiName, path).then(response => {
      console.log(response)
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="backgroundGradient" />
        <div className="App">
          <Container>
            <h2 className="header">Welcome to WeatherPi</h2>
            <hr />
            <br />
            <Weathermodule />
            <p>
              Learn more about the developers <a href="#">here.</a>
            </p>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
