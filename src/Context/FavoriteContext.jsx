import { createContext, useContext, useEffect, useState } from "react";
//crear contex para favoritos
const FavoriteContext = createContext();

//proveedor de contexto de fav
export const FavoritesProvider =({children})=>{

    const [favorites, setFavorites] = useState([]);
     // Cargar favoritos desde localStorage al montar el componente
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    // Guardar favoritos en localStorage cuando cambian
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    //function for adding un item a los favoritos
    const addFavorite =(item)=>{
        setFavorites((prev)=>[...prev, item]);
    };
    // function to remove un item from favorites
    const removeFavorite =(item)=>{
        setFavorites(favorites.filter(fav => fav.url !== item.url));
    };
    //valor del contex, incluyendo los fav y las func para manejarlos
    const value = {
        favorites, addFavorite, removeFavorite
    };
    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    );
};

//hook para usar el contex para favoritos
export const useFavoritos =()=> useContext(FavoriteContext);
