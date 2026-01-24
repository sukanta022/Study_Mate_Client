
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import CreateProfile from "../Component/CreateProfile";
import Profile from "../Pages/Profile";
import FindPartner from "../Pages/FindPartner";
import MyConnections from "../Pages/MyConnections";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
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
          Component: CreateProfile
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
          Component: MyConnections
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        }
    ]
  },
  
]);