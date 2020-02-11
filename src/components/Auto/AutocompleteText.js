import React, { useState, useEffect } from 'react';
import './Autocomplete.css';
import * as movieApi from '../../lib/movieAPI';

import { searchMoviesId } from '../../module/search';
import { useDispatch } from 'react-redux';

const AutocompleteText = () => {
    const dispatch = useDispatch();

    // 검색 결과
    const [data, setData] = useState([]);
    const [text, setText] = useState('');

    const callAPI = async title => {
        const res = await movieApi.searchMovies(title);
        setData(res.data.results);
        
    };

    const onChange = e => {
        const value = e.target.value;
        if(value.length > 0){
            callAPI(value);
        }
        setText(value);    
    };

    const selectText = (value, id) =>{
        setText(value);
        dispatch(searchMoviesId(id)) // info에 저장
        setData();
        setText('');
    }

    const renderTitle = () =>{
        return(
            <ul>
                {data.map(movie => (
                    <li key={movie.id} tabIndex="0" onClick={()=>selectText(movie.title, movie.id)} >{movie.title}</li>
                ))}
            </ul>
        )
    }

    return (
        <div className="AutoCompleteText">
                <input value={text} onChange={onChange} type="text" />
                {data && renderTitle()}
        </div>
    );
};

export default AutocompleteText;
