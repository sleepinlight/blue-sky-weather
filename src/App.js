import React, { Component } from 'react';
import {Container, Row, Col, Button, Alert} from 'reactstrap';
import axios from 'axios';
import dayicon from './day.svg';
import HomeView from './components/HomeView';
import AppRouter from './components/AppRouter';
import fetchLocation from './utils/UserLocation';
import retrieveWeather from './services/DarkSky';
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
      sunrise: ''
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
  }

  setCurrentForecast = (payload) => {
    this.setState({
      currentForecast: payload.data.currently.summary,
      currentTemp: payload.data.currently.temperature,
      currentTime: payload.data.currently.time,
      sunset: payload.data.daily.data[0].sunsetTime,
      sunrise: payload.data.daily.data[0].sunriseTime
    });
  }
}

export default App;
