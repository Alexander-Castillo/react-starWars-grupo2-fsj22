import { useMemo, useState } from "react";
import { useFavoritos } from "../../Context/FavoriteContext";


export const FavoriteSelectionShow =()=>{

    const { favorites } = useFavoritos();
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredFavorites = useMemo(() => {
        return favorites.filter(item => {
            if (filter === 'all') return true;
            if (filter === 'planets' && item.climate) return true;
            if (filter === 'characters' && item.height) return true;
            if (filter === 'films' && item.episode_id) return true;
            return false;
        });
    }, [favorites, filter]);

    return {
        filter,
        filteredFavorites,
        handleFilterChange
    };
}