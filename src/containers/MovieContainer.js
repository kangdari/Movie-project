import React, { useEffect } from 'react';
import { getMovies } from '../module/movie';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from '../components/MovieList';

const MovieContainer = () => {
    // movie 리덕스 상태 접근
    const movies = useSelector( state => state.movie.movieList); 
    // useDispatch hook을 사용하여 컴포넌트 내부에서
    // 스토어의 내장 함수 dispatch 가능
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getMovies());
    }, [dispatch])

    return (
        <div>
            { !movies ? 'Loading...' : <MovieList movies={movies}/>}
        </div>
    );
};

export default MovieContainer;