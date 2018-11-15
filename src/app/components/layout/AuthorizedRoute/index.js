import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { WebUrl, Constants } from '../../../../constants';
import { getStorageByKey, toBool } from '../../../../utils/Common';

class AuthorizedRoute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { component: Component,  ...rest } = this.props;
        let isAuthenticated = toBool(getStorageByKey(Constants.IS_AUTHENTICATED));

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
