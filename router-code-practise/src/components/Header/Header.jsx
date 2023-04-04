import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';




const Header = () => {
    
    return (
        
        <div className='header'>
            <ActiveLink to={'/'}>Home</ActiveLink>
            <ActiveLink to={'/users'}>Users</ActiveLink>
            <ActiveLink to={'/photos'}>See Photos</ActiveLink>
    
        </div>
    );
};

export default Header;