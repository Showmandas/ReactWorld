import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './components/Layout';
import Home from './components/Home';
import BookService from './components/BookService/BookService';
import Bookings from './components/BookService/Bookings';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './components/Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/bookings/:id',
        element:<PrivateRoute><BookService/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
      },
      
      {
        path:'/bookings',
        element:<PrivateRoute><Bookings/></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <div className='container'>
    <RouterProvider router={router} />
  </div>
  </AuthProvider>
  </React.StrictMode>,
)
