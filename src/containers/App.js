import React from 'react';
import './App.scss';
import ProductPage from '../pages/product/product.page';

class App extends React.Component {
    render() {
        return (
            <div className="App-Container">
                <ProductPage/>
        </div>
        )
    }
}

export default App;
