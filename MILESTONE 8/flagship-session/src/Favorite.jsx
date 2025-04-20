import React from 'react';
import { Outlet } from 'react-router';

const Favorite = () => {
    return (
        <>
            <div>
                <h2>This is favorites</h2>
            </div>

            <Outlet></Outlet>
        </>
    );
};

export default Favorite;