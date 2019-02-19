import React, { Component } from 'react';
import {Container, Row, Col, Button, Alert} from 'reactstrap';
import { connect } from 'react-redux';
import {setCurrentLocation} from './actions/locations';
import axios from 'axios';
import dayicon from './day.svg';
import HomeView from './components/HomeView';
import AppRouter from './components/AppRouter';
import fetchLocation from './utils/UserLocation';
import retrieveWeather from './services/DarkSky';
import {retrieveCoords, retrieveCityName} from './services/Geocode';
import {ThemeContext, themes} from './services/ThemeContext';
import {dayStateCalc, dayOfWeek, StoreLocation} from './utils/index';
import './App.scss';

const mapStateToProps = (state) => ({
  locationMessage: state.locations.message,
  currentLocation: state.locations.currentLocation,
  currentLat: state.locations.currentLocationLat,
  currentLng: state.locations.currentLocationLng
});

const mapDispatchToProps = dispatch => ({
  onUpdateMessage: (location, message) => dispatch(setCurrentLocation(location, message))
})


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: '',
      backdrop: '',
      currentForecast: '',
      icon: dayicon,
      daystate: '',
      weekday: '',
      currentTemp: '',
      currentTime:'',
      sunset: '',
      sunrise: '',
      alerts: [],
      sevenday: [],
      locationName:''
    };
  }
  //TODO: Test ThemeContext
  render() {
    return (
      <div className="App">
      <p>{this.props.currentLocation.name}</p>
        <ThemeContext.Provider value="light">
          <header className="App-header" theme={this.context} >
            <h2>Blue Sky Weather</h2>
            <h4>{this.state.locationName ? this.state.locationName : ''}</h4>
          </header>
            <div className="main">
            <AppRouter className="app-router-menu" {...this.state}/>
            </div>
          
          <footer>
          
          </footer>
        </ThemeContext.Provider>
      </div>
    );
  }
  componentDidMount() {
    if(this.props.currentLocation !== "") { 
      retrieveWeather(this.props.currentLat, this.props.currentLng, this.setCurrentForecast);
    } else {
      this.determineLocation();
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentLocation !== prevProps.currentLocation) { 
      retrieveWeather(this.props.currentLat, this.props.currentLng, this.setCurrentForecast);
    }
  } 

  determineLocation = () => {
      if (navigator.geolocation) {
        fetchLocation(this.setLocation);
      }
    }
  
  setLocation = (data) => {
    this.setState({lat:data.coords.latitude, long:data.coords.longitude}, () => {
      retrieveWeather(this.state.lat, this.state.long, this.setCurrentForecast)
      retrieveCityName(this.state.lat, this.state.long, this.setLocationName);
      StoreLocation('current-location', data);
  });
  }

  setLocationName = (res) => {
    let city = res.data.results[0].address_components[3].short_name;
    let state = res.data.results[0].address_components[6].short_name;
    let currentLocation = `${city}, ${state}`;
    this.setState({
      locationName: currentLocation
    });
  }

  setCurrentForecast = (payload) => {
    this.setState({
      currentForecast: payload.data.currently.summary,
      currentTemp: payload.data.currently.temperature,
      currentTime: payload.data.currently.time,
      sunset: payload.data.daily.data[0].sunsetTime,
      sunrise: payload.data.daily.data[0].sunriseTime,
      alerts: payload.data.alerts,
      sevenday: payload.data.daily.data
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
