import React from 'react';
// import styled from 'styled-components';

// 검색 결과 영화 1개
const Movie = ({ info }) => {
    const {
        // id,
        title,
        release_date,
        // genre_ids,
        // overview,
        // poster_path,
        // backdrop_path,
        vote_average,
    } = info;
    return (
        <>
            <h3>{title}</h3>
            <p>{release_date}</p>
            <p>{vote_average}</p>
        </>
    );
};

// 인풋 창에 입력할 때마다 SearchResult 컴포넌트가 렌더링 됨.
const SearchResult = ({ result }) => {
    return (
        <div>
            {result.map((info, index) => {
                return <Movie key={index} info={info} />;
            })}
        </div>
    );
};

export default SearchResult;
