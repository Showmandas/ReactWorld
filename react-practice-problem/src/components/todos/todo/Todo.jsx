import React from 'react';
import './Todo.css'

const Todo = (props) => {
    // console.log(props.todo);
    const{userId,title,completed}=props.todo;
    return (
        <div className='Todo'>
            <h3>UserId:{userId}</h3>
            <h4>Title:{title}</h4>
            <p>Completed:{completed}</p>
        </div>
    );
};

export default Todo;