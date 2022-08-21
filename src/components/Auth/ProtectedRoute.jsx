import * as React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
//import useAuth from "../../hooks/useAuth";

const ProtectedRoute = () => {
    //const { auth } = useAuth
    const location = useLocation();
    //console.log("Location", location)

    return (
        localStorage.token ? <Outlet /> : <Navigate to="/signin" state={{ from: location.pathname }} replace />
    );
}

export default ProtectedRoute;