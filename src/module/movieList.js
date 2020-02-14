import * as movieAPI from '../lib/movieAPI';
import { handleActions } from 'redux-actions';
import { startLoading, finishLoading } from './loading';

// Action type
const GET_MOVIELIST = 'movieList/GET_MOVIELIST';
const GET_MOVIELIST_SUCCESS = 'movieList/GET_MOVIELIST_SUCCESS';
const GET_MOVIELIST_FAILURE = 'movieList/GET_MOVIELIST_FAILURE';

// const GET_UPCOMING_MOVIELIST = 'movieList/GET_UPCOMING_MOVIELIST';
// const GET_UPCOMING_MOVIELIST_SUCCESS = 'movieList/GET_UPCOMING_MOVIELIST_SUCCESS';
// const GET_UPCOMING_MOVIELIST_FAILURE = 'movieList/GET_UPCOMING_MOVIELIST_FAILURE';

// thunk 함수, 함수 내부에서 시작할 때, 성공할 때, 실패했을 때
// 서로 다른 액션을 디스패치 함.
// thunk 함수는 기존의 액션 생성 함수에서 일반 액션 객체를 반환하는 대신 함수를(dispatch) 반환 함.
export const getMovieList = () => async dispatch => {
    dispatch({ type: GET_MOVIELIST }); // 요청 시작
    try {
        const res = await movieAPI.getMovies();
        dispatch(startLoading(GET_MOVIELIST)); // 로딩 시작
        dispatch({
            type: GET_MOVIELIST_SUCCESS, // 요청 성공
            payload: res.data.results, // API 호출 결과 값
        });
        dispatch(finishLoading(GET_MOVIELIST));
    } catch (e) {
        dispatch(startLoading(GET_MOVIELIST)); // 로딩 시작
        dispatch({
            type: GET_MOVIELIST_FAILURE, // 요청 실패
            payload: e,
            error: true,
        });
        dispatch(finishLoading(GET_MOVIELIST));
        throw e;
    }
};

// export const getUpComingMovieList = () => async dispatch => {
//     dispatch({ type: GET_UPCOMING_MOVIELIST }); // 요청 시작
//     try {
//         const res = await movieAPI.getMovies();
//         dispatch(startLoading(GET_UPCOMING_MOVIELIST)); // 로딩 시작
//         dispatch({
//             type: GET_UPCOMING_MOVIELIST_SUCCESS, // 요청 성공
//             payload: res.data.results, // API 호출 결과 값
//         });
//         dispatch(finishLoading(GET_UPCOMING_MOVIELIST));
//     } catch (e) {
//         dispatch(startLoading(GET_UPCOMING_MOVIELIST)); // 로딩 시작
//         dispatch({
//             type: GET_UPCOMING_MOVIELIST_FAILURE, // 요청 실패
//             payload: e,
//             error: true,
//         });
//         dispatch(finishLoading(GET_UPCOMING_MOVIELIST));
//         throw e;
//     }
// };

// 초기 설정
const initialState = {
    movieList: null,
    // upComingMovieList: null,
    loading : false,
    error: null,
};

// 리듀서
const movieList = handleActions(
    {
        [GET_MOVIELIST]: state => ({
            ...state,
        }),
        [GET_MOVIELIST_SUCCESS]: (state, action) => ({
            ...state,
            movieList: action.payload,
        }),
        [GET_MOVIELIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error: error,
        }),
        // [GET_UPCOMING_MOVIELIST]: state => ({
        //     ...state,
        // }),
        // [GET_UPCOMING_MOVIELIST_SUCCESS]: (state, action) => ({
        //     ...state,
        //     upComingMovieList: action.payload,
        // }),
        // [GET_UPCOMING_MOVIELIST_FAILURE]: (state, { payload: error }) => ({
        //     ...state,
        //     error: error,
        // }),
    },
    initialState,
);

export default movieList;
