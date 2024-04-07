import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { API_KEY } from '../../Constants/constants';
import axios from '../../axios/axios';
import './Banner.css';

function Banner() {
  const [tvShow, setTvShow] = useState(null);
  const [urlId, setUrlId] = useState(''); 

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results && response.data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.data.results.length);
          const result = response.data.results[randomIndex]; 
          setTvShow({
            name: result.original_name,
            desc: result.overview,
            poster: result.backdrop_path,
            id:result.id
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const opts = {
    height: 300,
    width: '100%',
    playerVars: {
    autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log('Fetching trailer for movie ID:', id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        console.log('Trailer API response:', response);
        if (response.data.results.length > 0) {
          setUrlId(response.data.results[0].key);
        } else {
          console.log('No trailer found for this movie.');
          setUrlId(''); 
        }
      })
      .catch(error => {
        console.error('Error fetching trailer:', error);
      });
  };

  return (
    <div className='Banner' style={{backgroundImage:`url(${tvShow ? `https://image.tmdb.org/t/p/original/${tvShow.poster}` : ""})`}} >
        <div className='Content'>
            <h1 className='tittle' >{tvShow && tvShow.name}</h1>
            <div className='BannerButtons'>
                <button onClick={() => handleMovie(tvShow.id)} className='Button'>Start Watching</button>
                <button onClick={() => handleMovie(tvShow.id)} className='Button'>Play Trailer</button>
            </div>
            <div className='Desc'>
            <h1 className='Description'>{tvShow && tvShow.desc}</h1>
            </div>    
        </div>
        {urlId !== '' && <YouTube videoId={urlId} opts={opts} />}
        <div className="fadeBottom"></div>
    </div>
  )
}

export default Banner;
