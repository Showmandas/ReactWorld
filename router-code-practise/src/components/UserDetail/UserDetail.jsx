import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserDetails.css'

const UserDetail = () => {
    const userDetails=useLoaderData()
    return (
        <div className='userDetails'>
            <h3>Username:{userDetails.username}</h3>
            <h2>Email: {userDetails.email}</h2>
            <p>Company:{userDetails.company.name}</p>
            <p>City: {userDetails.address.city}</p>
        </div>
    );
};

export default UserDetail;