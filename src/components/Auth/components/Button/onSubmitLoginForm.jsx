import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../../../firebase/config"
import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export const useHandlerLogin = () => {
    const navegar = useNavigate();
    const onSubmitLoginForm = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.pass);
            const user = userCredential.user;
            const docRef = doc(db, 'usuarios', user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                Swal.fire({
                    icon: 'success',
                    title: 'Codigo secreto correcto:',
                    text: 'Bienvenido joven Padawan, que la Fuerza te acompañe.'
                });
                navegar('/home');
            }else{
                throw new Error('Usuario no encontrado en la base de datos.');
            }
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            //manejo de errores especificos
            let errorMsjShow = '';

            switch (errorCode) {
                case 'auth/invalid-email':
                    errorMsjShow = 'La dirección de correo electrónico no es válida.';
                    break;
                case 'auth/user-disabled':
                    errorMsjShow = 'El usuario ha sido deshabilitado.';
                    break;
                case 'auth/user-not-found':
                    errorMsjShow = 'No se encontró ningún usuario con este correo electrónico.';
                    break;
                case 'auth/wrong-password':
                    errorMsjShow = 'La contraseña es incorrecta.';
                    break;
                case 'auth/network-request-failed':
                    errorMsjShow = 'Hubo un problema de red. Inténtalo de nuevo.';
                    break;
                case 'auth/too-many-requests':
                    errorMsjShow = 'Demasiados intentos. Inténtalo más tarde.';
                    break;
                case 'auth/operation-not-allowed':
                    errorMsjShow = 'Operación no permitida. Contacta al administrador.';
                    break;
                case 'auth/weak-password':
                    errorMsjShow = 'La contraseña es demasiado débil.';
                    break;
                case 'auth/email-already-in-use':
                    errorMsjShow = 'El correo electrónico ya está en uso por otra cuenta.';
                    break;
                default:
                    errorMsjShow = errorMessage;
                    break;
            }

            //mensajes de alerta
            Swal.fire({
                icon: 'error',
                title: 'Error al iniciar sesión',
                text: errorMsjShow,
            });
        }
}
    return {onSubmitLoginForm}
}