import React from "react";
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo {
    handleRemoveTodo: (id: number) => void;
    handleToggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {
        id,
        title,
        complete,
        handleRemoveTodo,
        handleToggleTodo,
    } = props

    return(
        <li>
            <input
                type="checkbox"
                checked={complete}
                onChange={() => handleToggleTodo(id)}
            />

            <span className="title">
                {title}
            </span>

            <button
                className='del-btn'
                onClick={() => handleRemoveTodo(id)}
            >x</button>
        </li>
    )
}

export default TodoItem