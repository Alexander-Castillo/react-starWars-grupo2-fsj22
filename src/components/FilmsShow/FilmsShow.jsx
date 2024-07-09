import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FavoriteButton } from '../Button/FavoriteButton';



export const FilmsShow = () => {
    const [films, setFilms] = useState([]);

    const getFilms = () => {
        axios.get("https://swapi.dev/api/films/")
            .then((response) => {
                setFilms(response.data.results);
                console.log(response.data.results);
            })
            .catch((error) => {
                console.log("Error: " + error);
            });
    };

    useEffect(() => {
        getFilms();
    }, []);

    return(
        <div className="container mt-4">
            <div className="row">
                {films.map((films, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{films.title}</h5>
                                <p className="card-text"><strong>episodes:</strong> {films.episode_id}</p>
                                <p className="card-text"><strong>Director:</strong> {films.director}</p>
                                <p className="card-text"><strong>Producer:</strong> {films.producer}</p>
                                <p className="card-text"><strong>Release date:</strong> {films.release_date}</p>

                                <FavoriteButton item={films} />

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};