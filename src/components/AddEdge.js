import React, { Component } from "react";
import { Button, Form, Select } from "semantic-ui-react";

export class AddEdge extends Component {
  state = {
    from: "",
    to: ""
  };
  onChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addEdge(this.state.from, this.state.to);
    this.setState({ from: "", to: "" });
  };
  createOptions = from => {
    if (from) {
      return Object.keys(this.props.nodeDic)
        .filter(e => this.props.edgeDic[from].indexOf(e) < 0)
        .map(e => {
          var obj = {};
          obj = { text: e, value: e };
          return obj;
        });
    } else {
      return [{ text: "Select 'From' first", value: "" }];
    }
  };
  render() {
    return (
      <React.Fragment>
        <h3>Create New Edge</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              label="From"
              name="from"
              options={Object.keys(this.props.nodeDic).map(n => {
                var obj = {};
                obj = { text: n, value: n };
                return obj;
              })}
              placeholder="from"
              onChange={this.onChange}
              value={this.state.from}
            />
            <Form.Field
              control={Select}
              label="To"
              name="to"
              options={this.createOptions(this.state.from)}
              placeholder="to"
              onChange={this.onChange}
              value={this.state.to}
            />
          </Form.Group>
          {this.props.emptyEdgeInput && (
            <div className="alert alert-warning" role="alert">
              Please select both fields
            </div>
          )}
          <Form.Field control={Button} type="submit">
            Submit
          </Form.Field>
        </Form>
      </React.Fragment>
    );
  }
}

export default AddEdge;
