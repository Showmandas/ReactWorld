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
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
// import  { loader } from "./routes/root";


// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<div>This is Home app</div>
//   },
//   {
//     path:"/about",
//     element:<About/>,
//     errorElement:<ErrorPage/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>,
//     errorElement:<ErrorPage/>

//   },
// ])


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'about',
        element:<About />
      },
      {
        path:'contact',
        element:<Contact />
      },
      {
        path:'friends',
        element:<Friends />,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')        
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
