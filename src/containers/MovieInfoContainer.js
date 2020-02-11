import React from 'react';
import { useSelector } from 'react-redux';
import MovieInfo from '../components/MovieInfo';

const MovieInfoContainer = () => {
    const {info, error} = useSelector(state => ({
        info: state.search.info,
        error: state.search.error,
    }))
    return (
        <MovieInfo info={info} error={error}/>
    );
};

export default MovieInfoContainer;