import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

export class AddNode extends Component {
  state = {
    label: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.addNode(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    return (
      <React.Fragment>
        <h3>Create New Node</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field
            control={Input}
            label="Label"
            placeholder="label"
            name="label"
            value={this.state.label}
            onChange={this.onChange}
          />
          {this.props.nodeExist && (
            <div className="alert alert-danger" role="alert">
              <strong>Label already exists!</strong> Try enter a new label name.
            </div>
          )}
          {this.props.emptyNodeInput && (
            <div className="alert alert-warning" role="alert">
              Please enter a label name
            </div>
          )}
          {this.props.nodeWhiteSpace && (
            <div className="alert alert-info" role="alert">
              Please enter a label name without spaces in it
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

export default AddNode;
