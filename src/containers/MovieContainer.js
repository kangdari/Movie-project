import React, { useEffect } from 'react';
import { getMovies } from '../module/movie';
import { useSelector, useDispatch } from 'react-redux';

const MovieContainer = () => {
    // movie 리덕스 상태 접근
    const movieList = useSelector( state => state.movie.movieList); 
    // useDispatch hook을 사용하여 컴포넌트 내부에서
    // 스토어의 내장 함수 dispatch 가능
    const dispatch = useDispatch();
    console.log(movieList)

    useEffect(()=>{
        dispatch(getMovies());
    }, [dispatch])


    return (
        <div>
            ㅎㅎ
        </div>
    );
};

export default MovieContainer;