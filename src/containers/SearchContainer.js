import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchMovies } from '../module/search';
import { searchMoviesId } from '../module/search';
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

    // 영화
    const getMovieInfo = id=>{
        dispatch(searchMoviesId(id))
    }

    //MovieListContainer.js
    // 컴포넌트에서 id값을 가져와 상위 컴포넌트에 전달 하여 컨테이너 컴포넌트에서 id값으로 
    // 스토어의 함수를 dispatch (searchMoviesID)
    // onClick={() => {
    //     onMovieID(value.id);
    //   }}

    return (
        <SearchTemplate>
            <SearchForm
                data={data}
                error={error}
                input={input}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            {/* 영화 자세한 정보를 가져오는 함수 전달 (id로 검색) */}
            <SearchResult data={data} getMovieInfo={getMovieInfo}/>
        </SearchTemplate>
    );
    /* 결과 폼 */
};

export default SearchContainer;
