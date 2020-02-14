import React, { useEffect } from 'react';
import Header from '../components/Common/Header';
import MovieListContainer from '../containers/MovieListContainer';
// 상영 영화, 개봉 예정 영화 리스트 ...
// import from '../components/MovieList.js'


const MovieList = () => {

    // 컴포넌트로 이동
    useEffect(() => {
        document.body.style.backgroundColor = "black"
        document.body.style.backgroundImage = 'none'
    }, []);

    return (
        <>
            <Header />
            <MovieListContainer />
        </>
    );
};

export default MovieList;
