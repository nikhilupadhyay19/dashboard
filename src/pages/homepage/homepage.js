import React from 'react';
import './homepage.styles.scss';

import {Container, Row, Col} from 'reactstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>Welcome to Home page</p>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default HomePage;