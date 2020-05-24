import React from 'react';
import './footer.styles.scss';

import {Container, Row, Col} from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <footer className="App-footer text-center">
                <Container>
                    <Row>
                        <Col>
                            <span>
                                Footer Component
                            </span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;