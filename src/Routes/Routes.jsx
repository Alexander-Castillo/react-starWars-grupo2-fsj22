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


export const Rutas=()=>{

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
                    <Route path="/home" element={<Layout><Home/></Layout>} />
                    <Route path="/personajes" element={<Layout><Character/></Layout>} />
                    <Route path="/planetas" element={<Layout><Planets/></Layout>} />
                    <Route path="/series" element={<Layout><Series /></Layout>} />
                    <Route path="/favoritos" element={<Layout><SelectionFavorite/></Layout>} />
                    {/* Maneja rutas no existentes */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}