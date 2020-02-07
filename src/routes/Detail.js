import React from 'react';
// import MovieDetail from '../components/MovieDetail';

// MovieItem의 Link 태그로 부터 받아온 props값
// location 값 참조
const Detail = ({ location, history }) => {
    if (location.state === undefined) {
        history.push('/');
        return null;
    }
    // console.log(location.state);
    const {
        title,
        overview,
        release_date,
        vote_average,
        poster_url,
        // genre_ids, // Genre 컴포넌트로 출력
    } = location.state;
    return (
        <div>
            <h2>{title}</h2>
            <p>{overview}</p>
            <p>{vote_average}</p>
            <p>{release_date}</p>
            <img src={poster_url} alt={title} title={title}/>
        </div>
    );
};

export default Detail;
