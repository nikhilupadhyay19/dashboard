import React from 'react';
import './product-list.styles.scss';
import {Container, Row} from 'reactstrap';

import Product from '../product/product.component';

const ProductList = (props) => {
    return (
        <section className="product-list mb-4">
            <Container>
                <Row>
                    {props
                        .products
                        .map(product => {
                            return (<Product
                                product={product}
                                key={product.alpha3Code}
                                productSelectedHandler={() => props.productSelectedHandler(product.alpha2Code)}
                                deleteProductHandler={() => props.deleteProductHandler(product.alpha2Code)}
                                changeProductNameHandler={(event) => {
                                props.changeProductNameHandler(event, product.alpha2Code)
                            }}/>)
                        })}
                </Row>
            </Container>
        </section>
    )
}

export default ProductList;