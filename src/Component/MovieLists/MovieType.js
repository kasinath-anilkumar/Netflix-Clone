import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../Constants/constants';
import './MovieType.css';

function MovieType() {

    const [genresList, setGenresList] = useState([]);


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`)
            .then((response) => {
                if (response.data.genres && response.data.genres.length > 0) {
                    console.log(response.data.genres);
                    setGenresList(response.data.genres);
                }
            })
            .catch((error) => {
                console.error('Error fetching genres list:', error);
            });
    }, []);

    return (
        <div className='container'>
            <div className="title">
            Genres
            </div>
            <div className="Movie-card">
            <div className="genres-list">
                {genresList.map((genre) => (
                    <div key={genre.id} className="genre">{genre.name}</div>
                ))}
            </div>
            </div>
            
        </div>
    );
}
export default MovieType;
