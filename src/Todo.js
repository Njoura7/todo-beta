import React from 'react'

import './style.css'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <>
            <label>
                <input
                    className="check-task"
                    type="checkbox"
                    checked={todo.complete}
                    onChange={handleTodoClick}
                />
                <span className="task-msg">{todo.name}</span>
            </label>
        </>
    )
}
