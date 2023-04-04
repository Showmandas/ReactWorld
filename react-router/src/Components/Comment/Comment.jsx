import React from 'react';
import { Link } from 'react-router-dom';

const Comment = ({comment}) => {
    const{id,name,email,body}=comment;
    return (
        <div>
            <h3>Name:{name}</h3>
            <h3>Email:{email}</h3>
            <p><Link to={`/comment/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default Comment;