import { Navigate, useRoutes } from "react-router-dom"
import LoginPage from "../features/auth/login-page"

export const DefaultRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <LoginPage />,
        },
        {
            path: '*',
            element: <Navigate to="/" replace />,
        },
    ])
}