import {ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, RefObject} from "react";

export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
}

export interface IForms {
    value: string;
    handleChangeInput: ChangeEventHandler<HTMLInputElement>;
    handleAddTodo: MouseEventHandler<HTMLButtonElement>;
    handlePressEnter: KeyboardEventHandler<HTMLInputElement>
    inputRef: RefObject<HTMLInputElement>;
}