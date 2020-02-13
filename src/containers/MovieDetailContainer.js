import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initialMovieData } from '../module/search';
import MovieDetail from '../components/Movie/MovieDetail';

// 자세한 영화정보
const MovieDetailContainer = () => {
    const dispatch = useDispatch();
    const { info, error } = useSelector(state => ({
        info: state.search.info,
        error: state.search.error,
    }));

    useEffect(()=>{
        return ()=>{
            dispatch(initialMovieData());
        }
    }, [dispatch])

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
