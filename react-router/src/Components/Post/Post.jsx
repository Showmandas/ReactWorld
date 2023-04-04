import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const{id,userId,title,body}=post;
    return (
        <div>
            <h3>title:{title}</h3>
            <Link to={`/posts/${id}`}><button>Show me Post Details</button></Link>
        </div>
    );
};

export default Post;