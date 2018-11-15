import { ACTION_TYPE } from '../../../../constants';
import { getInitialLoginState } from '../../../../utils/Factory';

export default (state = getInitialLoginState(), action) => {

    switch (action.type) {
        case ACTION_TYPE.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                apiData: action.apiData,
                isAuthenticated: action.isAuthenticated,
                isAdmin: action.isAdmin,
                userNotExist: action.userNotExist,
            };

        case ACTION_TYPE.FETCH_LOGIN_ERROR:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                userNotExist: action.userNotExist,
            };

        case ACTION_TYPE.FETCH_LOGOUT_SUCCESS:
            return getInitialLoginState();

        default:
            return state;
    }
};