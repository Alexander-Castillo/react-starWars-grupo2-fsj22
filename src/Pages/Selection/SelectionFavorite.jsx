import { FavoriteSelectionShow } from "../../components/FavoriteSelection/FavoriteSelection"

export const SelectionFavorite = () => {


    return (
        <div className="card border-primary mb-3">
            <div className="card-header">Personajes</div>
            <div className="card-body text-primary">
                <FavoriteSelectionShow />
            </div>
        </div>
    )
}