import React from "react";

import Schema from "../../lib/schema";
import ValidatedForm from "../../lib/validated-form";

const FormWrapper = ({ definition, layout, onSubmit, values }) => {
  return (
    <ValidatedForm
      onSubmit={onSubmit}
      schema={new Schema(definition)}
      values={values}
    >
      {layout}
    </ValidatedForm>
  );
};

export default FormWrapper;
