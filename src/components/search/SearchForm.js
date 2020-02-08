import React from 'react';
import styled from 'styled-components';

const SearchFormBlock = styled.div`
    
    margin-bottom : 2rem;
`;

const SearchForm = ({ data, error, onChange, input, onSubmit }) => {
    return (
        <SearchFormBlock>
            <form onSubmit={onSubmit}>
                <span>
                    <input value={input} onChange={onChange} />
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
