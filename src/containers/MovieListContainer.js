import React, { useEffect } from 'react';
import { getMovieList } from '../module/movieList';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from '../components/MovieList';
// 컴포넌트

const MovieListContainer = () => {
    const dispatch = useDispatch();
    const { movieList, loading, error} = useSelector(state =>({
        movieList: state.movieList.movieList,
        loading: state.loading['movieList/GET_MOVIELIST'],
        error: state.movieList.error,
    }))

    // 영화 리스트 호출
    useEffect(() => {
        dispatch(getMovieList());
    }, [dispatch]);

    return <MovieList movieList={movieList} loading={loading} error={error} />;
};

export default MovieListContainer;
