import { Link } from "react-router-dom"
import { LoginForm } from "../../components/Auth/LoginForm/LoginForm"

export const Login = () => {


    return (
        <div className="card border-primary mb-3">
            <div className="card-header">Iniciar Sesion</div>
            <div className="card-body text-primary">
                <LoginForm />
                <Link to='/home'>Iniciar sesion</Link>
                <Link to='/registro' className="sm-5"> registrate</Link>
            </div>
        </div>
    )
}