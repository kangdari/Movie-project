import React, { useEffect } from 'react';
import './MovieDetail.css';
import Genre from '../Genre';

const MovieDetail = ({ info }) => {
    const {
        title,
        tagline,
        release_date,
        backdrop_path,
        poster_path,
        genres, // id, name 객체 배열
        overview,
        runtime,
        revenue,
        vote_average,
    } = info;
    const poster_url = `https://image.tmdb.org/t/p/w780/${poster_path}`;
    const backDropUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
    const no_image_url = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRogidlVrfx2Q_qKWJIZ43w4RbD4YCaf6lBXG5LjnyrxxZ8Q4xw`;
    // 정규표현식 문자열 3번째 마다 , 삽입
    let boxOffice = String(revenue).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

    // 배경 이미지 변경
    useEffect(()=>{
        document.body.style.backgroundImage = `url('${backDropUrl}')`
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }, [backDropUrl])

    return (
        <div className="MovieContainer">
            <div className="img_container">
                {poster_path ? (
                    <img src={poster_url} alt="poster" />
                ) : (
                    <img
                        className="noImage"
                        src={no_image_url}
                        alt="noImage"
                    />
                )}
            </div>
            <div className="Movie_Info_Container">
                <div className="Movie_upInfo">
                    <h1>{title}</h1>
                    <span>{tagline}</span>
                    <p>
                        {overview.length > 200
                            ? `${overview.substring(0.2)}...`
                            : overview}
                    </p>
                </div>
                <div className="Movie_downInfo">
                    <div className="Movie_downInfo_Genre">
                        {genres.map((genre, i) => (
                            <Genre key={i} genre_id={genre.id} />
                        ))}
                    </div>
                    <div className="Movie_downInfo_container">
                        <div className="info_box">
                            <p>Original Release</p>
                            <p>{release_date}</p>
                        </div>
                        <div className="info_box">
                            <p>Running Time</p>
                            <p>{runtime} mins</p>
                        </div>
                        <div className="info_box">
                            <p>Box Office</p>
                            <p>${boxOffice}</p>
                        </div>
                        <div className="info_box">
                            <p>Vote Average:</p>
                            <p>{vote_average} / 10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
