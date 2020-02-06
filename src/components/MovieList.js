import React from 'react';
import styled from 'styled-components';

const MovieListBlock = styled.div`
    width: 1080px;
    margin: 0 auto;
`;

const MovieItemBlock = styled.div`
    border: 1px solid gray;
`;

const MovieItem = ({ movie }) => {
    const {
        id,
        title,
        overview,
        release_date,
        vote_average,
        genre_ids, // 장르는 배열 형태
        backdrop_path,
    } = movie;
    console.log(id);
    console.log(title);
    console.log(overview);
    console.log(release_date);
    console.log(vote_average);
    genre_ids.map(g => console.log(g)); // 장르 
    console.log(backdrop_path);

    return (
        <MovieItemBlock>
            <h3>{movie.title}</h3>
        </MovieItemBlock>
    );
};

// 전체 영화 목록
const MovieList = ({ movies }) => {
    return (
        <MovieListBlock>
            {movies &&
                movies.map(movie => <MovieItem movie={movie} key={movie.id} />)}
        </MovieListBlock>
    );
};

export default MovieList;
