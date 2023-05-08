// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  const handleAddUser=e=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email};
    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert('user added');
        form.reset()
      }
    }
    )



  }

  return (
    <>
        
      <h1>Simple crud project</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" id="name" name='name' /><br/>
        <input type="email" id="email" name='email' /><br/>
        <input type="submit" value="add user" />
      </form>
    </>
  )
}

export default App
