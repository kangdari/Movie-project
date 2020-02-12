import React from 'react';
import { useSelector } from 'react-redux';
import MovieDetail from '../components/Movie/MovieDetail';

// 자세한 영화정보
const MovieDetailContainer = () => {
    const { info, error } = useSelector(state => ({
        info: state.search.info,
        error: state.search.error,
    }));

    if (error) {
        return <div>에러 발생!</div>;
    }

    return (
        <>
            {info && !error && <MovieDetail info={info} />}
        </>
    );
};

export default MovieDetailContainer;
