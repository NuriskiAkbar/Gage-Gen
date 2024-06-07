import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, toggleCompleted, deleteTodo, editTodo })=> {
    return (
        <div style={ styles.container }>
            {
                todos.map((todo)=>{
                    return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo}/>
                })
            }
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        margin: '0 auto',
        padding: '0 12px',
        paddingBottom: '12px',
        boxSizing: 'border-box'

    }
}

export default Todos