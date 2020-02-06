import * as movieAPI from '../lib/movieAPI';
import { handleActions } from 'redux-actions';

// Action type
const GET_MOVIES = 'movie/GET_MOVIES';
const GET_MOVIES_SUCCESS = 'movie/GET_MOVIES_SUCCESS';
const GET_MOVIES_FAILURE = 'movie/GET_MOVIES_FAILURE';

// thunk 함수, 함수 내부에서 시작할 때, 성공할 때, 실패했을 때
// 서로 다른 액션을 디스패치 함.
// thunk 함수는 기존의 액션 생성 함수에서 일반 액션 객체를 반환하는 대신 함수를(dispatch) 반환 함.
export const getMovies = () => async dispatch => {
    dispatch({ type: GET_MOVIES }); // 요청 시작
    try {
        const res = await movieAPI.getMovies();
        dispatch({
            type: GET_MOVIES_SUCCESS, // 요청 성공
            payload: res.data.results // API 호출 결과 값
        })
    } catch (e) {
        dispatch({
            type: GET_MOVIES_FAILURE, // 요청 실패
            payload: e,
            error: true,
        });
        throw e;
    }
};

// 초기 설정
const initialState = {
    movieList : null,
    error: false,
}
// 리듀서
const movie = handleActions(
    {
        [GET_MOVIES] : (state) => ({
            ...state,
            // loading...
        }),
        [GET_MOVIES_SUCCESS] : (state, action) => ({
            ...state,
            movieList : action.payload,
        }),
        [GET_MOVIES_FAILURE] : (state) => ({
            ...state,
        })
    },
    initialState
)

export default movie;