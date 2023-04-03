import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("")

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>setPosts(res.data))
    .catch(error=>setError(error))
  },[])
  return (
    <>
    <h2>Axios in react</h2>
    {error !== "" && <h2>{error.message}</h2>}
    <div className='grid'>
    {
      posts.map(post=>{
        const{id,title,body}=post;
        return <div className='card' key={id}>
          <h2>{title.slice(0,15).toUpperCase()}</h2>
          <p>{body.slice(0,100)}</p>
        </div>
      })
    }
    </div>
    </>
  )
}

export default App;
