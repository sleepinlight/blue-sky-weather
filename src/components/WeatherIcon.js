import React, {Component} from 'react';

export default class WeatherIcon extends Component {
    render() {
        return (
            <img src={this.props.icon} alt="Weather Status"/> 
        );
    }   
}