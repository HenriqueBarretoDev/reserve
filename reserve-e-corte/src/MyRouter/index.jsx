import React from 'react';
import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";

const PrivateRoute = ({children, redirectTo}) => {
    const isAuthenticated = localStorage.getItem("token") !== null;

    return isAuthenticated ? children : <Navigate to={redirectTo}/>
};

function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<PrivateRoute redirectTo='/'>
                    <Admin/>
                </PrivateRoute>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default MyRouter;
