/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Update() {
    const loadUser=useLoaderData();

const handleUpdate=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const phone=form.phone.value;
    const updateUser={name,email,phone}
    console.log(updateUser);
    fetch(`http://localhost:5000/users/${loadUser._id}`,{
        method: "PUT", 
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(updateUser),
    })
    .then(res=>res.json())
    .then(data=>{console.log(data);
        if(data.modifiedCount>0){
            alert('User updated');
            // form.reset();
        }
    })

}
   


  return (
    <div className='container d-flex flex-column justify-content-center'>
        <h3>{loadUser.name}</h3>
        <div className='container'>
        <div className="container mt-5">
    <form className='d-flex flex-column w-50 justify-content-center' onSubmit={handleUpdate}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" id="name" defaultValue={loadUser?.name} name="name" placeholder="Update your name"/>
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" id="email" name="email"  defaultValue={loadUser?.email} placeholder="Update your email"/>
      </div>
      <div className="form-group">
        <label>Phone number</label>
        <input type="tel" defaultValue={loadUser?.phone} className="form-control" id="phone" name="phone" placeholder="Update your phone number"/>
      </div>
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
  </div>
    </div>
    </div>
  )
}
