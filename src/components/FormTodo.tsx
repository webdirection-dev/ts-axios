import React from "react";
import {IForms} from "../types/data";

const FormTodo: React.FC<IForms> = (props) => {
    const {
        value,
        handleChangeInput,
        handleAddTodo,
        handlePressEnter,
        inputRef,
    } = props
    return(
        <form className="App">
            <div className="app__input">
                <input
                    type="text"
                    value={value}
                    onChange={e => handleChangeInput(e)}
                    onKeyDown={e => handlePressEnter(e)}
                    ref={inputRef}
                />

                <button
                    className='app__btn'
                    onClick={e => handleAddTodo(e)}
                >Click</button>
            </div>
        </form>
    )
}

export default FormTodo