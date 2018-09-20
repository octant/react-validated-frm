import React from "react";
import { FormWrapper } from "react-validated-frm";

import test from "./forms/example";
import Layout from "./templates/reactstrap";

const Example = ({ methods, values }) => (
  <FormWrapper
    definition={test}
    layout={Layout}
    onChange={methods.change}
    onSubmit={methods.submit}
    values={values}
  />
);

export default Example;
