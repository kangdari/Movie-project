import React from 'react';
import styled from 'styled-components';

const SearchTemplateBlock = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction : column;

`;

const SearchTemplate = ({children}) => {
    return (
        <SearchTemplateBlock>
            {children}
        </SearchTemplateBlock>
    );
};

export default SearchTemplate;