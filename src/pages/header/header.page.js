import React from 'react';
import './header.styles.scss';

import {Container, Row, Col} from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <header className="App-Header text-center mb-4">
                <Container>
                    <Row>
                        <Col>
                            <span>
                                Header Component
                            </span>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}

export default Header;