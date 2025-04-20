import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import Favorite from '../Favorite';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <h2>Error</h2>,

        children: [
            
            {
                path: '/',
                element: <Home></Home>,
                
            },

            {
                path: '/favorites',
                element: <Favorite></Favorite>,

                children: [
                    {
                        path: 'more-nested',
                        element: <h2>I am inside favorite</h2>,
                    },
                ],
            },

            {
                path: '/about',
                element: <h2>This is about page</h2>,
            },
        ],
    },

    
        
    

])


export default router;  