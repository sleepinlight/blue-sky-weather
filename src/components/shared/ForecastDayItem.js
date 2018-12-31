import React, {Component} from 'react';
import { Collapse, Button, CardBody, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import WeatherIcon from './WeatherIcon';
import {preciseReadableTime} from '../../utils/index.js';

export default class ForecastDayItem extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle = () => {
        this.setState({ collapse: !this.state.collapse });
      }
//TODO: This transition is awful
      render() {
        return (
          <div>
            
            
            
           
              <Card>
                <CardBody>
                    <CardTitle><h4>{this.props.dayName}</h4></CardTitle><Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle {this.props.key}</Button>
                    <CardSubtitle></CardSubtitle>
                    <Collapse isOpen={this.state.collapse}>
                    <CardText></CardText>
                    <div className="forecast-day-item-container">
                        
                        <span>{this.props.low}</span>
                            <div className="icon-container">
                                <WeatherIcon icon={this.props.icon}/>
                                <span>{this.props.condition}</span>
                            </div>
                        <span> {this.props.high}</span>
                    </div>
                    <p>{preciseReadableTime(this.props.sunriseTime)}</p>
                    <p>{preciseReadableTime(this.props.sunsetTime)}</p>
                </Collapse>
                </CardBody>
                
              </Card>
            
          </div>
        );
      }
}
