import React from 'react';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faDeleteLeft, faEraser } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, toggleCompleted, deleteTodo, editTodo }) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)

    const formatDate = (dateString) => {
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }
        return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString))
      }

    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return {
                fontWeight: 'Bold',
                marginBottom: '10px',
                textDecoration: 'line-through' }
        } else {
            return { 
                fontWeight: 'Bold',
                marginBottom: '10px',
                textDecoration: 'none' }
        }
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleMouseEnter2 = () => {
        setIsHovered2(true)
    }

    const handleMouseLeave2 = () => {
        setIsHovered2(false)
    }

    return (
        <div style={styles.todoItem}>
            <input type="checkbox" style={styles.checkbox} onChange={()=>toggleCompleted(todo.id)}/>
            <div className='dateTitle'>
                <p style={getTodoTitleStyle()}>{todo.title}</p>
                <p style={styles.date}>{formatDate(todo.date)}</p>
            </div>
            <div className='buttons'>
                <button style={isHovered ? styles.button2Hovered : styles.button2} 
                onClick={()=>deleteTodo(todo.id)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}><FontAwesomeIcon icon={faEraser}/></button>
                <button style={ isHovered2 ? styles.buttonHovered: styles.button  } 
                onClick={()=>editTodo(todo)}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}><FontAwesomeIcon icon={faEdit}/></button>
            </div>
        </div>
    )
}

const styles = {
    todoItem: {
        backgroundColor: '#fdfdfd',
        border: '2px solid #f4f4f4',
        borderRadius: '10px',
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        marginBottom: '10px'
    },
    checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px'
    },
    button: {
        backgroundColor: '#BB00008f',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
    buttonHovered: {
        backgroundColor: '#BB0000',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
    date: {
        fontSize: '12px',
        color: 'rgba(0, 0, 0, 0.60)',
        marginTop: '10px'
    },
    button2: {
        backgroundColor: 'rgb(15, 94, 199, 0.8)',
        marginRight: '5px',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px'
    },
    button2Hovered: {
        backgroundColor: 'rgb(15, 94, 199, 1)',
        marginRight: '5px',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px'
    }
}

export default TodoItem