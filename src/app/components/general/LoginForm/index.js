import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchLogin } from '../../landing/Login/Actions';
import { ERROR_MESSAGE } from '../../../../constants';
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

            this.props.fetchLogin(name, pswd);
        } else {

            this.setState({
                enterUserAndName: true
            })
        }
    };

    render() {
        const { name, pswd, enterUserAndName } = this.state;

        return (
            <div className='login-form-section'>

                <div className='form-group'>
                    <TextInputField
                        type='text'
                        name='name'
                        value={ name }
                        onBlurHandler={this.onBlurHandler}
                        placeholder='Username'
                        cssClassName='form-control'
                        autoFocus={true}
                    />
                </div>

                <div className='form-group'>
                    <TextInputField
                        type='password'
                        name='pswd'
                        value={ pswd }
                        onBlurHandler={this.onBlurHandler}
                        placeholder='Password'
                        cssClassName='form-control'
                    />
                </div>

                <div className='form-group'>
                    <Button
                        onClickHandler={ this.fetchLoginHandler }
                        label={'Login'}
                        cssClassName='btn-action'
                    />
                </div>

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

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (data) => {
            dispatch(fetchLogin(data))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);