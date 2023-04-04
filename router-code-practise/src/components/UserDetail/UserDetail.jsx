import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const userDetails=useLoaderData()
    return (
        <div>
            <h3>Username:{userDetails.username}</h3>
            <h2>Email: {userDetails.email}</h2>
            <p>Company:{userDetails.company.name}</p>
            <p>City: {userDetails.address.city}</p>
        </div>
    );
};

export default UserDetail;