import axios from 'axios';

const key = "1dc302fada33a80e202370893f1759b4";
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ko&page=1&region=KR`; // 현재 상영 영화 정보 KR

// 상영중인 영화 리스트 1페이지(20개)
export const getMovies = async () =>{
    let res = await axios.get(`${url}`);
    return res;
}

// 영화 title로 검색 API
export const searchMovies = async (title) =>{
    // let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title}`);
    let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title}&language=ko`);
    return res;
}


// 영화 id로 검색 API
export const searchMoviesId = async (id) =>{
    // let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`);
    let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=ko`);
    return res;
}


