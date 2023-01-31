
import axios from '../../axiosMain/localAxios';
import { useEffect, useState } from 'react';
import './banner.css'
import userrequests from '../../axiosMain/request';

const Banner = () =>{
    const [movie, setMovies] = useState([])
    useEffect(()=>{

        const fetchMovies = async() =>{

        const response = await axios.get(userrequests.fetchNetflixOriginals)
        setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length-1)])
        }
        fetchMovies()
    },[])

    const description = movie.overview?movie.overview.split("").slice(0,200).join(""):"";
    return (
        <div className="banner" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
         <div className="banner-content">
           <h1>{movie.name}</h1>
           <div className="banner-button">
            <button>Play</button>
            <button>My list</button>
           </div>
           <div className="description">
            <p>
            {description}
            </p>
           </div>
         </div>
         <div className='shadow-bottom'></div>
        </div>
    )
}

export default Banner;