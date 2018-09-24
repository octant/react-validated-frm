import React from "react";

import Schema from "../../lib/schema";
import ValidatedForm from "../../lib/validated-form";

const FormWrapper = React.forwardRef((props, ref) => {
  const {
    buttons,
    definition,
    layout,
    onChange,
    onInit,
    onSubmit,
    values
  } = props;
  return (
    <ValidatedForm
      buttons={buttons}
      ref={ref}
      onInit={onInit}
      onChange={onChange}
      onSubmit={onSubmit}
      schema={new Schema(definition)}
      values={values}
    >
      {layout}
    </ValidatedForm>
  );
});

export default FormWrapper;
