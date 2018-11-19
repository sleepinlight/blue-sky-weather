import React, {Component} from 'react';
import {ForecastDayItem} from './shared';

const SevenDayForecast = ({...props}) => (
    <div>
        <h2>Seven Day Forecast</h2>
        {props.sevenday.map((item, i) => (
            <ForecastDayItem 
                low={item.apparentTemperatureLow} 
                high={item.apparentTemperatureHigh} 
                icon={item.icon} 
                condition={item.summary} 
                key={i} />
        ))}
    </div>
);

export default SevenDayForecast;