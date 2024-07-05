import { Link } from "react-router-dom"
import { LoginForm } from "../../components/Auth/LoginForm/LoginForm"

export const Login = () => {


    return (
        <section className="gradient-custom">
            <div className="container py-5 pb-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6">
                        <div className="card bg-dark text-white radius">
                            <div className="card-body px-5 text-center">
                            <LoginForm />
                <Link to='/home'>Iniciar sesion</Link>
                <Link to='/registro' className="sm-5"> registrate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}