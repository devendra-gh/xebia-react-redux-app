import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchLogin, fetchLoginError } from '../../landing/Login/Actions';
import { ERROR_MESSAGE } from '../../../../constants';
import FormGroup from '../../general/FormGroup';
import TextInputField from '../../general/TextInputField';
import Button from '../Button';
import NoResultFound from '../../general/NoResultFound';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            pswd: null,
            enterUserAndName: null,
        };
        // name: 'Luke Skywalker',
        // pswd: '19BBY',
        //name: 'Padmé Amidala',
        //pswd: '46BBY',
    }

    onBlurHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fetchLoginHandler = () => {
        let { name, pswd } = this.state;

        if (name && pswd) {

            this.setState({
                enterUserAndName: false
            });
            this.props.fetchLogin(name, pswd);

        } else {

            this.setState({
                enterUserAndName: true
            });
            this.props.fetchLoginError();
        }
    };

    render() {
        const { login: { userNotExist } } = this.props;
        let { name, pswd, enterUserAndName } = this.state;

        return (
            <div className='login-form-section'>

                <FormGroup cssClassName='form-group'>
                    <TextInputField
                        type='text'
                        name='name'
                        value={ name }
                        onBlurHandler={this.onBlurHandler}
                        placeholder='Username'
                        cssClassName='form-control'
                        autoFocus={true}
                    />
                </FormGroup>
                <FormGroup cssClassName='form-group'>
                    <TextInputField
                        type='password'
                        name='pswd'
                        value={ pswd }
                        onBlurHandler={this.onBlurHandler}
                        placeholder='Password'
                        cssClassName='form-control'
                    />
                </FormGroup>
                <FormGroup cssClassName='form-group'>
                    <Button
                        onClickHandler={ this.fetchLoginHandler }
                        label={'Login'}
                        cssClassName='btn-action'
                    />
                </FormGroup>

                {
                    enterUserAndName
                        ? (
                            <NoResultFound
                                cssClassName='warning'
                                message={ ERROR_MESSAGE.ENTER_USER_AND_PASSWORD }
                            />
                        )
                        : ''
                }

                {
                    userNotExist
                        ? (
                            <NoResultFound
                                cssClassName='warning'
                                message={ ERROR_MESSAGE.USER_NOT_EXIST }
                            />
                        )
                        : ''
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (data) => {
            dispatch(fetchLogin(data))
        },
        fetchLoginError: () => {
            dispatch(fetchLoginError())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);