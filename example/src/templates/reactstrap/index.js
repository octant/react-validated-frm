import React from "react";

import { Field } from "react-validated-frm";
import { Button, Form } from "reactstrap";
import templates from "./templates";

const Layout = ({ buttons, errors, fields, isValid, validatedMethods }) => {
  return (
    <Form>
      {Object.keys(fields).map((field, index) => {
        return (
          <Field
            customTemplates={templates}
            key={index}
            error={errors[field]}
            {...fields[field]}
          />
        );
      })}
      <hr />
      <Button
        color={"primary"}
        disabled={!isValid}
        onClick={validatedMethods.submit}
      >
        Submit
      </Button>{" "}
      <Button onClick={validatedMethods.reset}>Reset</Button>
    </Form>
  );
};

export default Layout;
