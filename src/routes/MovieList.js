import React, { useEffect } from 'react';
import AutocompleteText from '../components/Auto/AutocompleteText';
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
            <AutocompleteText />
            2222
        </>
    );
};

export default MovieList;
