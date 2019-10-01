import React from 'react';
import ToDo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ToDoList = props => {

    return (
        <div className='list'>
            {props.todoitems.map (todoitem => (
                <ToDo
                    handleToggleDone = {props.handleToggleDone}
                    key = {todoitem.id}
                    todoitem = {todoitem}
                />
            ))}
        </div>       
    );
};

export default ToDoList;