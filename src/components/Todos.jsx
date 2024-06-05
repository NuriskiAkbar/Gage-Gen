import React from 'react';

const Todos = (props)=> {
    return (
        <div>
            {props.todos.map((todo)=>{
                return <p key={todo.id}>{todo.title}</p>
            })}
        </div>
    )
}

export default Todos