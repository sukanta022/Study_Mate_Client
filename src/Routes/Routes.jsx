
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
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/CreateProfile',
          Component: CreateProfile,
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
          element: <PrivateRoute> <MyConnections></MyConnections> </PrivateRoute>
        },
        {
          path: '/login',
          Component: Login,
          
        },
        {
          path: '/register',
          Component: Register
        }
    ]
  },
  
]);