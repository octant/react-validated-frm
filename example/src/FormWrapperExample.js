import React from "react";
import { FormWrapper } from "react-validated-frm";

import test from "./forms/example";
import Layout from "./templates/reactstrap";

const Example = ({ methods }) => (
  <FormWrapper definition={test} layout={Layout} onSubmit={methods.submit} />
);

export default Example;
