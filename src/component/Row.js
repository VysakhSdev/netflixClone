import { useState,useEffect } from 'react';
import instance from '../instance';
import './Row.css';
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl}) {
    const[movies,setMovies]=useState([])
    async function fetchdata(){
    const request = await   instance.get(fetchUrl)
setMovies(request.data.results);
    }
    useEffect(()=>{
        fetchdata()
    },[])
    console.log(movies);
  return (
    <div className='row'>
     <h2>{title}</h2>
     <div className='posters'>
        {
        movies.map(movie=>(
<img className='poster'
 src={`${base_url}${movie.backdrop_path}`}
 alt={movie.name}
 />
 ))
}
</div>
</div>
  )
}

export default Row