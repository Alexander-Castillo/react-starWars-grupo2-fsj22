import { Link } from "react-router-dom"


export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/personajes">Personajes</Link>
                        <Link className="nav-link" to="/planetas">Planetas</Link>
                        <Link className="nav-link" to="/favoritos">Mi seleccion favorita</Link>
                        <Link className="nav-link" to="/registro">Registro</Link>
                        
                    </div>
                </div>
            </div>
        </nav>

    )
}