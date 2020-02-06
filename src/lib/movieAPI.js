import axios from 'axios';

const key = "1dc302fada33a80e202370893f1759b4";
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ko&page=1&region=KR`; // 현재 상영 영화 정보 KR

export const getMovies = async () =>{
    let res = await axios.get(`${url}`);
    console.log(res.data)
    return res;
}
