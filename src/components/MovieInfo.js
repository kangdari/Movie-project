import React from 'react';
import styled from 'styled-components';

const MovieInfoBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
`;

const BackGround = styled.div`
    // background: rgba(0, 0, 0, 0.7);
`;

const MovieInfo = ({ info, error }) => {
    if (!info) {
        return null;
    }
    const {
        title,
        overview,
        runtime,
        revenue,
        tagline,
        vote_average,
        backdrop_path,
        poster_path,
        release_date,
    } = info;

    if (error) {
    }

    // info 값이 존재하면 보여줘
    return (
        <MovieInfoBlock>
            <BackGround />
            <h2>{title}</h2>
            <p>{runtime}</p>
        </MovieInfoBlock>
    );
};

export default MovieInfo;
