import { push } from 'react-router-redux';

// Function to redirect url
export function redirectToUrl(param) {
    return function (dispatch) {
        dispatch(push(param));
    }
}
