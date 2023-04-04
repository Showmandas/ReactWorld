import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const{id,name,email}=user;
    const navigate=useNavigate()
    
const handleNavigation=()=>{
    navigate(`/user/${id}`)
}
    return (
        <div className='user'>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <Link to={`/user/${id}`}><button>Show User Detail Info</button></Link>
            <button onClick={handleNavigation}>With navigation</button>
        </div>
    );
};

export default User;