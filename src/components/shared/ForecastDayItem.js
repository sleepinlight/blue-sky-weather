import React, {Component} from 'react';
import WeatherIcon from './WeatherIcon';

const ForecastDayItem = (props) => (
    <div className="forecast-day-item-container">
        <span>{props.low}</span>
            <div className="icon-container">
                <WeatherIcon icon={props.icon}/>
                <span>{props.condition}</span>
            </div>
        <span> {props.high}</span>
    </div>
)
   
export default ForecastDayItem;