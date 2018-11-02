import React, { Component } from 'react';
import {Container, Row, Col, Button, Alert} from 'reactstrap';
import axios from 'axios';
import dayicon from './day.svg';
import HomeView from './components/HomeView';
import fetchLocation from './utils/UserLocation';
import retrieveWeather from './services/DarkSky';
import dayStateCalc from './utils/DayStateCalculator';

import './App.css';

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
    let obj = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <HomeView 
            backdrop={this.state.backdrop}
            icon={this.state.icon}
            currentTemp={this.state.currentTemp}
            currentForecast={this.state.currentForecast}
            
           />
           <p>sunset: {obj.sunset}</p>
           <p>current: {obj.currentTime}</p>
           <p>{dayStateCalc(obj.currentTime, obj.sunrise) ? "within shift hours" : "not within shift hours"}</p>
          <Button onClick={this.determineLocation}>Refresh</Button>
        </header>
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
