import * as movieAPI from '../lib/movieAPI';
import { handleActions } from 'redux-actions';

const SEARCH_MOVIE = 'search/SEARCH_MOVIE';
const SEARCH_MOVIE_SUCCESS = 'search/SEARCH_MOVIE_SUCCESS';
const SEARCH_MOVIE_FAILURE = 'search/SEARCH_MOVIE_FAILURE';

const SEARCH_MOVIEID = 'search/SEARCH_MOVIEID';
const SEARCH_MOVIEID_SUCCESS = 'search/SEARCH_MOVIEID_SUCCESS';
const SEARCH_MOVIEID_FAILURE = 'search/SEARCH_MOVIEID_FAILURE';


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
    }
};

export const searchMoviesId = id => async dispatch => {
    dispatch({ type: SEARCH_MOVIEID });
    try{
        const res = await movieAPI.searchMoviesId(id);
        dispatch({
            type: SEARCH_MOVIEID_SUCCESS,
            payload: res.data,
        })
    }catch(e){
        dispatch({
            type : SEARCH_MOVIEID_FAILURE,
            payload : e
        })
    }
}

const initialState = {
    data: null,
    info: null, // 자세한 영화 정보
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
        [SEARCH_MOVIE_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),

        [SEARCH_MOVIEID]: state => ({
            ...state,
        }),
        [SEARCH_MOVIEID_SUCCESS]: (state, action) => ({
            ...state,
            info: action.payload,
        }),
        [SEARCH_MOVIEID_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
    },
    initialState,
);

export default search;
