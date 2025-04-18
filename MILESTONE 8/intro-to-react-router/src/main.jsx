import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Root from './components/Root/Root.jsx'
import Laptops from './components/Laptops/Laptops.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {index: true, Component: Home },
            {path: 'mobiles', Component: Mobiles  },
            {path: 'laptops', Component: Laptops},
        ]
    },

    {
        path: 'about',
        element: <div>About me here</div>
    },

    {
        path: 'blogs',
        element: <div>All my blogs are here</div>
    },

    {
        path: 'app',
        Component: App
    },

    {
        path: 'app2',
        element: <App></App>
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
