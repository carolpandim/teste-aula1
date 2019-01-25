import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Index';
import Anuncio from './pages/Anuncio/Index';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/anuncio/:id" component={Anuncio}></Route>
        </Switch>
    );
};

export default Routes;

// https://api.mercadolibre.com/sites/MLB/search?q=iphone