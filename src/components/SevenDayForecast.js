import React from 'react';
import {ForecastDayItem} from './shared';
import {FormattedTemperature} from '../utils/index';

const SevenDayForecast = ({...props}) => (
    <div>
        <h2>Seven Day Forecast</h2>
        {props.sevenday.map((item, i) => (
            
            <ForecastDayItem 
                low={FormattedTemperature(item.apparentTemperatureLow)} 
                high={FormattedTemperature(item.apparentTemperatureHigh)} 
                icon={item.icon} 
                condition={item.summary} 
                key={i} />
        ))}
    </div>
);

export default SevenDayForecast;