import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      date: '2024-06-01T10:14:00.000Z',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      date: '2024-04-01T10:14:00.000Z',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      date: '2024-03-01T10:14:00.000Z',
      completed: false,
    },
  ])

  const [editingTodo ,setEditingTodo] = useState(null);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo)=> {
      if(todo.id === todoId){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId)=>{
    const deletedTodo = todos.filter((todo)=>{
     return todo.id !== todoId
    })
    setTodos(deletedTodo)
  }

  const addTodo = (todoTitle, todoDate) =>{
    if(todoTitle === ''){
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      date: todoDate,
      completed: false
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  const updateTodo = (todoId, updatedTitle, updatedDate) =>{
    const updatedTodos = todos.map((todo)=>{
      if(todo.id === todoId){
          return{
            ...todo,
            title: updatedTitle,
            date: updatedDate
          }
      }
      return todo
    })
    setTodos(updatedTodos)
    setEditingTodo(null)
  }

  const editTodo = (todo) => {
    setEditingTodo(todo)
  }


  return (
    <div className='App' style={styles.container }>
      
      <h1 style={styles.title}>My "Gage" List</h1>
      <TodoForm addTodo={addTodo} editingTodo={editingTodo} updateTodo={updateTodo}/>
      <h3 style={styles.subtitle}>Task</h3>
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo}/>
    </div>
  )
  
}


const styles = {
  container: {
    textAlign: 'left',
  }, 
  title: {
    fontSize: '36px',
    textAlign: 'center',
    backgroundColor: 'rgb(15, 94, 199)',
    marginTop: '0',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
    padding: '15px 20px',
    color: 'white'
  },
  subtitle: {
    fontSize: '20px',
    marginBottom: '10px',
    marginLeft: '12px',
    fontWeight: 'Bold'
  }
}

export default App
