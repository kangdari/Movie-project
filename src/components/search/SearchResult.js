import React from 'react';
import styled from 'styled-components';
import Genre from '../Genre';
// import { Link } from 'react-router-dom';

const SearchResultBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const MovieItemBlock = styled.div`
    display: flex;
    align-items: flex-start;
    width: 35%;

    padding: 20px;
    margin: 2rem 0;

    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    border-radius: 8px;
    background: #eff3f7;
    cursor: pointer;

    img {
        max-width: 150px;
        width: 100%;
        margin-left: 30px;
    }
`;

const MovieInfo = styled.div`
    margin: 1.5rem;

    span {
        padding-right: 1rem;
    }
`;

const MovieItem = ({ movie, onClick }) => {
    const {
        // id,
        title,
        // overview,
        release_date,
        vote_average,
        genre_ids, // 장르는 배열 형태
        // backdrop_path,
        poster_path,
    } = movie;
    // genre_ids.map(g => console.log(g)); // 장르

    const poster_url = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    return (
        <MovieItemBlock onClick={onClick}>
            <img src={poster_url} alt={title} title={title} />
            <MovieInfo>
                <h3>{title}</h3>
                <p>{release_date}</p>
                <p>{vote_average}</p>
                {genre_ids.map(genre => (
                    <Genre key={genre} genre={genre} />
                ))}
            </MovieInfo>
            {/* </Link> */}
        </MovieItemBlock>
    );
};

// 영화 검색 결과 목록을 보여줌
const SearchResult = ({ data, getMovieInfo}) => {
    return (
        <SearchResultBlock>
            {data &&
                data.map(movie => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        onClick={()=>{getMovieInfo(movie.id)}}
                    />
                ))}
        </SearchResultBlock>
    );
};

export default SearchResult;
