import React from "react";
import { Navigate } from "react-router-dom";

interface IAuthRoute {
    children: React.ReactNode;
}

function AuthRoute({ children }: IAuthRoute) {
    // check with real user data from redux store
    const isAuth: boolean = true;

    return isAuth ? children : <Navigate to="/login" />;
}

export default AuthRoute;
