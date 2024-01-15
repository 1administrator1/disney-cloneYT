import axios from "axios";

 const movieBaseUrl='https://api.themoviedb.org/3'
 const api_key='3e12a6a030dd3bd40a15ef312d7ea7c4'
const movieByGeneralBaseUrl='https://api.themoviedb.org/3/discover/movie?api_key=3e12a6a030dd3bd40a15ef312d7ea7c4'


//https://api.themoviedb.org/3/trending/all/day?api_key=3e12a6a030dd3bd40a15ef312d7ea7c4

 const getTrendingVideos=axios.get(movieBaseUrl+
   "/trending/movie/day?api_key="+api_key);
   const getMovieByGenreId=(id) =>
   axios.get(movieByGeneralBaseUrl+"&with_genres="+id)

 export default{
    getTrendingVideos,
    getMovieByGenreId
 }