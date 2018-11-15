import {ACTION_TYPE} from '../../../../constants';

//Action to is loading data
export function isLoading(data) {
    return {
        type: ACTION_TYPE.IS_LOADING,
        data: data,
    };
}

//Action to clear loading data
export function clearLoadingData() {
    return {
        type: ACTION_TYPE.CLEAR_LOADING,
    };
}
