import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Container, Row, Col } from "react-bootstrap";
import "./weathermodule.css";

//Set the width and height of the map
const mapStyles = {
  width: "395px",
  height: "395px",
  margin: "0 0 0 50px"
};

class Weathermodule extends Component {
  render() {
    return (
      <div className="weatherModule">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="location">
                <h2>Location</h2>
                <br />
                <Map
                  google={this.props.google}
                  zoom={17}
                  style={mapStyles}
                  initialCenter={{ lat: 34.058984, lng: -117.81954 }}
                  disableDefaultUI={true}
                />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <h2>Stats</h2>
              <br />
              <p className="stats">Temperature: xxxxxx</p>
              <p className="stats">Humidity: xxxxxx</p>
              <p className="stats">Wind Speed: xxxxxx</p>
              <p className="stats">Stat 4: xxxxxx</p>
              <p className="stats">Stat 5: xxxxxx</p>
              <p className="stats">Stat 6: xxxxxx</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBD23oGZK3873DBTOKGNfLz80hQCE9G_w4"
})(Weathermodule);
