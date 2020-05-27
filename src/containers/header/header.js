import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';

import {Container, Row, Col} from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <header className="App-Header text-center mb-4">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <Link to="/products">Products</Link>
                            <span>/</span>
                            <Link to="/practice">Practice</Link>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}

export default Header;