import React,{useState,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Blogs from './components/Blog/Blogs'
import Mobile from './components/mobile/Mobile'
// import Todos from './components/todos/Todos/Todos'
import './components/Blog/blogs.css'

function App() {
  const blogStyle={
    'textAlign':'justify',
    'fontSize':'1rem',
    'padding':'1.2rem',
}


 return (
  // <Blogs/>
  <div className='components'>
  <div className='blog'>
            <article style={blogStyle}>
                <h3>Blog page</h3>
                <p style={{color:'purple',fontWeight:'bold'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptatem animi illo esse aspernatur quasi amet doloribus? Soluta praesentium error dolor animi! Vel suscipit non ad laborum delectus nam illo commodi voluptatibus at? Eveniet nam voluptatum dignissimos commodi totam? Consequatur aliquam sunt, ipsa libero autem quidem animi architecto nisi nostrum!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, consectetur!</p>
            </article>
           
            <Mobile/>
            <Blog name="bunny" city="hydrabad"/>
            <Blog name="rajni" city="chennai"/>
            <Blog name="rocky" city="karnatak"/>
            
        </div>
        <div>
          <LoadTodos />
        </div>
  </div>
  
 )
}


function Blog(props){
  return(
    <div className='blogDiv'>
      <h4>Name:{props.name}</h4>
      <h5>City:{props.city}</h5>
    </div>
  )
}

function LoadTodos(){
  const [todos,setTodos]=useState([])

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res=>res.json())
      .then(data=>setTodos(data))
  },[])
  
return(
    <div style={{backgroundColor:'beige',color:'#000'}}>
      <h3>Title:{todos.length}</h3>
      {
        todos.map(todo=>{
          <Todos {...todo}/>

        })
      }
      
    </div>
  )
  
}

function Todos(props){
  console.log(props);
  return(
    <div>
      {/* <h2>title: {props.title}</h2>
      <h3>completed:{props.completed} </h3> */}
    </div>
  )
}
export default App;
