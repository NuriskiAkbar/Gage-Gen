import { useState, useEffect } from 'react'
import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const TodoForm = ({ addTodo, editingTodo, updateTodo }) => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState(new Date())
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (editingTodo) {
            setTitle(editingTodo.title);
            setDate(new Date(editingTodo.date));
        } else {
            setTitle('');
            setDate(new Date());
        }
    }, [editingTodo]);

    const handleSubmit = (event) => {
        event.preventDefault()
        // const formattedDate = date.toLocaleString('en-US', {
        //     day: 'numeric',
        //     month: 'long',
        //     year: 'numeric',
        //     hour: 'numeric',
        //     minute: 'numeric',
        //     hour12: true,
        // });
        const formattedDate = date.toISOString()
        if (editingTodo) {
            updateTodo(editingTodo.id, title, formattedDate);
        } else {
            addTodo(title, formattedDate);
        }
        //addTodo(title, formattedDate);
        setTitle('');
        setDate(new Date());
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    console.log(title)

    return (
        <div style={styles.container}>
            <form
                onSubmit={(event) => {
                    handleSubmit(event)
                }}>
                <input
                    type="text"
                    placeholder='Add your Todo'
                    style={styles.formInput}
                    onChange={(event) => {
                        handleChangeTitle(event)
                    }} 
                    value={title}/>
                <DatePicker
                    className='datePicker'
                    style={styles.datePicker} 
                    selected={date}
                    onChange={(date)=> setDate(date)}
                    showTimeSelect
                    dateFormat="d/MM/yyyy h:mm aa"
                    placeholder ='Add date and Time'/>
                <div style={styles.buttonContainer}>
                    <button 
                    style={isHovered ? styles.buttonHovered : styles.button}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} >{editingTodo ? 'Update Todo' : 'Add Todo'}</button>
                </div>
            </form>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: '32px',
        width: '100%',
    },
    formInput: {
        height: '30px',
        width: '100%',
        fontSize: '16px',
        padding: '0 10px',
        boxSizing: 'border-box',
        margin: '0 auto',
        marginBottom: '5px',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: 'white'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px' // Adjust this value as needed
    },
    button: {
        backgroundColor: 'rgb(15, 94, 199, 0.8)',
        border: 'none',
        borderRadius: '10px',
        padding: '5px 10px',
        color: 'white',
        height: '30px',
        fontSize: '16px',
    },
    buttonHovered: {
        backgroundColor: 'rgb(15, 94, 199, 1)',
        border: 'none',
        borderRadius: '10px',
        padding: '5px 10px',
        color: 'white',
        height: '30px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    
}

export default TodoForm