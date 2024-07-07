import { LoginForm } from "../../components/Auth/LoginForm/LoginForm"

export const Login = () => {


    return (
        <section className="vh-100 fondo">
            <div className="container py-5 pb-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6">
                        <div className="card text-white radius auth-container">
                            <div className="card-body px-5 text-center">
                            <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}