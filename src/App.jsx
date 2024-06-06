import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

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

  return (
    <div className='App' style={styles.container }>
      <h1 style={styles.title}>My "Gage" List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    </div>
  )
  
}


const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  }, 
  title: {
    fontSize: '36px',
  },
}

export default App
