import { push } from 'react-router-redux';

// Function to redirect url
export function redirectToUrl(param) {
    return function (dispatch) {
        dispatch(push(param));
    }
}

//Function to check Boolean value
export function toBool(value) {
    value = (typeof value === 'undefined' || value === '' || value !== 'true')
        ? ''
        : value;

    return Boolean(value);
}

//To Set storage key
export function setStorageByKey(key, value) {
    removeStorageByKey(key);
    localStorage.setItem(key, value);
}

//To Remove storage key
export function removeStorageByKey(key) {
    localStorage.removeItem(key);
}

//To get storage value by key
export function getStorageByKey(key) {
    return localStorage.getItem(key);
}

//To clear storage
export function clearStorage() {
    localStorage.clear();
}