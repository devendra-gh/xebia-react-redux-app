import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {WebUrl} from '../../../../constants';
import Login from '../../landing/Login';

const UnauthorizedRoute = () => (
    <Switch>
        <Route path={WebUrl.SIGNUP_URL} component={Login} />
        <Redirect to={WebUrl.SIGNUP_URL} />
    </Switch>
);

export default UnauthorizedRoute;