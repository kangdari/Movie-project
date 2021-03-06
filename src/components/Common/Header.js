import React, { useState, useCallback } from 'react';
import './Header.css';
import * as movieApi from '../../lib/movieAPI';
import { Link } from 'react-router-dom';
import { searchMoviesId } from '../../module/search';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    // 검색 결과
    const [data, setData] = useState([]);
    const [text, setText] = useState('');

    const callAPI = async title => {
        const res = await movieApi.searchMovies(title);
        setData(res.data.results);
    };

    const onChange = useCallback(e => {
        const value = e.target.value;
        if (value.length > 1) {
            callAPI(value);
        }
        setText(value);
    }, []); // 컴포넌트 첫 렌더링 시 생성

    const selectText = (value, id) => {
        setText(value);
        dispatch(searchMoviesId(id)); // info에 저장
        setData();
        setText('');
    };

    const renderTitle = () => {
        if (!data) {
            return null;
        }
        return (
            <div className="MovieList">
                {data.map(movie => (
                    <Link to={`/`} key={movie.id} >
                        <p
                            onClick={() => selectText(movie.title, movie.id)}
                        >
                            {movie.title}
                        </p>
                    </Link>
                ))}
            </div>
        );
    };

    return (
        <div className="Header">
            <div className="logoBox">
                {/* <Link to="/"> */}
                    <img
                        src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg"
                        alt="img"
                    />
                {/* </Link> */}
            </div>
            <div className="listBox">
                <Link to="/movieList">상영 영화</Link>
            </div>
            <div className="searchBox">
                <input
                    value={text}
                    onChange={onChange}
                    type="text"
                    placeholder="Search Movie..."
                />
                {renderTitle()}
            </div>
        </div>
    );
};

export default Header;
