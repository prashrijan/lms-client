import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { User } from "../../types/types";

interface IAuthRoute {
    children: React.ReactNode;
}

function AuthRoute({ children }: IAuthRoute) {
    // if the user exists on the store navigate to the dashboard
    const { user } = useSelector((state: RootState) => state.userData) as {
        user: User;
    };
    const isAuth: boolean = user?._id ? true : false;

    return isAuth ? children : <Navigate to="/login" />;
}

export default AuthRoute;
