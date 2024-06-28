import { PlanetsShow } from "../../components/PlanetsShow/PlanetsShow"

export const Planets = () => {


    return (
        <div className="card border-primary mb-3">
            <div className="card-header">Planetas</div>
            <div className="card-body text-primary">
                <PlanetsShow />
            </div>
        </div>
    )
}