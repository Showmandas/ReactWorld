import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/contact">contact</Link>
            <Link to="/posts">posts</Link>
        </div>
    );
};

export default Header;