import { Link, useNavigate } from "react-router-dom";
import { InputTemplate } from "../../Templates/Inputs/InputsTemplate"
import { useRegisterForm } from "../hook/useForm"
import { auth, db } from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const RegisterForm = () => {

    const navegar = useNavigate();

    const { register, handleSubmit, errors, trigger, validPass } = useRegisterForm();


    const onSubmitRegister = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.pass)
            const user = userCredential.user;
            // ingresar datos extras de usuario adicionales a  una coleccion llamada usuarios
            await setDoc(doc(db,'usuarios', user.uid),{
                user: data.user,
                email: data.email
            });
            //alert de usuario registrado con exito
            Swal.fire({
                icon: 'success',
                title: '¡Bienvenido a la Alianza Rebelde!',
                text: 'Tu registro ha sido exitoso. ¡Que la Fuerza te acompañe!',
            });

            navegar('/login');
        } catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            // manejo de mensajes de errores especificos
            let ErrorMsjToShow = '';
            switch (errorCode) {
                case 'auth/email-already-in-use':
                ErrorMsjToShow = 'El correo electrónico ya está en uso.';
                break;
            case 'auth/invalid-email':
                ErrorMsjToShow = 'El correo electrónico no es válido.';
                break;
            case 'auth/weak-password':
                ErrorMsjToShow = 'La contraseña es demasiado débil.';
                break;
            case 'auth/operation-not-allowed':
                ErrorMsjToShow = 'Operación no permitida. Contacta al administrador.';
                break;
            case 'auth/network-request-failed':
                ErrorMsjToShow = 'Error de red. Por favor, inténtalo de nuevo.';
                break;
            default:
                ErrorMsjToShow = errorMessage;
                break;
            }
            //mostrar el error en alerts
            Swal.fire({
                icon: 'error',
                title: 'Error en el registro a la Resistencia',
                text: ErrorMsjToShow,
                confirmButtonText: 'Entendido'
            });
            navegar('/registro');
            console.error('error en el registro', error)
        }

        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmitRegister)} className="needs-validation" noValidate>
            <div className="mb-md-5 mt-md-5 text-start">
                <h2 className="fw-bold mb-2 text-uppercase text-center">
                    star wars!
                </h2>
                <p className="text-white-50 mb-5 text-center">¡Completa tu información para unirte a la Orden Jedi!</p>
                <InputTemplate label="Escribe tu nombre joven Padawan:" name="user" placeholder={'Ejemplo: Luke Skywalker'} register={register} errors={errors} trigger={trigger} />
                <InputTemplate label="Introduce tu holocomunicador para recibir mensajes de la resistencia:" name="email" placeholder={'ejemplo@rebelion.gal'} register={register} errors={errors} trigger={trigger} />
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
            <div className="pb-5 p-2">
                <p className="mb-0">Ya eres un Jedi? <Link to='/login' className="text-white-50 fw-bold">Inicia Sesión</Link></p>
            </div>
        </form>
    )
}