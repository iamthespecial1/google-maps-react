import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import marker from './anchor.png'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: -8.7832,
        lng: -55.4915
      },
      polygonCoordinates: [],
      zoom: 4
    }
    console.log(props)
  }

  componentDidUpdate(prevProps) {

  }
  selectedZone = (val) => {
    this.setState({
      center: {
        lat: parseInt(val.lat, 10),
        lng: parseInt(val.lng, 10)
      },
      zoom: 5
    })
  }
  setBoundary = (val) => {
    this.setState({
      polygonCoordinates: [...val]
    })
  }
  onZoomChanged = () => {
    console.log("Hiii")
  }

  render() {

    return (
      <div style={{ height: '100vh', width: '100%' }}>

        <Map google={this.props.google}
          style={{ width: '100%', height: '100%', position: 'relative' }}
          className={'map'}
          center={this.state.center}
          zoom={this.state.zoom}
          ref={this.map}
          onZoomChanged={this.onZoomChanged}>
          <Polygon
            paths={this.state.polygonCoordinates}
            strokeColor="#000000"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#000000"
            fillOpacity={0.35} />
          {this.state.zoom > 5 ? <div><Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 37.778519, lng: -122.405640 }} />
            <Marker
              name={'Dolores park'}
              position={{ lat: 37.759703, lng: -122.428093 }}
              icon={marker} />
            <Marker />
            <Marker
              name={'Your position'}
              position={{ lat: 37.762391, lng: -122.439192 }} /></div> : null}
        </Map>
        <MyComponent
          onSelect={this.selectedZone}
          onHover={this.setBoundary} />
      </div >

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAzcEI27D-EtLxxrtVaIB8qikgDG7w5cjY')
})(App);
