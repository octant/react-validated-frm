import React from "react";

import Schema from "../../lib/schema";
import ValidatedForm from "../../lib/validated-form";

const FormWrapper = ({ definition, layout, onChange, onSubmit, values }) => {
  return (
    <ValidatedForm
      onChange={onChange}
      onSubmit={onSubmit}
      schema={new Schema(definition)}
      values={values}
    >
      {layout}
    </ValidatedForm>
  );
};

export default FormWrapper;
