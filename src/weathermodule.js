import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Container, Row, Col } from "react-bootstrap";
import "./weathermodule.css";

//Set the default width and height of the map
let mapStyles = { width: 395, height: 395 };

//Set smallMap to false when the page loads
class Weathermodule extends Component {
  constructor() {
    super();
    this.state = { smallMap: false};
  }

  //If the viewport width < 992px, set "smallMap" to true and change the mapStyles element to true.
  componentDidMount() {
    window.addEventListener("resize", () => {
      const smallWindow = window.innerWidth < 992;
      if (smallWindow === true) {
        this.setState({ smallMap: true });
        mapStyles = { width: 300, height: 300 };
      } else {
        this.setState({ smallMap: false });
        mapStyles = { width: 395, height: 395 };
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  render() {
    return (
      <div className="weatherModule">
        <Container>
          <Row>
            <Col lg={(12, { order: 2 })} xl={(6, { order: 2 })}>
              <h2>Readings</h2>
              <br />
              <p className="stats">Temperature: xxxxxx</p>
              <p className="stats">Humidity: xxxxxx</p>
              <p className="stats">Wind Speed: xxxxxx</p>
              <p className="stats">Stat 4: xxxxxx</p>
              <p className="stats">Stat 5: xxxxxx</p>
              <p className="stats">Stat 6: xxxxxx</p>
            </Col>
            <Col lg={(12, { order: 1 })} xl={(6, { order: 1 })}>
              <div className="location">
                <h2>Location</h2>
                <br />
                <div
                  className={
                    this.state.smallMap ? "smallMapContainer" : "mapContainer"
                  }
                >
                  <Map
                    google={this.props.google}
                    zoom={17}
                    style={mapStyles}
                    initialCenter={{ lat: 34.058984, lng: -117.81954 }}
                    disableDefaultUI={true}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

//Oops!
export default GoogleApiWrapper({
  apiKey: ""
})(Weathermodule);
