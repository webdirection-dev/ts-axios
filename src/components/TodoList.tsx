import React from "react";
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    todos: ITodo[],
    handleRemoveTodo: (id: number) => void;
    handleToggleTodo: (id: number) => void;
}


const TodoList: React.FC<ITodoListProps> = (props) => {
    const {
        todos,
        handleRemoveTodo,
        handleToggleTodo,
    } = props

    return(
        <ul>
            {
                todos.map(item =>
                    <TodoItem
                        key={item.id}
                        handleRemoveTodo={handleRemoveTodo}
                        handleToggleTodo={handleToggleTodo}
                        {...item}
                    />
                )
            }
        </ul>
    )
}

export default TodoList