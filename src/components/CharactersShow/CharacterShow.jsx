import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';



export const CharacterShow = () => {
    const [characters, setCharacters] = useState([]);

    const getCharacters = () => {
        axios.get("https://swapi.dev/api/people/")
            .then((response) => {
                setCharacters(response.data.results);
                console.log(response.data.results);
            })
            .catch((error) => {
                console.log("Error: " + error);
            });
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return(
        <div className="container mt-4">
            <div className="row">
                {characters.map((character, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text"><strong>Height:</strong> {character.height}</p>
                                <p className="card-text"><strong>Mass:</strong> {character.mass}</p>
                                <p className="card-text"><strong>Hair Color:</strong> {character.hair_color}</p>
                                <p className="card-text"><strong>Skin Color:</strong> {character.skin_color}</p>

                                <button className="btn btn-outline-danger">
                                      <FontAwesomeIcon icon={faHeart} /> Like
                                </button>
                                <button className="btn btn-outline-warning">
                                       <FontAwesomeIcon icon={faStar} /> Favorite
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};