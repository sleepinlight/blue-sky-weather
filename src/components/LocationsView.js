import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

export default class LocationsView extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        );
    }
}

const SavedLocation = (props) => (
    <li>{props.location} </li>
);

