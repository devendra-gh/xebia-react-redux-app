export const WebUrl = {
    'SIGNUP_URL': '/login',
    'SEARCH_URL': '/',
};

export const AppConfig = {
    LOGIN_API_URL: process.env.LOGIN_API_URL,
    SEARCH_API_URL: process.env.SEARCH_API_URL,
};

export const ACTION_TYPE = {
    FETCH_LOGIN_SUCCESS: 'FETCH_LOGIN_SUCCESS',
    FETCH_LOGIN_ERROR: 'FETCH_LOGIN_ERROR',
    FETCH_LOGOUT_SUCCESS: 'FETCH_LOGOUT_SUCCESS',
    FETCH_SEARCH_SUCCESS: 'FETCH_SEARCH_SUCCESS',
    CLEAR_SEARCH: 'CLEAR_SEARCH',
    IS_LOADING: 'IS_LOADING',
    CLEAR_LOADING: 'CLEAR_LOADING',
};

export const ERROR_MESSAGE = {
    ENTER_USER_AND_PASSWORD: 'Please Enter Username and Password',
    USER_NOT_EXIST: 'User does not exist',
};
