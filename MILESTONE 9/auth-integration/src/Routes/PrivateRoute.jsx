import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <>
            <div className='max-w-sm mx-auto my-8 border'>
                
                <span className="loading loading-infinity loading-xl"></span>

            </div>
        </> 
    }

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;