import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavoritos } from "../../Context/FavoriteContext"
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
// Componente que representa un botón para agregar o quitar favoritos
export const FavoriteButton = ({ item }) => {
    // Obtener el contexto de favoritos
    const { favorites, addFavorite, removeFavorite } = useFavoritos();

    // Verificar si el ítem ya está en favoritos
    const isFavorite = favorites.some(fav => fav.url === item.url);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(item);
        } else {
            addFavorite(item);
        }
    };

    return (
        <button className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`} onClick={handleFavoriteClick}>
            {isFavorite ? (
                <>
                    <FontAwesomeIcon icon={faTrash} /> Quitar de Favoritos
                </>
            ) : (
                <>
                    <FontAwesomeIcon icon={faStar} /> Agregar a Favoritos
                </>
            )}
        </button>
    );
};