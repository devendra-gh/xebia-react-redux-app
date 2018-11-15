import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WebUrl } from '../../../../constants';
import { fetchLogout } from '../../landing/Login/Actions';
import { redirectToUrl, clearStorage } from '../../../../utils/Common';
import Button from '../Button';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = () => {
        clearStorage();
        this.props.logoutUser();

        setTimeout(() => {
            this.props.redirectToUrl(WebUrl.SIGNUP_URL);
        }, 50);
    };

    render() {
        return (
            <Button
                onClickHandler={ this.onClickHandler }
                cssClassName='btn-link'
                label='Logout'
            />
        )
    }
}

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => {
            dispatch(fetchLogout())
        },
        redirectToUrl: (data) => {
            dispatch(redirectToUrl(data))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);