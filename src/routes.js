import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/index'
import Register from './pages/Register/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
)

export default Routes;