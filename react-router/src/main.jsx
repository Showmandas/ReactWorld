import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import{
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router=createBrowserRouter([
  {
    path:"/",
    element:<div>This is Home app</div>
  },
  {
    path:"/about",
    element:<About/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/contact",
    element:<Contact/>,
    errorElement:<ErrorPage/>

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
