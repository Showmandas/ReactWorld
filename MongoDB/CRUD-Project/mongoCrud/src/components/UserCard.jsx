/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserCard({user}) {
    const[userdata,setUserData]=useState(user);
    const {name,email,phone,_id}=userdata;
    const handleDelete=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        if(data.deletedCount>0){
          alert('delete successful')
          const remaining=userdata.filter(users=>users._id !== _id)
          setUserData(remaining);

        }
      })


    }
  return (
    <div className='card mb-4 p-5 text-center'>
    <h2>{name}</h2>
    <p>{email}</p>
    <p>{phone}</p>
    <div className='d-flex justify-content-center gap-3 mt-4'>
        <button className='btn bg-danger-subtle' onClick={()=>handleDelete(_id)}>Delete</button>
        <Link to={`/update/${_id}`}><button className='btn bg-warning-subtle'>Update</button></Link>
    </div>
    </div>
  )
}
