import React from 'react';
import ToDoItemsForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (){
    super();
    this.state = {
      todoitems: [
        {
          task: 'Clean House',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bathe Dog',
          id: 1528817084358,
          completed: false
        }
      ],
      todoitem: ''
    };
  }

  addItem = event => {
    event.preventDefault();
    const newToDoItem = {task:this.state.todoitem, completed: false, id: Date.now()};
    this.setState({
      todoitems: [...this.state.todoitems, newToDoItem],
      todoitem:''
    });
  };
    
  
  editToDoItem = event => this.setState({[event.target.name]: event.target.value});

  toggleDone = id => {
    let todoitems = this.state.todoitems.slice();
    todoitems = todoitems.map(todoitem => {
    if(todoitem.id === id){
      todoitem.completed = !todoitem.completed;
      return todoitem;
    } else {
      return todoitem;
    }
  });
  this.setState({todoitems});
};

deleteDone = event => {
  event.preventDefault();
  let todoitems = this.state.todoitems.filter(todoitem => !todoitem.completed);
  this.setState({ todoitems });
};

render() {

  return (
  
    <div>
      <h2>Welcome to your To-Do App!</h2>

      <ToDoItemsForm
        value={this.state.todoitem}
        handleToDoChange={this.editToDoItem}
        handleAdd={this.addItem}
        handleDelete={this.deleteDone}
      />

      <ToDoList
        handleToggleDone={this.toggleDone}
        todoitems={this.state.todoitems}
      />
    </div>
  );
}
}


export default App;
