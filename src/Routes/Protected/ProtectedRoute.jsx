import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext"

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({children})=>{
    const {currentUser} = useAuth();
    if (!currentUser) {
        return  <Navigate to='/login'/>
    }
    return children;
};