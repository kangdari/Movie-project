import React from 'react';
import styled from 'styled-components';
import Genre from './Genre';
import { Link } from 'react-router-dom';

const MovieListBlock = styled.div`
    width: 1080px;
    margin: 0 auto;
`;

const MovieItemBlock = styled.div`
    border: 1px solid gray;

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
                <p>{overview}</p>
                <p>{release_date}</p>
                <p>{vote_average}</p>
                {genre_ids.map(genre => (
                    <Genre key={genre} genre={genre} />
                ))}
            </Link>
        </MovieItemBlock>
    );
};

// 전체 영화 목록
const MovieList = ({ movies, error, loading }) => {
    if (error) {
        return <MovieListBlock>오류 발생</MovieListBlock>;
    }

    return (
        <MovieListBlock>
            {loading && '로딩중....'}
            {/* 로딩중이 아니고 movies 배열이 존재할 때 렌더링 */}
            {!loading &&
                movies &&
                movies.map(movie => <MovieItem movie={movie} key={movie.id} />)}
        </MovieListBlock>
    );
};

export default MovieList;
