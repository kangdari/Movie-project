import React from 'react';
import styled from 'styled-components';

const SearchTemplateBlock = styled.div`
    width: 1080px;
    margin: 0 auto;
`;


const SearchTemplate = ({children}) => {
    return (
        <SearchTemplateBlock>
            {children}
        </SearchTemplateBlock>
    );
};

export default SearchTemplate;