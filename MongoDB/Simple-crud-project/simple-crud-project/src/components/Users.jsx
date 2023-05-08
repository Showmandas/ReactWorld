/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const Users = () => {
    const loadusers=useLoaderData()
    const[users,setUsers]=useState(loadusers);
    const handleDelete=_id=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        if(data.deletedCount>0){
          alert('delete successful')
          const remaining=users.filter(user=>user._id !== _id)
          setUsers(remaining);

        }
      })
    }
  return (
    <>
    <h2>{users.length}</h2>
    <div>
{
    users.map(user=><p key={user._id}>{user.name} : {user.email}
    <Link to={`/update/${user._id}`}><button>update</button></Link>
    <button onClick={()=>handleDelete(user._id)}>X</button>
    </p>)
}
    </div>
    </>
  )
}
