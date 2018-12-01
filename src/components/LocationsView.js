import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {CitySearch} from './shared/index';

export default class LocationsView extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <CitySearch/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const SavedLocation = (props) => (
    <li>{props.location} </li>
);

