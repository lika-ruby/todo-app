import { Component } from "react";
import { Form, Input, Button } from "./TodoEditor.js";

export class TodoEditor extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.addTask({ ...this.state });
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          value={this.state.inputValue}
          onChange={this.handleChange}
          type="text"
          placeholder="Your todo"
          name="todo-add"
        />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}
