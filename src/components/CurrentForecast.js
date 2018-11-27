import React from 'react';
import {Button} from 'reactstrap';
import { WeatherIcon, AlertBanner } from './shared/index';
import {dayStateCalc} from '../utils/index';

const CurrentForecast = ({...forecast}) => (
    <div>
        <WeatherIcon icon={forecast.icon} className="large-icon"/>
        <h1>{forecast.currentTemp}</h1>
        <h2>{forecast.currentForecast}</h2>
        {forecast.alerts.map((alert, i) => (
            <AlertBanner currentWeatherAlerts={alert.title} key={i} />
        ))}
        <hr/>
        <p>sunset: {forecast.sunset}</p>
        <p>current: {forecast.currentTime}</p>
        <p>{dayStateCalc(forecast.currentTime, forecast.sunrise) ? "within shift hours" : "not within shift hours"}</p>
        <Button onClick={forecast.determineLocation}>Refresh</Button>
        
    </div>      
);

export default CurrentForecast;