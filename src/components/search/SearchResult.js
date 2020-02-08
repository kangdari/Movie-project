import React from 'react';
import styled from 'styled-components';
import Genre from '../Genre';
import { Link } from 'react-router-dom';

const MovieItemBlock = styled.div`

    display: flex;
    
    border : 1px solid gray;
    border-radius: 4px;
    margin-bottom : 2rem;

    span {
        margin-right: 8px;
    }
`;

const MovieItem = ({ movie }) => {
    const {
        id,
        title,
        overview,
        release_date,
        vote_average,
        genre_ids, // 장르는 배열 형태
        // backdrop_path,
        poster_path,
    } = movie;
    // genre_ids.map(g => console.log(g)); // 장르

    const poster_url = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    return (
        <MovieItemBlock>
            {/* 영화 선택 시 props 전달 */}
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                        id,
                        title,
                        overview,
                        release_date,
                        vote_average,
                        genre_ids,
                        poster_url,
                    },
                }}
            >
                <h3>{title}</h3>
                <img src={poster_url} alt={title} title={title} />
                <p>{release_date}</p>
                <p>{vote_average}</p>
                {genre_ids.map(genre => (
                    <Genre key={genre} genre={genre} />
                ))}
            </Link>
        </MovieItemBlock>
    );
};

// 영화 검색 결과 목록을 보여줌
const SearchResult = ({ data }) => {
    return (
        <div>
            {data &&
                data.map(
                    movie => <MovieItem key={movie.id} movie={movie} />,
                    // return <p key={movie.id}>{movie.title}</p>;
                )}
        </div>
    );
};

export default SearchResult;
