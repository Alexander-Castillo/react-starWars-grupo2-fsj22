
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../../firebase/config";
import { useNavigate } from "react-router-dom";

export const useHandlerRegister = () => {
    const navegar = useNavigate();
    const onSubmitRegister = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.pass)
            const user = userCredential.user;
            // ingresar datos extras de usuario adicionales a  una coleccion llamada usuarios
            await setDoc(doc(db, 'usuarios', user.uid), {
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
        } catch (error) {
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

        //console.log(data)
    }
    return {onSubmitRegister}
}