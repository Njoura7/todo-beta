import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import './style.css'
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

        if (storedTodos) {
            setTodos(storedTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find((todo) => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
        })
        todoNameRef.current.value = null
    }
    function handleClearTodo() {
        console.log('hello')
        const newTodos = todos.filter((todo) => !todo.complete)
        setTodos(newTodos)
    }

    return (
        <div className="container">
            <div className="todo-input">
                <input className="input" ref={todoNameRef} type="text" />
                <button onClick={handleAddTodo} className="add">
                    Add
                </button>
                <button onClick={handleClearTodo} className="clear">
                    Clear Completed
                </button>
                <div className="left">
                    {todos.filter((todo) => !todo.complete).length} Left todo
                </div>
            </div>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    )
}

export default App
