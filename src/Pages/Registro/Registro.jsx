import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/Auth/RegisterForm/RegisterForm"

export const Registro = () => {


    return (
        <div className="card border-primary mb-3">
            <div className="card-header">Personajes</div>
            <div className="card-body text-primary">
                <RegisterForm />
                <Link to='/login'>Ir al login</Link>
                <Link to='/login' className="sm-5"> registrate</Link>
            </div>
        </div>
    )
}