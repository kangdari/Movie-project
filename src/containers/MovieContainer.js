import React, { useEffect } from 'react';
import { getMovies } from '../module/movie';
import { useSelector, useDispatch } from 'react-redux';

const MovieContainer = () => {
    // movie 리덕스 상태 접근
    const movieList = useSelector( state => state.movie.movieList); 
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