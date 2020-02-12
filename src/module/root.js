import { combineReducers } from 'redux';
import movie from './movie';
import loading from './loading';
import search from './search';

const rootReducer = combineReducers({
    movie,
    loading,
    search,
})

export default rootReducer;