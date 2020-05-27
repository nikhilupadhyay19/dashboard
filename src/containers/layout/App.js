import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import Header from '../../containers/header/header';
import HomePage from '../../pages/homepage/homepage';
import ProductPage from '../../pages/productpage/productpage';
import PracticePage from '../../pages/practicepage/practicepage';
import Footer from '../../containers/footer/footer';

class App extends React.Component {
    render() {
        // let productPage = <ProductPage/>;
        return (
            <div className="App-Container">
                <Header/>
                <Switch>
                    <Route exact={true} path="/" component={HomePage}/>
                    <Route exact={true} path="/products" component={ProductPage}/>
                    <Route exact={true} path="/practice" component={PracticePage}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App;
