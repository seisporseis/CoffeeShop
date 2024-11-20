import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Layout from './layouts/Layout'
import Login from './views/Login'
import Home from './views/Home'
import Register from './views/Register'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children:[
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            } 
        ]
    }
])

export default router