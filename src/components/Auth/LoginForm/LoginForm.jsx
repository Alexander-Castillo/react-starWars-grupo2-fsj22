import { warsLogin } from "../../../assets/images/imagesExport"
import { InputTemplate } from "../../Templates/Inputs/InputsTemplate"
import { Link } from "react-router-dom"
import { useLoginForm } from "../hook/useLoginForm"
import { useHandlerLogin } from "../components/Button/onSubmitLoginForm"


export const LoginForm =()=>{

    const { register, handleSubmit, errors, trigger } = useLoginForm();

    const { onSubmitLoginForm } = useHandlerLogin()
    
    return (
        <form onSubmit={handleSubmit(onSubmitLoginForm)}  className="need-validation" noValidate>
            <img src={warsLogin} alt="" className="wars" />
            <div className="mb-md-5 mt-md-4 pb-2 text-start">
                <p className="text-white-50 mb-5 text-center">Completa tus datos para ingresar!</p>
                <InputTemplate label="Introduce tu Holocomunicador registrado:" name="email" placeholder={'ejemplo@rebelion.com'} register={register} errors={errors} trigger={trigger} />
                <InputTemplate label='Escribe tu código de seguridad:' name="pass" type="password" register={register} errors={errors} trigger={trigger} />
            </div>
            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Iniciar Sesión</button>
            <div className="pb-4 pt-4 p-2">
                <p className="mb-0">Aun no eres de la Resistencia? <Link to='/registro' className="text-white-50 fw-bold">Registrate</Link></p>
            </div>
        </form>
    )
}