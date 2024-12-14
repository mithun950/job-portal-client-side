import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "../Context/AuthContext/PrivateRoute";
import JobApply from "../Pages/JobApply";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
           path: '/jobs/:id',
           element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute> ,
           loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <JobApply></JobApply>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
           path: '/register',
           element: <Register></Register>,
        },
        {
           path: '/login',
           element: <Login></Login>,
        }
      ]
    },
  ]);

  export default router;