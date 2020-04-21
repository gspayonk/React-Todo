import React from 'react';

const ToDo = props => {

    return (
        <div style={props.todoitem.completed ? {textDecoration: 'line-through'} : null } onClick ={
            () => props.handleToggleDone(props.todoitem.id)
        }
        >
            {props.todoitem.task}
        </div>
    );
};

export default ToDo;