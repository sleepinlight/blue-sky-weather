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

export default HomeView;