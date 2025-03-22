import { Navigate } from "react-router-dom";
import React from "react";

function ProtectedRoute({isLoggedIn,children}){
    return isLoggedIn ? children: <Navigate to="/" replace />;
}
export default ProtectedRoute