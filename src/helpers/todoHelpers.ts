import {ITodo} from "../types/data";
import React from "react";

export function addTodo(
    value: string,
    todos: ITodo[],
    setTodos:  React.Dispatch<React.SetStateAction<ITodo[]>>,
    setValue: React.Dispatch<React.SetStateAction<string>>
) {
    if (value.length > 0) {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                title: value,
                complete: false,
            }
        ])

        setValue('')
    }
}