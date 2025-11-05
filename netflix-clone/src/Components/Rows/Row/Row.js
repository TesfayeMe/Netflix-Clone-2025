import React, {useState, useEffect} from 'react'
import './row.css';
import axios from '../../../utils/axios';
import movieTrailers from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() =>{
        (async () =>{
            try{
                console.log("Fetch URL:", fetchUrl);
                const request = await axios.get(fetchUrl);
                console.log(request);
                setMovies(request.data.results);

            
            }
            catch (error)
            {
                console.log("Error fetching movies:", error);}
        })()
    }, [fetchUrl]);
    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl('');
        } else {
            movieTrailers(movie?.name || movie?.title || movie?.original_name)
            .then((url) =>{
                console.log(url);

                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'));

            })
            // .catch((error) => console.log("Error finding trailer:", error));
        }
    };
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {movies?.map((movie) => (
                <img 
                key={movie.id}
                onClick={() => handleClick (movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
            ))}
            <div style={{padding: '40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
        </div>
        
    </div>
  )
}

export default Row