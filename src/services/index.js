import { AppConfig } from '../constants';

export const requestConfig = {

    login: (name) => {
        return {
            method: 'get',
            url: `${AppConfig.LOGIN_API_URL}${name}`,
        }
    },

    search: (input) => {
        return {
            method: 'get',
            url: `${AppConfig.SEARCH_API_URL}${input}`,
        }
    },

};
