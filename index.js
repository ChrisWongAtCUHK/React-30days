import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import update from 'immutability-helper';
import './src/styles/index.scss';
import NewTodo from './src/components/new_todo'; // 1. 匯入NewTodo
import TodoList from './src/components/todo_list';  // 1. 匯入TodoList

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { // 2. 初始化state，todoList會集合我們在input輸入的value
      todoList: []
    }
    this.addNewTodo = this.addNewTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addNewTodo(text) {  // 3. text的value來自NewTodo
    const newItem = {    // 4. todoList array的每個element內容
      text,
      key: uuidv4(),
      completed: false
    }
    this.setState({  // 5. 更新todoList
      todoList: [...this.state.todoList, newItem]
    })
  }

  completeTodo(index, item) {   // 2-2
    const todoList = update(this.state.todoList, {
      [index]: {$set: item}
    });
    this.setState({ todoList })
    }
    
  removeTodo(index) {          // 2-3
    const todoList = update(this.state.todoList, {
      $splice: [[index, 1]]
    });
    this.setState({ todoList });
  }

  render() {
    const todoList = this.state.todoList;
    const hasTodoList = todoList.length > 0;

    return (
      <div className="main">
        <h1 className="title">todos</h1>
        <NewTodo addNewTodo={this.addNewTodo}/>
        { hasTodoList && (
          <ul className="list">
            <TodoList
              todo={todoList}
              completeTodo={this.completeTodo}
              removeTodo={this.removeTodo}
            />
          </ul>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
