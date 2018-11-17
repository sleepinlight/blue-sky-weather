import React, {Component} from 'react';

/* export default class SevenDayForecast extends Component {
    render() {
        return (
        <div>
            <h2>Seven Day Forecast</h2>
        </div>
        );
    }
} */

const SevenDayForecast = ({...props}) => (
    <div>
        <h2>Seven Day Forecast</h2>
        <h3>{props.sunset}</h3>
    </div>
);

export default SevenDayForecast;