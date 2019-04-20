import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const MyMarker = ({ text }) => <div className="my-marker"><div></div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.210101,
      lng: -111.665517
    },
    zoom: 14
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCKnQYqVv79xzPaR79LQ38b4Joc0GXYsqk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MyMarker
            lat={40.210101}
            lng={-111.665517}
            text="Younggraphix"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;