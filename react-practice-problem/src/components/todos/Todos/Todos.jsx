import React, { useEffect, useState } from 'react';
import Todo from '../todo/Todo';
import './todos.css';
const Todos = () => {
    const [todo,setTodo]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setTodo(data))
    },[])
    return (
        <div className='todos'>
            <h2>Todos:{todo.length}</h2>
            <div style={{color:'red'}}>
            {
                todo.map(todoData=>{
                    console.log(todoData);
                   return <Todo 
                    todo={todoData}
                    key={todoData.id}
                    />
                })
            }
            </div>
        </div>
    );
};

export default Todos;