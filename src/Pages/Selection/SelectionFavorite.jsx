import { FavoriteButton } from "../../components/Button/FavoriteButton";
import { FavoriteSelectionShow } from "../../components/FavoriteSelection/FavoriteSelection"

export const SelectionFavorite = () => {

    const { filter, filteredFavorites, handleFilterChange } = FavoriteSelectionShow();

    return (
        <div className="container mt-4">
            <h2>Your Favorites</h2>
            <div className="form-group">
                <label htmlFor="filter">Filter by:</label>
                <select id="filter" className="form-control" value={filter} onChange={handleFilterChange}>
                    <option value="all">Mis favoritos</option>
                    <option value="planets">Planetas</option>
                    <option value="characters">Personajes</option>
                    <option value="films">Films</option>
                </select>
            </div>
            <div className="row mt-4">
                {filteredFavorites.map((item, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                {item.title ? (
                                    <h5 className="card-title">{item.title}</h5>
                                ) : (
                                    <h5 className="card-title">{item.name}</h5>
                                )}
                                {item.climate && <p className="card-text"><strong>Climate:</strong> {item.climate}</p>}
                                {item.diameter && <p className="card-text"><strong>Diameter:</strong> {item.diameter}</p>}
                                {item.gravity && <p className="card-text"><strong>Gravity:</strong> {item.gravity}</p>}
                                {item.terrain && <p className="card-text"><strong>Terrain:</strong> {item.terrain}</p>}
                                {item.population && <p className="card-text"><strong>Population:</strong> {item.population}</p>}
                                {item.orbital_period && <p className="card-text"><strong>Orbital Period:</strong> {item.orbital_period}</p>}
                                {item.rotation_period && <p className="card-text"><strong>Rotation Period:</strong> {item.rotation_period}</p>}
                                {item.height && <p className="card-text"><strong>Height:</strong> {item.height}</p>}
                                {item.mass && <p className="card-text"><strong>Mass:</strong> {item.mass}</p>}
                                {item.hair_color && <p className="card-text"><strong>Hair Color:</strong> {item.hair_color}</p>}
                                {item.skin_color && <p className="card-text"><strong>Skin Color:</strong> {item.skin_color}</p>}
                                {item.episode_id && <p className="card-text"><strong>Episode:</strong> {item.episode_id}</p>}
                                {item.director && <p className="card-text"><strong>Director:</strong> {item.director}</p>}
                                {item.producer && <p className="card-text"><strong>Producer:</strong> {item.producer}</p>}
                                {item.release_date && <p className="card-text"><strong>Release Date:</strong> {item.release_date}</p>}
                                <FavoriteButton item={item}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}