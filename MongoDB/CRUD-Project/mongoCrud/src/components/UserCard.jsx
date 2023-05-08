/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function UserCard({user}) {
    const {name,email,phone}=user;
  return (
    <div className='card mb-4 p-5 text-center'>
    <h2>{name}</h2>
    <p>{email}</p>
    <p>{phone}</p>
    <div className='d-flex justify-content-center gap-3 mt-4'>
        <button className='btn bg-danger-subtle'>Delete</button>
        <button className='btn bg-warning-subtle'>Update</button>
    </div>
    </div>
  )
}
