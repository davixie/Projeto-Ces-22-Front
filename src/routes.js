import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/index'
import Register from './pages/Register/index'
import Login from './pages/Login/index'
import Appointment from './pages/Appointment';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/appointment" component={Appointment} />
        </Switch>
    </BrowserRouter>
)

export default Routes;