import axios from 'axios';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { API_KEY } from "../../Constants/constants";
import './Posters.css';

function Posters(props) {
  const [posters, setPosters] = useState([]);
  const [urlId, setUrlId] = useState(''); 

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        if (response.data.results.length !== 0) {
          console.log("Action Movie Data", response.data.results);
          setPosters(response.data.results);
        }
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, [props.url]);

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

  const opts = {
    height: 300,
    width: '100%',
    playerVars: {
    autoplay: 1,
    },
  };

  return (
    <div className='Posters'>
      <div className="Posters">
        <div className="PosterTitle" >
          <h2>{props.title}</h2>
        </div>
        <div className="PosterCard">
          {posters.map((movie, index) => (
            <img
              onClick={() => handleMovie(movie.id)}
              className={props.isSmall ? 'PosterImageOther' : 'PosterImage'}
              key={index}
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt="Action Movies"
            />
          ))}
        </div>
        {urlId !== '' && <YouTube videoId={urlId} opts={opts} />}
      </div>
    </div>
  )
}

export default Posters;
