import React from 'react';
import './product.styles.scss';

import {Container, Row, Col} from 'reactstrap';

import Header from '../header/header.page';
import Footer from '../footer/footer.page';

import ProductInfo from '../../components/product-info/product-info.component';
import ProductList from '../../components/productl-list/product-list.component';
import SearchBox from '../../components/search-box/search-box.xomponent';
import SelectBox from '../../components/select-box/select-box.component';

const regions = [
    {
        id: 'AllRegion',
        label: 'All Regions'
    }, {
        id: 'Asia',
        label: 'Asia'
    }, {
        id: 'Europe',
        label: 'Europe'
    }, {
        id: 'Africa',
        label: 'Africa'
    }, {
        id: 'Oceania',
        label: 'Oceania'
    }, {
        id: 'Americas',
        label: 'Americas'
    }, {
        id: 'Polar',
        label: 'Polar'
    }, {
        id: '',
        label: 'No Region'
    }
]

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productId: null,
            showProducts: false,
            productSearchField: '',
            regionSelectField: 'AllRegion'
        }
    }

    componentDidMount() {
        fetch("https://restcountries-v1.p.rapidapi.com/all", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
                    "x-rapidapi-key": "7c24bbf33bmsh36d1658c426bd8bp185888jsne69af0083b2a"
                }
            })
            .then(response => response.json())
            .then(data => {

                //const products = data.splice(0, 4);
                const products = JSON.parse(JSON.stringify(data));

                const updatedProducts = products.map(product => {
                    return {
                        ...product,
                        author: 'Nikhil Upadhyay'
                    }
                });
                //console.log(updatedProducts);

                this.setState(state => state.products = updatedProducts)
            })
            .catch(err => {
                console.log(err);
            });
    }

    productSelectedHandler = (id) => {
        console.log(this);
        this.setState(state => state.productId = id);        
    }

    toggleProductsHandler = () => {
        const showProducts = this.state.showProducts;
        this.setState(state => state.showProducts = !showProducts);
    }

    deleteProductHandler = (id) => {
        const products = [...this.state.products];

        const productIndex = products.findIndex(product => product.alpha2Code === id);

        products.splice(productIndex, 1);
        this.setState(state => state.products = products);
    }

    changeProductNameHandler = (event, id) => {
        const value = event.target.value;

        const products = [...this.state.products];
        const productIndex = products.findIndex(product => product.alpha2Code === id);

        const product = Object.assign({}, products[productIndex]); // creates a copy but shallow one.
        product.name = value;

        products[productIndex] = product;

        this.setState(state => state.products = products);
    }

    searchProductNameHandler = (event) => {
        const value = event.target.value;
        this.setState(state => state.productSearchField = value)
    }

    selectRegionHandler = (event) => {
        const value = event.target.value;
        console.log(value);

        this.setState(state => state.regionSelectField = value);
    }

    render() {
        const {products, productId, showProducts, productSearchField, regionSelectField} = this.state;
        // console.log(products); console.log(showProducts); let filteredProducts =
        // products.filter(product =>
        // product.name.toLowerCase().includes(productSearchField.toLowerCase()));

        let filteredProducts = null;
        if (regionSelectField === 'AllRegion') {
            filteredProducts = products.filter(product => product.name.toLowerCase().indexOf(productSearchField.toLowerCase()) !== -1);
        } else {
            filteredProducts = products.filter(product => product.name.toLowerCase().indexOf(productSearchField.toLowerCase()) !== -1 && product.region === regionSelectField);
        }

        let productList = null;
        let productFilters = null;
        if (showProducts) {

            productList = <ProductList
                products={filteredProducts}
                productSelectedHandler={this.productSelectedHandler}
                deleteProductHandler={this.deleteProductHandler}
                changeProductNameHandler={this.changeProductNameHandler}/>

            productFilters = <Container className="mb-4">
                <Row>
                    <Col>
                        <SearchBox
                            placeholder="Search Countries"
                            searchProductNameHandler={this.searchProductNameHandler}/></Col>
                    <Col>
                        <SelectBox options={regions} selectRegionHandler={this.selectRegionHandler}/></Col>
                </Row>
            </Container>
            
        }

        return (
            <div className="product-page" id="product_page">
                <Header/>
                <ProductInfo
                    productId={productId}
                    toggleProductsHandler={this.toggleProductsHandler}
                    showProducts={showProducts}/> {productFilters}
                {productList}
                <Footer/>
            </div>
        )
    }
}

export default ProductPage;