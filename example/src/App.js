import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import FormWrapperExample from "./FormWrapperExample";
import RenderPropsExample from "./RenderPropsExample";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit = form => {
    console.log(form);
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleInit = form => {
    this.setState({ ...form });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>React Validated Form Examples</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h2>FormWrapper Example</h2>
            <FormWrapperExample
              methods={{
                submit: this.handleSubmit,
                change: this.handleChange
              }}
              values={this.state}
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h2>Functional Props Example</h2>
            <RenderPropsExample methods={{ submit: this.handleSubmit }} />
          </Col>
        </Row>
      </Container>
    );
  }
}
