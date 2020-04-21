import React from 'react';

const ToDoItemsForm = props => {
    
    return (
        <form>
            <input
                onChange = {props.handleToDoChange}
                type = 'text'
                name = 'todoitem'
                value = {props.value}
                placeholder = 'What do you need to do?'
            />

            <button onClick = {props.handleAdd} >Add Item to List!</button>
            <button onClick = {props.handleDelete}>List be gone!</button>
        </form>
    );
};

export default ToDoItemsForm;