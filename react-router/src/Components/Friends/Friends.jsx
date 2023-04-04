import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <h3>Friends :{data.length}</h3>
            <div>
                {
                    data.map(friend=><Friend key={friend.id} friend={friend}/>)
                }
            </div>
        </div>
    );
};

export default Friends;