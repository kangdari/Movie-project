import { combineReducers } from 'redux';
import movie from './movie';
import loading from './loading';

const rootReducer = combineReducers({
    movie,
    loading,
})

export default rootReducer;