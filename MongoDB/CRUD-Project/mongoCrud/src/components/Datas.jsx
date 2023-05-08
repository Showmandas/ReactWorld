/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import UserCard from './UserCard';

export default function Datas() {
    const users=useLoaderData()
    console.log(users);
  return (
    <div className="container">
    <h2 className='mt-5 mb-5'>Number of users : {users.length}</h2>
    <div className='container d-flex flex-wrap justify-content-center align-items-center gap-4'>
        {
            users.map((user,index)=><UserCard user={user} key={index}/>)
        }
    </div>
    </div>
  )
}
