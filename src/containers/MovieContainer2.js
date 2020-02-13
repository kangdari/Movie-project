import React, { useEffect } from 'react';
import { getMovies } from '../module/movie';
import { useSelector, useDispatch } from 'react-redux';
import Movie_List from '../components/Movie_List';

const MovieContainer = () => {
    // movie 리덕스 상태 접근
    // const movies = useSelector(state => state.movie.movieList);
    const { movies, loading, error } = useSelector(state => ({
        movies: state.movie.movieList,
        loading: state.loading['movie/GET_MOVIES'],
        error: state.movie.error
    }));
    // useDispatch hook을 사용하여 컴포넌트 내부에서
    // 스토어의 내장 함수 dispatch 가능
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    // return <div>{!movies ? 'Loading...' : <MovieList movies={movies} loading={loading} error={error} />}</div>;
    return <Movie_List movies={movies} loading={loading} error={error} />
};

export default MovieContainer;
