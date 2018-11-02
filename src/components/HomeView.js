import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import { WeatherIcon } from './shared/index';

export default class HomeView extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>
                        <WeatherIcon icon={this.props.icon} className="large-icon"/>
                        <h1>{this.props.currentTemp}</h1>
                        <h2>{this.props.currentForecast}</h2>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
