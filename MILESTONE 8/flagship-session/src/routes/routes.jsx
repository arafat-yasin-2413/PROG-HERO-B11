import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import Favorites from '../pages/Favorites';
import About from '../pages/About';

import ErrorPage from '../pages/ErrorPage';
import PhoneDetails from '../pages/PhoneDetails';



const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            
            {
                path: '/',
                // index: true,
                element: <Home></Home>,
                
            },

            {
                path: '/favorites',
                element: <Favorites></Favorites>,

            },

            {
                path: '/about',
                element: <About></About>,
            },

            {
                path: '/phone-details',
                element: <PhoneDetails/>,
            },
        ],
    },

    
        
    

])


export default router;  