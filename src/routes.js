import React from 'react';
import Login from './components/Login';
import NotebooksScreen from './components/NotebooksScreen';
import { isAuthenticated } from './auth';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/notebooks" component={NotebooksScreen} />
        </Switch>
    </BrowserRouter>
)

export default Routes