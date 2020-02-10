import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchMovies } from '../module/search';
import SearchForm from '../components/search/SearchForm';
import SearchResult from '../components/search/SearchResult';
import SearchTemplate from '../components/search/SearchTemplate';


const SearchContainer = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => ({
        data: state.search.data,
        error: state.search.error,
    }));

    // 검색 버튼 , 여기서 searchMovie(title) 함수 호출
    const onSubmit = () => {
        dispatch(searchMovies(input)); // input = title
        setInput(''); // 공백 처리
    };

    const onChange = e => {
        e.preventDefault(); // 새로고침 방지
        // dispatch(searchMovies(input)); // input = title
        setInput(e.target.value);
    };

    return (
        <SearchTemplate>
            <SearchForm
                data={data}
                error={error}
                input={input}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            <SearchResult data={data}/>
        </SearchTemplate>
    );
    /* 결과 폼 */
};

export default SearchContainer;
