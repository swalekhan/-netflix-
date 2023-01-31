

import axios from '../../axiosMain/localAxios';
import { useEffect, useState } from 'react';
import './row.css'

const Row = ({ title, isLarge, url }) => {
    const [moveis, setMovies] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const data = await axios.get(url)
            setMovies(data.data.results)
        }
        fetch()
    }, [url])

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="poster">
                {moveis.map((e) => (
                    <img src={`https://image.tmdb.org/t/p/original/${isLarge ? e.poster_path : e.backdrop_path}`} alt="pic" className={`poster-pic ${isLarge && "big-poster"}`} key={e.id}/>
                ))}
            </div>
        </div>

    )
}

export default Row;