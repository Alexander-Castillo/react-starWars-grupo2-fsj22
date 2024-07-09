import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import { LogOut } from "../../Auth/components/Button/handleLogout";
import '../../../assets/css/Navbar.css'

export const Navbar = () => {
    const { currentUser, infoUser } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <h1 className="fw-bold text-warning">Que la fuerza te acompañe, { infoUser ? infoUser.user : currentUser.email }</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/personajes">Personajes</Link>
                        <Link className="nav-link" to="/planetas">Planetas</Link>
                        <Link className="nav-link" to="/series">Series</Link>
                        <Link className="nav-link" to="/favoritos">Mi selección favorita</Link>
                        <LogOut />
                    </div>
                </div>
            </div>
        </nav>
    )
}
