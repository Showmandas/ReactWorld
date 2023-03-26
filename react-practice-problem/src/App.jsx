import React,{useState,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Blogs from './components/Blog/Blogs'
import Mobile from './components/mobile/Mobile'
import Todos from './components/todos/Todos/Todos'
import './components/Blog/blogs.css'
// import Todo from './components/todos/todo/Todo'

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
        
          <Todos/>
      
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

  
  


export default App;
