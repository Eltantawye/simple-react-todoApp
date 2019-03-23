import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './addTodo'
class App extends Component {

state = {
  todos : [
    {id : 1 , content : "Dummy Todo"}

  ]
}
deleteTodo = (id) => {
  let myTodos = this.state.todos.filter((todo) => todo.id !== id);
  this.setState({
    todos :  myTodos
  })
}
addTodo = (todo) => {
  let id = Math.random();
this.setState({
  todos : [...this.state.todos,{id : id , content : todo.content}]
});
console.log(this.state.todos);
}
  render() {
    return (
      <div className="todos-app container " >
        <h1 className="center blue-text">Todos</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos}  deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}
/*
<input type = "text" name = "name" onChange = {this.handleSt}/>
<button onClick={this.handleClick}> Clickme </button>
<Header name="mohamed" />
<Content name ="ahmed" />
<Footer name = "koko" />*/

export default App;
