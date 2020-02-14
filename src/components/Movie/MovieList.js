import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Genre from '../Common/Genre';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon icon={faStarHalf} />

const MovieListBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const MovieItemBlock = styled.div`
    width: 150px;
    margin-bottom: 2.5rem;
    transition: opacity 0.5s;

    &:hover{
        opacity: 0.6
    }

    .thum{
        position: relative;
    }

    .date{
        position: absolute;
        left: 0px;
        bottom: 4px;
        width: 150px;
        text-align: center;
        margin: 0;
        z-index: 1;
    }

    .backColor{
        position: absolute;
        left: 0px;
        bottom: 4px;
        width: 150px;
        text-align: center;
        text-indent: -9999px;
        margin: 0;
        background: black;
        opacity: 0.5;
    }

    img{
        max-width : 150px;
        min-height: 225px;
    }

    p{
        margin: 0;
        font-size: 0.8rem;
    }
    span{
        font-size: 0.8rem;
        padding-right: 3px;
    }
`;

const MoviePoster = ({ url }) => {
    return <img src={url} alt="poster" />
}

const MovieItem = ({ movie, selectMovie }) => {
    const {
        id,
        title,
        release_date,
        genre_ids, // 장르는 배열 형태
        poster_path,
    } = movie;
    const poster_url = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    return (
        // 클릭 시 영화 상세 검색
        <Link to={`/`} onClick={() => selectMovie(id)}>
            <MovieItemBlock>
                <div className="thum">
                    <MoviePoster url={poster_url} />
                    <span className="date">{release_date}</span>
                    <p className="backColor">개봉일</p>
                </div>
                <p>{title.length > 13 ? `${title.substr(0, 13)}...` : title}</p>
                {genre_ids.slice(0, 3).map((genre_id, i) => (
                    <Genre genre_id={genre_id} key={i} />
                ))}
            </MovieItemBlock>
        </Link>
    )
}

const MovieList = ({ movieList, loading, error, selectMovie }) => {
    if (error) {
        return <MovieListBlock>Error!!</MovieListBlock>
    }

    return (
        <MovieListBlock>
            {loading && '로딩 중...'}
            {!loading && movieList && movieList.map(movie => (
                <MovieItem movie={movie} key={movie.id} selectMovie={selectMovie} />
            ))}
        </MovieListBlock>
    );
};

export default MovieList;