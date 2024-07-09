import { useNavigate } from "react-router-dom"
import '../../assets/css/notFound.css'
import { notf } from "../../assets/images/imagesExport";

export const NotFoundShow = () => {

    const navegar = useNavigate();
    const handleGoHome = () => {
        navegar('/home')
    };
    return (
        <div className="not-found">
            <div className="card text-bg-dark">
            <img src={notf} alt="Star Wars 404" className="card-img img-fluid imgNot"/>
                    
            </div>
            
            <button onClick={handleGoHome}>Regresar a Home</button>
        </div>
    )
}