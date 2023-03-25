import React from 'react';
import './blogs.css';
const Blogs = (props) => {
    const{heading,author}=props;
    
    return (
        <div className='blogs'>
        <h2>{heading}</h2>
        <h4>{author}</h4>
        </div>
    );
};

export default Blogs;