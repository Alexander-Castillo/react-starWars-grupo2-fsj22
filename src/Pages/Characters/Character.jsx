import { CharacterShow } from "../../components/CharactersShow/CharacterShow"

export const Character = () => {


    return (
        <div className="card border-primary mb-3">
            <div className="card-header">Personajes</div>
            <div className="card-body text-primary">
                <CharacterShow />
            </div>
        </div>
    )
}