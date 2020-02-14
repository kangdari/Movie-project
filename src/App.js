import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
// import AutocompleteText from './components/Auto/AutocompleteText';
// import MovieDetailContainer from './containers/MovieDetailContainer';

import MovieList from './routes/MovieList';
import Search from './routes/Search';

const App = () => {
    return (
        <div className="App">
            <div className="App-container">
                {/* 홈 페이지 + 검색 기능 */}
                <Route path='/' component={Search} exact/>
                {/* 상영 영화, 개봉 예정 영화 리스트 페이지 */}
                <Route path='/movieList' component={MovieList} />
            </div>
        </div>
    );
};

export default App;