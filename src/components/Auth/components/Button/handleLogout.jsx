import { signOut } from "firebase/auth"
import { auth } from "../../../../firebase/config"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const LogOut=()=>{
    const navegar = useNavigate();
    const handleLogout = async () => {
    
    const result = await Swal.fire({
        icon: 'question',
        title: 'Deseas Cerrar Sesion?',
        text: '¡La fuerza te acompaña!',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cerrar sesión',
        cancelButtonText: 'Cancelar',
    });
    if (result.isConfirmed) {
        Swal.fire({
            title: 'Cerrando sesión...',
            text: 'Por favor, espera un momento.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        try {
            await signOut(auth);
            Swal.fire('Desconectado', 'Haz cerrado sesión correctamente', "success").then(() => {
                navegar('/login');
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al cerrar la sesión. Por favor, inténtelo de nuevo.'
            });
            console.log('Error al cerrar la sesión', error);
        }
    }
}
    return(
        <a href="#" onClick={handleLogout} className="nav-link"><span>Logout</span></a>
    )
}