import * as movieAPI from '../lib/movieAPI';
import { handleActions } from 'redux-actions';

const SEARCH_MOVIE = 'search/SEARCH_MOVIE';
const SEARCH_MOVIE_SUCCESS = 'search/SEARCH_MOVIE_SUCCESS';
const SEARCH_MOVIE_FAILURE = 'search/SEARCH_MOVIE_FAILURE';

// container onchange or onSubmit 함수에서 dispatch
// thunk 함수
export const searchMovies = title => async dispatch => {
    dispatch({ type: SEARCH_MOVIE });
    try {
        const res = await movieAPI.searchMovies(title);
        dispatch({
            type: SEARCH_MOVIE_SUCCESS,
            payload: res.data.results,
        });
    } catch (e) {
        dispatch({
            type : SEARCH_MOVIE_FAILURE,
            payload : e
        })
        console.log(e);
    }
};

const initialState = {
    data: null,
    error: null,
};

const search = handleActions(
    {
        [SEARCH_MOVIE]: state => ({
            ...state,
        }),
        [SEARCH_MOVIE_SUCCESS]: (state, action) => ({
            ...state,
            data: action.payload,
        }),
        [SEARCH_MOVIE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
    },
    initialState,
);

export default search;
