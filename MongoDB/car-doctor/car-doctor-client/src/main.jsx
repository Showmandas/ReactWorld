import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './Homepage/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './Provider/AuthProvider';
// import Checkout from './Checkout/Checkout';
import BookService from './BookService/BookService';
import PrivateRoute from './PrivateRoute';
import Bookings from './Bookings/Bookings';

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
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/book/:id',
        element:<PrivateRoute><BookService/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'bookings',
        element:<Bookings/>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
   <AuthProvider>

        <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
 </div>
)
