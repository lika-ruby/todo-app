import { Component } from "react";
import { Form, Input } from "./Filter.js";

export class Filter extends Component {
  state = {
    inputValue: "",
  };
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
    this.handleSubmit(e.target.value);
  };

  handleSubmit = (inputValue) => {
    console.log(inputValue);
    this.props.filterTask({ inputValue });
  };

  render() {
    return (
      <Form>
        <Input
          type="text"
          name="todo-filter"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Find you text"
        />
      </Form>
    );
  }
}
