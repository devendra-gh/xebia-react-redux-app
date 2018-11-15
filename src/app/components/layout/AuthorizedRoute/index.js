import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {WebUrl } from '../../../../constants';

class AuthorizedRoute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { login, component: Component,  ...rest } = this.props;
        let isAuthenticated = login && login.isAuthenticated;

        return (
            <Route {...rest} render={props => {
                return (
                    isAuthenticated
                        ? <Component {...props} />
                        : <Redirect to={`${WebUrl.SIGNUP_URL}`} />
                )
            }} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute)
