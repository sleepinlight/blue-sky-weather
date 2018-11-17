import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import CurrentForecast from './CurrentForecast';

const HomeView = ({...props}) => (
    <div>
        <Container>
            <Row>
                <Col xs={12}>
                    HOME
                    <CurrentForecast {...props}/>
                </Col>
            </Row>
        </Container>
    </div>
);


/* export default class HomeView extends Component {
    {...props} = this.props;
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>
                        <h2>{this.props.currentTemp}</h2>
                            <CurrentForecast />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
} */

export default HomeView;