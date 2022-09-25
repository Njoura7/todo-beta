import React, { useState } from 'react'
import ToggleImages from './ToggleImages'

import './style.css'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    const [active, setActive] = useState(false)

    const handleChangeActive = () => {
        setActive((previousStar) => {
            return !previousStar
        })
    }
    return (
        <>
            <ToggleImages active={active} handleChangeActive={handleChangeActive} />
            <label>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={handleTodoClick}
                />
                {todo.name}
            </label>
        </>
    )
}
