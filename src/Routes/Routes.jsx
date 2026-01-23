
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import CreateProfile from "../Component/CreateProfile";
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
        }
    ]
  },
  
]);