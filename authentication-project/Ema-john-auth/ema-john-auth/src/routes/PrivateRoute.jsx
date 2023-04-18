import React, { useContext } from 'react';
import { AuthContext } from '../Components/Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from './Loader';
import { useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()


    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;