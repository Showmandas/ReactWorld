import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
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
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
