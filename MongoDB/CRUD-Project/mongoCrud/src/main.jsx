import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Datas from './components/Datas';
import Update from './components/Update';

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
       path:'/users',
       element:<Datas/>,
       loader:()=>fetch('http://localhost:5000/users')  
      },
      {
        path:'/update/:id',
        element:<Update/>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
