import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link  style={{marginLeft:'1rem'}} to={'/'}>Home</Link>
            <Link  style={{marginLeft:'1rem'}} to={'/login'}>Login</Link>
            <Link  style={{marginLeft:'1rem'}} to={'/register'}>Register</Link>
        </div>
    );
};

export default Header;