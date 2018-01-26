import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from './MapContainer'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1>
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
})(App)