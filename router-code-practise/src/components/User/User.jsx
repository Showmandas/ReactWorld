import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const{id,name,email}=user;
    return (
        <div className='user'>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <Link to={`/user/${id}`}><button>Show User Detail Info</button></Link>
        </div>
    );
};

export default User;