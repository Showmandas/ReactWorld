import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Users() {
    // const[count,setCount]=useState(1);
    const loadUsers=useLoaderData()
    const[users,setUsers]=useState(loadUsers)
    console.log(loadUsers)
    // const{name,status,_id,gender,email}=loadUsers;

    const handleDelete=(_id)=>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        if(data.deletedCount > 0){
            alert('Are you sure to delete?')
            const remaining=users.filter(userdata=> userdata._id !== _id)
            setUsers(remaining)
        }
    })


    }
  return (
    <div className='container m-auto mt-5'>
    <table className="table text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Status</th>
      <th scope="col" className='colspan=2'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        loadUsers.map(user=>{
            {/* let count=1; */}
            return(
                <tr>
                <td></td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.status}</td>
                    <td><button onClick={()=>handleDelete(user._id)}>X</button></td>
                    <td><Link to={`/update/${user._id}`}><button>Update</button></Link></td>
                </tr>
            )
        })
    }
  </tbody>
</table>
</div>
)
}