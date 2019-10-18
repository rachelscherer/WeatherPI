import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./weathermodule.css";

//Set the width and height of the map
const mapStyles = {
  width: "40vh",
  height: "40vh"
};

class Weathermodule extends Component {
  render() {
    return (
      <div className="weatherModule">
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{ lat: 34.058984, lng: -117.81954 }}
        />
        <p>Test</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBD23oGZK3873DBTOKGNfLz80hQCE9G_w4"
})(Weathermodule);
