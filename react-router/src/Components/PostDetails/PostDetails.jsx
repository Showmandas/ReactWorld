import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData();
    return (
        <div>
            <h3>Details about particular post</h3>
            <h4>UserId:{post.userId}</h4>
            <h3>Title:{post.title}</h3>
            <p>Body:{post.body}</p>
        </div>
    );
};

export default PostDetails;