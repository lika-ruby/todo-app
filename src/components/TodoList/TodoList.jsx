import { Component } from "react";
import { TodoItem } from "../TodoItem/TodoItem.jsx";
import { List } from "./TodoList.js";

export class TodoList extends Component {
  render() {
    return (
      <List>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            agreed={todo.completed}
            changeChecked={this.props.changeChecked}
            deleteTask={this.props.deleteTask}
          />
        ))}
      </List>
    );
  }
}
