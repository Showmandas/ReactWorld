import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CommentDetails = () => {
    const commentData=useLoaderData();
    return (
        <div>
            <h3>Email:{commentData.email}</h3>
            <p>Email:{commentData.body}</p>
        </div>
    );
};

export default CommentDetails;