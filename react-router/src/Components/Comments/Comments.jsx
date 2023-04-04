import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Comments = () => {
    const commentData=useLoaderData();
    return (
        <div>
            <h3>Drop your Comments here</h3>
            {
                commentData.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;