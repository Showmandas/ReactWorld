import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';

const Header = () => {
    const user=useContext(AuthContext);
    return (
        <div>
           <Link to={'/'}>Home</Link> &nbsp;
           <Link to={'/login'}>Log in</Link>
           {user ? <span>{user.displayName}</span>:<button className='btn'>sign out</button>} 
        </div>
    );
};

export default Header;