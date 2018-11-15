import { ACTION_TYPE } from '../../../../constants';
import { getInitialSearchState } from '../../../../utils/Factory';

export default (state = getInitialSearchState(), action) => {
    switch (action.type) {

        case ACTION_TYPE.FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                apiData: action.data,
                isSearched: true,
            };

        case ACTION_TYPE.CLEAR_SEARCH:
            return getInitialSearchState();

        default:
            return state;
    }
};