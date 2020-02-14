import { combineReducers } from 'redux';
import movieList from './movieList';
import loading from './loading';
import search from './search';

const rootReducer = combineReducers({
    movieList,
    loading,
    search,
})

export default rootReducer;