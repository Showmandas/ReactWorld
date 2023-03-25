import React from 'react';
import './Todo.css'

const Todo = (props) => {
    console.log(props);
    return (
        <div className='Todo'>
            <h3>UserId:{props.userId}</h3>
            <h4>Title:{props.title}</h4>
            <p>Completed:{props.completed}</p>
        </div>
    );
};

export default Todo;