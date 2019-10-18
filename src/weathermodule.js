import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

//Set the width and height of the map
const mapStyles = {
  width: "40vh",
  height: "40vh"
};

class Weathermodule extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{ lat: 34.058984, lng: -117.81954 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBD23oGZK3873DBTOKGNfLz80hQCE9G_w4"
})(Weathermodule);
