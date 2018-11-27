import React from 'react';

const AlertBanner = (props) => (
    <div className="weather-alert-banner">
        <h4><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {props.currentWeatherAlerts} </h4>
    </div>
);

export default AlertBanner;