import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchMovies } from '../module/search';
import { searchMoviesId } from '../module/search';

const Search = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => ({
        data: state.search.data,
        error: state.search.error,
    }));

    const onChage = e => {
        setInput(e.target.value);
    };

    useEffect(()=>{
        dispatch(searchMovies(input));
    }, [input])

    const title = (data) =>{
        const titleList = data.map(movie => <p>{movie.title}</p>)
        return titleList
    }
    console.log(data)

    return (
        <div className="container">
            <div className="serach_container">
                <div className="logo"></div>
                <div className="search_form">
                    <form className="form">
                        <input type="text" placeholder="영화 검색" onChange={onChage}/>
                            {/*  */}
                            {!data ? null : title(data)}
                    </form>
                </div>
            </div>
            <div className="content_container"></div>
        </div>
    );
};

export default Search;
