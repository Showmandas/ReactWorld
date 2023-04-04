import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../Components/ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">about</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/contact">contact</ActiveLink>
            <ActiveLink to="/posts">posts</ActiveLink>
            <ActiveLink to="/comments">comments</ActiveLink>
        </div>
    );
};

export default Header;