import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
//crear contexto de autenticacion
const AuthContext = createContext();

export const useAuth =()=>{
    return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
export const AuthProvider =({ children })=>{

    // Estado para almacenar el usuario actual.
    const [currentUser, setCurrentUser] = useState(null);
    // Estado para almacenar la información del usuario.
    const [infoUser, setInfouser] = useState(null);
    // Estado para manejar el estado de carga.
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async (user)=>{
            // Activa el estado de carga.
            setLoading(true);
            if (user) {
                // Si hay un usuario autenticado.
                setCurrentUser(user); // Almacena el usuario actual en el estado.
                try {
                    const docRef = doc(db,'usuarios', user.uid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        // Si el documento existe.
                        setInfouser(docSnap.data()); // Almacena los datos del usuario en el estado.
                    }else{
                        Swal.fire({
                            icon: 'warning',
                            title: 'Usuario no encotrado',
                            text: 'Verifica tus credenciales',
                        }).then(()=>{
                            // Cierra la sesión.
                            signOut(auth);
                            // Resetea el estado del usuario actual.
                            setCurrentUser(null);
                            // Resetea el estado de la información del usuario.
                            setInfouser(null);
                        });
                    }
                } catch (error) {
                    console.error('error al obtener los datos de usuario: ',error);
                    setInfouser(null);
                }
            }else{
                // Si no hay usuario autenticado.
                setCurrentUser(null); // Resetea el estado del usuario actual.
                setInfouser(null); // Resetea el estado de la información del usuario.
            }
            setLoading(false); // Desactiva el estado de carga.
        });
        // Limpia la suscripción al desmontar el componente.
        return()=> unsubscribe();
    },[])
    const value ={
        currentUser,
        infoUser,
        setInfouser,
        loading,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};