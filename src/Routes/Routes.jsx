import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../Pages/Login/Login"
import { Registro } from "../Pages/Registro/Registro"
import { Layout } from "../components/layout/Layout"
import { Home } from "../Pages/Home/Home"
import { Character } from "../Pages/Characters/Character"
import { Planets } from "../Pages/Planets/Planets"
import { SelectionFavorite } from "../Pages/Selection/SelectionFavorite"
import { NotFound } from "../Pages/NotFound/NotFound"
<<<<<<< HEAD
import { Series } from "../Pages/Series/series"

=======
import { useAuth } from "../Context/AuthContext"
import { ProtectedRoute } from "./Protected/ProtectedRoute"
>>>>>>> 4e232d9513a61c176aa37f93c95646911b4c9db3

export const Rutas=()=>{
    const { loading } = useAuth();
    if (loading) {
        return <div>Cargando...</div>;
    }
    return(
        <>
            <BrowserRouter>
                <Routes>
                    {/* Redirige a /login como ruta por defecto */}
                    <Route path="/" element={<Navigate to='/login' />} />
                    {/* Rutas publicas */}
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registro" element={<Registro />} />
                    {/* Rutas para usuario logueado */}
<<<<<<< HEAD
                    <Route path="/home" element={<Layout><Home/></Layout>} />
                    <Route path="/personajes" element={<Layout><Character/></Layout>} />
                    <Route path="/planetas" element={<Layout><Planets/></Layout>} />
                    <Route path="/series" element={<Layout><Series /></Layout>} />
                    <Route path="/favoritos" element={<Layout><SelectionFavorite/></Layout>} />
=======
                    <Route path="/home" element={<ProtectedRoute><Layout><Home/></Layout></ProtectedRoute>} />
                    <Route path="/personajes" element={<ProtectedRoute><Layout><Character/></Layout></ProtectedRoute>} />
                    <Route path="/planetas" element={<ProtectedRoute><Layout><Planets/></Layout></ProtectedRoute>} />
                    <Route path="/favoritos" element={<ProtectedRoute><Layout><SelectionFavorite/></Layout></ProtectedRoute>} />
>>>>>>> 4e232d9513a61c176aa37f93c95646911b4c9db3
                    {/* Maneja rutas no existentes */}
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}