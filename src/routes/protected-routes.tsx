import { Navigate, useRoutes } from "react-router-dom"
import PanelPage from "../features/panel/panel-page"
import Layout from "../features/panel/layout"

export const ProtectedRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <PanelPage />
                }
            ]
        },
        {
            path: '*',
            element: <Navigate to="/" replace />,
        },
    ])
}