import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import { WebUrl } from '../../../constants';
import Main from '../landing';
import AuthorizedRoute from '../layout/AuthorizedRoute';
import UnauthorizedRoute from '../layout/UnauthorizedRoute';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match, location } = this.props;
        const allowRedirect = match && match.url !== location && location.pathname;

        return (
            <Switch>
                <Route path={WebUrl.SIGNUP_URL} component={UnauthorizedRoute} />
                <AuthorizedRoute path='/' component={Main} />

                {allowRedirect && <Redirect to={`${match.url}`} />}
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
