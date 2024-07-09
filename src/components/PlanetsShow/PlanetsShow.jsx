import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FavoriteButton } from '../Button/FavoriteButton';

export const PlanetsShow = () => {
    const [planets, setPlanets] = useState([]);

    const getPlanets = async () => {
        try {
            const response = await axios.get("https://swapi.dev/api/planets/");
            const planetsData = response.data.results;
            console.log(planetsData);

            const planetsWithResidents = await Promise.all(planetsData.map(async (planet) => {
                const residentRequests = planet.residents.map(url => axios.get(url));
                const residents = await Promise.all(residentRequests);
                return {
                    ...planet,
                    residents: residents.map(res => res.data)
                };
            }));

            setPlanets(planetsWithResidents);
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    useEffect(() => {
        getPlanets();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {planets.map((planet, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text"><strong>Climate:</strong> {planet.climate}</p>
                                <p className="card-text"><strong>Diameter:</strong> {planet.diameter}</p>
                                <p className="card-text"><strong>Gravity:</strong> {planet.gravity}</p>
                                <p className="card-text"><strong>Terrain:</strong> {planet.terrain}</p>
                                <p className="card-text"><strong>Population:</strong> {planet.population}</p>
                                <p className="card-text"><strong>Orbital Period:</strong> {planet.orbital_period}</p>
                                <p className="card-text"><strong>Rotation Period:</strong> {planet.rotation_period}</p>
                                <h6>Residents:</h6>
                                <ul>
                                    {planet.residents.length > 0 ? (
                                        planet.residents.map((resident, idx) => (
                                            <li key={idx}>{resident.name}</li>
                                        ))
                                    ) : (
                                        <li>No known residents</li>
                                    )}
                                </ul>

                                <FavoriteButton item={planet} />

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
