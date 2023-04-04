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
import FriendsDetail from './Components/FriendsDetail/FriendsDetail';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
import Comments from './Components/Comments/Comments';
import CommentDetails from './Components/CommentDetails/CommentDetails';
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
        path:'friends',
        element:<Friends />,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')        
      },
      {
        path:'friend/:friendId',
        element:<FriendsDetail />,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'contact',
        element:<Contact />
      },
      {
        path:'posts',
        element:<Posts />,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'posts/:postId',
        element:<PostDetails/>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'comments',
        element:<Comments/>,
        loader:({params})=>fetch('https://jsonplaceholder.typicode.com/comments')
      },
      {
        path:'comment/:commentId',
        element:<CommentDetails/>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`)
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
