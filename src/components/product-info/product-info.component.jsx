import React from 'react';
import './product-info.styles.scss';

import {Container, Row, Col, Button} from 'reactstrap';

class ProductInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedProduct: null
        }
    }

    componentDidUpdate() {
        if (this.props.productId) {
            if (!this.state.loadedProduct || (this.state.loadedProduct && this.state.loadedProduct.alpha2Code !== this.props.productId)) {
                fetch("https://restcountries-v1.p.rapidapi.com/alpha/" + this.props.productId, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
                        "x-rapidapi-key": "7c24bbf33bmsh36d1658c426bd8bp185888jsne69af0083b2a"
                    }
                }).then(response => {
                    return response.json();
                }).then(data => {
                    this.setState(state => state.loadedProduct = data);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }

    render() {

        const {loadedProduct} = this.state;
        let productInfo = null;
        let showProductButton = 'Show Products';

        if (this.props.showProducts) {
            showProductButton = 'Hide Products'
            productInfo = <p>Click on any product to get the JSON.</p>
        }

        if (this.props.productId && this.props.showProducts) {
            productInfo = <p>Loading Information... Please Wait...</p>
        }

        if (loadedProduct && this.props.showProducts) {
            productInfo = <p>{JSON.stringify(loadedProduct)}
            </p>
        }

        if (this.props.showProducts === false) {
            productInfo = <p>Product Information Section</p>
        }

        return (
            <section className="product-info mb-4">
                <Container>
                    <Row>
                        <Col>
                            <div className="product-content p-3">
                                {productInfo}
                            </div>
                            <Button
                                outline
                                size="sm"
                                color="secondary"
                                className="button-showProducts"
                                onClick={this.props.toggleProductsHandler}>{showProductButton}</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default ProductInfo;