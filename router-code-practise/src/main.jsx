import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Users from './components/Users/Users'
import UserDetail from './components/UserDetail/UserDetail'
import Photos from './components/Photos/Photos'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'users',
        element:<Users/>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'user/:userId',
        element:<UserDetail/>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path:'photos',
        element:<Photos/>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/photos')
      },
      {
        path:'*',
        element:<div>NOt found 404</div>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
