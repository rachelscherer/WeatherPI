import React, { Component } from 'react';
import { Map, mapStyles, GoogleApiWrapper } from 'google-maps-react';

class Weathermodule extends Component {
    render() {
        return (
            <div>
                <p>This is the weather module</p>
                <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
            </div>
        );
    }
}
{/*
export default GoogleApiWrapper({
    apiKey: 'AIzaSyA6eUcJv6lgP5Q96Wu6fSOhv36BbfzGOSU'
  })(MapContainer);
  */}
export default Weathermodule;