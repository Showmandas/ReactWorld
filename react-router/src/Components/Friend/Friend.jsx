import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const{email,phone,id,name}=friend;
    return (
        <div>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;