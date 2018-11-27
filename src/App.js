import React, { Component } from 'react';
import {Container, Row, Col, Button, Alert} from 'reactstrap';
import axios from 'axios';
import dayicon from './day.svg';
import HomeView from './components/HomeView';
import AppRouter from './components/AppRouter';
import fetchLocation from './utils/UserLocation';
import retrieveWeather from './services/DarkSky';
import {retrieveCoords} from './services/Geocode';
import dayStateCalc from './utils/DayStateCalculator';
import './App.scss';


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
      currentTemp: '',
      currentTime:'',
      sunset: '',
      sunrise: '',
      alerts: [],
      sevenday: []
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Blue Sky Weather</h2>
        </header>
          <div className="main">
          <AppRouter className="app-router-menu" {...this.state}/>
          </div>
        
        <footer>
         
        </footer>
      </div>
    );
  }
  componentDidMount() {
    this.determineLocation();
  }

  determineLocation = () => {
      if (navigator.geolocation) {
        fetchLocation(this.setLocation);
      }
    }
  
  setLocation = (data) => {
    this.setState({lat:data.coords.latitude, long:data.coords.longitude}, () => {
      retrieveWeather(this.state.lat, this.state.long, this.setCurrentForecast)
  });
  //TODO: set actual location and pass onSuccess function
    retrieveCoords("786 Florence St, Baton Rouge, LA");
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

export default App;
