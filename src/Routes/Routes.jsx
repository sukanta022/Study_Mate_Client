import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import CreateProfile from "../Component/CreateProfile";
import Profile from "../Pages/Profile";
import FindPartner from "../Pages/FindPartner";
import MyConnections from "../Pages/MyConnections";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ViewProfile from "../Pages/ViewProfile";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: ErrorPage,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/CreateProfile',
          loader: () => fetch("http://localhost:3000/users"),
          element: <PrivateRoute>  <CreateProfile></CreateProfile> </PrivateRoute>
        },
        {
          path: '/profile',
          Component: Profile
        },
        {
          path: '/FindPartners',
          Component: FindPartner
        },
        {
          path: '/MyConnection',
          loader: () => fetch("http://localhost:3000/users"),
          element: <PrivateRoute> <MyConnections></MyConnections> </PrivateRoute>
        },
        {
          path: '/login',
          Component: Login,
          
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/Profile/:id',
          loader : ({params}) => fetch(`http://localhost:3000/users/${params.id}`),
          Component: ViewProfile
        },
        {
        path: '*',
        Component: ErrorPage
      }
    ]
  },
  
]);