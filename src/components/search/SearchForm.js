import React, { useState } from 'react';
import styled from 'styled-components';
import * as movieAPI from '../../lib/movieAPI';
import SearchResult from './SearchResult';

const SearchFormBlock = styled.div``;

const SearchForm = () => {
    const [result, setResult] = useState();
    const [input, setInput] = useState('');

    // const whiteSpace = (input) =>{
    //     const text = input.replace(/\s/gi, ''); // 문자열 내 공백 제거
    //     // \s 는 정규식에서 공백을 뜻 함
    //     return text;
    // }

    const onSubmit = async e => {
        e.preventDefault();
        // const white_text = whiteSpace(input); // 공백 제거 
        const res = await movieAPI.searchMovies(input);
        setResult(res.data.results);
        setInput('');
    };

    const onChange = async e => {
        setInput(e.target.value);

        // 입력과 동시에 검색
        // const res = await movieAPI.searchMovies(input);
        // setResult(res.data.results);
    }

    return (
        <SearchFormBlock>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={input} />
                <button type="submit">검색</button>
            </form>
            <div>{!result ? 'null' : <SearchResult result={result}/>}</div>
        </SearchFormBlock>
    );
};

export default SearchForm;