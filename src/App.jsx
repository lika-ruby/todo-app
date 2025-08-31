import "./App.css";
import { Component } from "react";
import initialTodos from "./data/todo.json";
import { TodoEditor } from "./components/TodoEditor/TodoEditor.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { Filter } from "./components/Filter/Filter.jsx";
import { Info } from "./components/Info/Info.jsx";
import { nanoid } from "nanoid";
import { Main, Header, Container } from "./App.js";
import { GlobalStyle } from "./GlobalStyle.js";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
    todosFiltered: initialTodos,
  };

  addTask = ({ inputValue }) => {
    console.log(inputValue);
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        {
          id: nanoid(8),
          text: inputValue,
          completed: false,
        },
      ],
      todosFiltered: [
        ...prevState.todosFiltered,
        {
          id: nanoid(8),
          text: inputValue,
          completed: false,
        },
      ],
    }));
  };

  deleteTask = (e) => {
    this.setState((prevState) => ({
      todosFiltered: prevState.todosFiltered.filter(
        (todo) => todo.id !== e.target.parentElement.id
      ),
      todos: prevState.todos.filter(
        (todo) => todo.id !== e.target.parentElement.id
      ),
    }));
  };

  changeChecked = ({ id, completed }) => {
    this.setState((prevState) => ({
      todosFiltered: prevState.todosFiltered.map((todo) =>
        todo.id === id ? { ...todo, completed: completed ? false : true } : todo
      ),
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed ? false : true } : todo
      ),
    }));
  };

  filterTask = ({ inputValue }) => {
    console.log(inputValue);
    const filtredTodods = this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(inputValue.toLowerCase())
    );
    this.setState({ todosFiltered: filtredTodods });
    console.log(filtredTodods);
  };

  render() {
    return (
      <Main>
        <GlobalStyle />
        <Container>
          <Header>
            <TodoEditor addTask={this.addTask} />
            <Info todos={this.state.todos} />
            <Filter filterTask={this.filterTask} />
          </Header>
          <TodoList
            todos={this.state.todosFiltered}
            changeChecked={this.changeChecked}
            deleteTask={this.deleteTask}
          />
        </Container>
      </Main>
    );
  }
}

export default App;
