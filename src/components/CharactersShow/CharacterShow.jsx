import axios from 'axios';
import { useEffect, useState } from 'react';
import { FavoriteButton } from '../Button/FavoriteButton';



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

                                <FavoriteButton item={character}/>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};