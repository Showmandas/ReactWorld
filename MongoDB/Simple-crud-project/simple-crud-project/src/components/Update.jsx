/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Update() {
    const loadData=useLoaderData()
    const handleUpdate=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        console.log(name,email)
        const updatedUser={name,email}
    fetch(`http://localhost:5000/users/${loadData._id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updatedUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
          alert('user updated added');
        //   form.reset()
        }
    })
    }
  return (
    <div><h2>Update info of {loadData.name}</h2>
    <form onSubmit={handleUpdate}>
        <input type="text" name='name' defaultValue={loadData?.name} /><br/>
        <input type="email" name='email' defaultValue={loadData?.email} /><br/>
        <input type="submit" value='update' /><br/>
    </form>
    
    </div>
    
  )
}
