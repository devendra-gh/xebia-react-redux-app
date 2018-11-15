import { combineReducers } from 'redux';
import loader from '../app/components/general/Loader/Reducers';
import login from '../app/components/landing/Login/Reducers';
import search from './components/landing/Search/Reducers';

const rootReducer = combineReducers({
    loader: loader,
    login: login,
    search: search,
});

export default rootReducer;
