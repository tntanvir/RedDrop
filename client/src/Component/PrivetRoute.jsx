// import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ContextApi } from '../App';

const PrivetRoute = ({ childern }) => {
    const location = useLocation()
    const [userLogin, setUserLogin] = useContext(ContextApi);
    return (

        userLogin.email ? childern : <Navigate to="/login" replace state={{ from: location }} />

    );
};

export default PrivetRoute;