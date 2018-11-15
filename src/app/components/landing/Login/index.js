import React, {Component} from 'react';
import {connect} from 'react-redux';

import Logo from '../../general/Logo';
import LoginForm from '../../general/LoginForm';
import Loader from '../../general/Loader';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-section'>
                <Logo />
                <LoginForm />
                <Loader />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchToProps = (dispatch) => {
    return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);