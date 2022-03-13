import React from 'react';
import {useState, useEffect, useRef} from "react";
import {ITodo} from "../types/data";
import {addTodo} from "../helpers/todoHelpers";

import FormTodo from "./FormTodo";
import TodoList from "./TodoList";

const  App: React.FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    const handlePressEnter:  React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
        if (e.key === 'Enter') addTodo(value, todos, setTodos, setValue)
    }

    const handleChangeInput:  React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setValue(e.target.value)
    }

    const handleAddTodo:  React.MouseEventHandler<HTMLButtonElement> = (e): void => {
        e.preventDefault()
        addTodo(value, todos, setTodos, setValue)
    }

    const handleRemoveTodo = (id: number): void => {
        setTodos(todos.filter(i => i.id !== id))
    }

    const handleToggleTodo = (id: number): void=> {
        setTodos(
            todos.map(i => {
                if (i.id !== id) return i
                return {
                    ...i,
                    complete: !i.complete
                }
            })
        )
    }

    //установка фокуса
    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    return (
        <>
            <FormTodo
                value={value}
                handleChangeInput={handleChangeInput}
                handleAddTodo={handleAddTodo}
                handlePressEnter={handlePressEnter}
                inputRef={inputRef}
            />

            <TodoList
                todos={todos}
                handleRemoveTodo={handleRemoveTodo}
                handleToggleTodo={handleToggleTodo}
            />
        </>
    );
}

export default App;
