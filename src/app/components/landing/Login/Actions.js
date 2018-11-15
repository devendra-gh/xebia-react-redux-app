import axios from 'axios';
import { requestConfig } from '../../../../services'
import { ACTION_TYPE, WebUrl } from '../../../../constants';
import { redirectToUrl } from '../../../../utils/Common';
import { isLoading } from '../../general/Loader/Actions';

export const fetchLoginSuccess = (results, isAuthenticated, isAdmin) => {
    return {
        type: ACTION_TYPE.FETCH_LOGIN_SUCCESS,
        apiData: results,
        isAuthenticated: isAuthenticated,
        isAdmin: isAdmin,
        userNotExist: false
    }
};

export const fetchLoginError = () => {
    return {
        type: ACTION_TYPE.FETCH_LOGIN_ERROR,
        isAuthenticated: false,
        userNotExist: false
    }
};

export const userNotExistError = () => {
    return {
        type: ACTION_TYPE.FETCH_LOGIN_ERROR,
        isAuthenticated: false,
        userNotExist: true,
    }
};

export const fetchLogout = () => {
    return {
        type: ACTION_TYPE.FETCH_LOGOUT_SUCCESS
    }
};

export function fetchLogin(name, password) {
    return (dispatch) => {

        dispatch(isLoading({'fetchLoginAPI': true}));

        return axios(requestConfig.login(name))
            .then(res => {
                dispatch(isLoading({'fetchLoginAPI': false}));

                const results = res && res.data && res.data.results && res.data.results[0];
                const name = 'Luke Skywalker';
                const password = '19BBY';
                let isAdmin = false;

                if(results && name === results.name && password === results.birth_year) {
                    isAdmin = true;
                }

                if (results && results.name && results.birth_year) {

                    dispatch(fetchLoginSuccess(results, true, isAdmin));
                    dispatch(redirectToUrl(WebUrl.SEARCH_URL));
                } else {

                    dispatch(userNotExistError());
                }
            })
            .catch(err => {
                dispatch(isLoading({'fetchLoginAPI': false}));

                dispatch(fetchLoginError());
                console.log('Error in fetchLogin action');
                throw err;
            });
    };
}
