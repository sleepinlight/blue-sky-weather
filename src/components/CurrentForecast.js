import React from 'react';
import {Button} from 'reactstrap';
import { WeatherIcon, AlertBanner, ForecastDayItem } from './shared/index';
import {dayStateCalc, FormattedTemperature} from '../utils/index';

//TODO: Find a way to check whether within sunrise or sunset hours
const CurrentForecast = ({...forecast}) => (
    <div>
        <WeatherIcon icon={forecast.icon} className="large-icon"/>
        <h1>{FormattedTemperature(forecast.currentTemp)}</h1>
        <h2>{forecast.currentForecast}</h2>
       
        {forecast.alerts && forecast.alerts.map((alert, i) => (
            i === 0 || alert[i] !== alert[i-1] ? (<AlertBanner currentWeatherAlerts={alert.title} key={i} />) : null
        ))}
        <hr/>
        <p>sunset: {forecast.sunset}</p>
        <p>current: {forecast.currentTime}</p>
        
        <p>{dayStateCalc(forecast.currentTime, forecast.sunset) ? "within shift hours" : "not within shift hours"}</p>
        <Button onClick={forecast.determineLocation}>Refresh</Button>
        
    </div>      
);

export default CurrentForecast;