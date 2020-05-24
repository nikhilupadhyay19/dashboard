import React from 'react';
import './product.styles.scss';

import {Col, Button, Input} from 'reactstrap';

const Product = ({product, productSelectedHandler, deleteProductHandler, changeProductNameHandler}) => {
    return (
        <Col md={3}>
            <div className="product p-3 py-5 mb-4" onClick={productSelectedHandler}>
                <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-owner">{product.author}</p>
                </div>
            </div>
            <Button
                outline
                size="sm"
                color="warning"
                className="button-deleteProducts"
                onClick={deleteProductHandler}>DEL</Button>{' '}
            <Input value={product.name} className="input-changeProductName" onChange={changeProductNameHandler}/>

        </Col>
    )
}

export default Product;