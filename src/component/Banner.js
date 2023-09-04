import { useState, useEffect } from 'react';
import instance from '../instance';
import './Banner.css';
function Banner({ fetchUrl }) {
    const [movies, setMovies] = useState([])
    async function fetchdata() {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
    }
    useEffect(() => {
        fetchdata()
    }, [])
    console.log(movies);
    //function truncate(str,n){
      //return  str.length>n?str.ubstr(0,n-1)+'...':str
    //}


    return (
        <header className='bannerHead'
style={{
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
    backgroundSize:"cover",
    backgroundPosition:"center"
}}
>
    <div className='banner_content'>
        <h1 className='banner_title'> {movies.name}</h1>
        <h2 className='banner_dis'>{movies.overview}</h2>
    </div>
        </header>
    )
}

export default Banner