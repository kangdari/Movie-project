import React from 'react';
import AutocompleteText from '../components/Auto/AutocompleteText';
import MovieDetailContainer from '../containers/MovieDetailContainer';

const Search = () => {
    return (
        <>
            <AutocompleteText />
            <MovieDetailContainer />
        </>
    );
};

export default Search;