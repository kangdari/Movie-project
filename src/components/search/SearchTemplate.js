import React from 'react';
import styled from 'styled-components';

const SearchTemplateBlock = styled.div`
`;

const Container = styled.div`
`;


const SearchTemplate = ({children}) => {
    return (
        <SearchTemplateBlock>
            <Container>
                {children}
            </Container>
        </SearchTemplateBlock>
    );
};

export default SearchTemplate;