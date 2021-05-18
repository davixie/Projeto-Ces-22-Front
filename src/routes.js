import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>
)

export default Routes;