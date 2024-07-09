import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../Pages/Login/Login"
import { Registro } from "../Pages/Registro/Registro"
import { Layout } from "../components/layout/Layout"
import { Home } from "../Pages/Home/Home"
import { Character } from "../Pages/Characters/Character"
import { Planets } from "../Pages/Planets/Planets"
import { SelectionFavorite } from "../Pages/Selection/SelectionFavorite"
import { NotFound } from "../Pages/NotFound/NotFound"

import { Series } from "../Pages/Series/series"

import { useAuth } from "../Context/AuthContext"
import { ProtectedRoute } from "./Protected/ProtectedRoute"

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

                    <Route path="/home" element={<ProtectedRoute><Layout><Home/></Layout></ProtectedRoute>} />
                    <Route path="/personajes" element={<ProtectedRoute><Layout><Character/></Layout></ProtectedRoute>} />
                    <Route path="/planetas" element={<ProtectedRoute><Layout><Planets/></Layout></ProtectedRoute>} />
                    <Route path="/favoritos" element={<ProtectedRoute><Layout><SelectionFavorite/></Layout></ProtectedRoute>} />
                    <Route path= "/series" element={<ProtectedRoute><Layout><Series/></Layout></ProtectedRoute>} />

                    {/* Maneja rutas no existentes */}
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}