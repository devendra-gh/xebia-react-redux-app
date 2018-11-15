import axios from 'axios';
import { requestConfig } from '../../../../services'
import { ACTION_TYPE } from '../../../../constants';
import { isLoading } from '../../general/Loader/Actions';

export const fetchSearchSuccess = (data, inputSearch) => {
    return {
        type: ACTION_TYPE.FETCH_SEARCH_SUCCESS,
        data,
        inputSearch

    }
};

export const clearSearchData = () => {
    return {
        type: ACTION_TYPE.CLEAR_SEARCH,
    }
};

export function fetchSearch(input) {
    return (dispatch) => {
        dispatch(isLoading({'fetchSearchAPI': true}));

        return axios(requestConfig.search(input))
            .then(response => {

                dispatch(isLoading({'fetchSearchAPI': false}));

                let results = response && response.data && response.data.results || [];
                dispatch(fetchSearchSuccess(results, input));
            })
            .catch((error) => {

                dispatch(isLoading({'fetchSearchAPI': false}));
                console.log('Error in fetchLogin action');
                throw error;
            });
    };
}
