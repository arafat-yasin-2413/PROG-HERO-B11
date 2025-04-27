import React from 'react';
import { Outlet } from 'react-router';

const Favorites = () => {
    return (
        <div>
            this is favorites

            <Outlet></Outlet>
        </div>
    );
};

export default Favorites;