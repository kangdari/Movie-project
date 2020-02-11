import React from 'react';
import styled from 'styled-components';

const SearchFormBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items; center;
    width : 100%;
    height: 5rem;
    padding: 2rem;

    input{
        // appearance: none;
        border: none;
        outline: none;
        background: transparent;
        border-bottom: 1px solid black;
        padding-left: 0.7rem;
        padding-bottom: 0.6rem;
        width: 200px;
        font-size: 1rem;
        font-weight: 800;
    }
`;

const SearchForm = ({ data, error, onChange, input, onSubmit }) => {
    return (
        <SearchFormBlock>
            <form onSubmit={onSubmit}>
                <span>
                    <input value={input} onChange={onChange} placeholder="영화명 검색..."/>
                    {/* 검색어 미리 보기 기능 */}
                    {/* { && input && data && <div>{data.map(movie=> {
                        return <p>{movie.title}</p>
                    })}</div>} */}
                </span>
            </form>
        </SearchFormBlock>
    );
};

export default SearchForm;
