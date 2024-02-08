import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './reducers/todoSlice'

function App() {
  const [count, setCount] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const addTodoHandler = (e) =>{
    e.preventDefault()
    dispatch(addTodo(Input))
    setInput('')
  }
  return (
    <>
      <h1>Learn redux toolkit</h1>
    </>
  )
}

export default App
