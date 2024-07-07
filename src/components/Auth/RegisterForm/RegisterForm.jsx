import { Link } from "react-router-dom";
import { InputTemplate } from "../../Templates/Inputs/InputsTemplate"
import { useRegisterForm } from "../hook/useForm"
import {  useHandlerRegister } from "../components/Button/onSubmitRegisterForm";
import '../../../assets/css/formularios.css'
import { wars } from "../../../assets/images/imagesExport";

export const RegisterForm = () => {

    const { register, handleSubmit, errors, trigger, validPass } = useRegisterForm();

    const { onSubmitRegister } = useHandlerRegister()

    return (
        <form onSubmit={handleSubmit(onSubmitRegister)} className="needs-validation" noValidate>
            <img src={wars} alt="Star Wars" className="wars" />
            <div className="mb-md-5 mt-md-2 text-start">
                <p className="text-white-50 mb-5 text-center">¡Completa tu información para unirte a la Orden Jedi!</p>
                <InputTemplate label="Escribe tu nombre joven Padawan:" name="user" placeholder={'Ejemplo: Luke Skywalker'} register={register} errors={errors} trigger={trigger} />
                <InputTemplate label="Introduce tu holocomunicador para recibir mensajes de la resistencia:" name="email" placeholder={'ejemplo@rebelion.com'} register={register} errors={errors} trigger={trigger} />
                <InputTemplate label="Establece tu código secreto para proteger tus misiones:" name="pass" type="password" register={register} errors={errors} trigger={trigger} />
                <ul className="text-white text-end list-unstyled">
                    <li className={validPass.specialChar ? 'text-success' : ''}>
                        Al menos un carácter especial {validPass.specialChar ? '✔' : '❌'}
                    </li>
                    <li className={validPass.uppercase ? 'text-success' : ''}>
                        Al menos una letra mayúscula {validPass.uppercase ? '✔' : '❌'}
                    </li>
                    <li className={validPass.lowercase ? 'text-success' : ''}>
                        Al menos una letra minúscula {validPass.lowercase ? '✔' : '❌'}
                    </li>
                    <li className={validPass.number ? 'text-success' : ''}>
                        Al menos un número {validPass.number ? '✔' : '❌'}
                    </li>
                    <li className={validPass.length ? 'text-success' : ''}>
                        Al menos 8 caracteres {validPass.length ? '✔' : '❌'}
                    </li>
                </ul>
            </div>
            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Unirse a la resistencia</button>
            <div className="pb-4 pt-4 p-2">
                <p className="mb-0">Ya eres un Jedi? <Link to='/login' className="text-white-50 fw-bold">Inicia Sesión</Link></p>
            </div>
        </form>
    )
}