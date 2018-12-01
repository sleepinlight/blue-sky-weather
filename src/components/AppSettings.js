import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

export default class AppSettings extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>User Configurable Settings</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}