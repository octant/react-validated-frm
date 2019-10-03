import React from "react";
import ValidatedForm, { Schema, Field } from "react-validated-frm";

import test from "./forms/example";

const Example = ({ methods }) => (
  <ValidatedForm onSubmit={methods.submit} schema={new Schema(test)}>
    {({ fields, errors, isValid, validatedMethods }) => {
      return (
        <div>
          <form>
            <Field error={errors["email"]} {...fields["email"]}>
              {props => (
                <div style={{ marginTop: "0.25em" }}>
                  <label htmlFor={props.name}>
                    <strong>{props.label}</strong>
                  </label>
                  <br />
                  <input {...props} />
                  <br />
                  <div
                    style={{
                      height: "1em",
                      color: "red"
                    }}
                  >
                    {props.error ? props.error : ""}
                  </div>
                </div>
              )}
            </Field>

            <Field error={errors["firstName"]} {...fields["firstName"]}>
              {props => (
                <div style={{ marginTop: "0.25em" }}>
                  <label htmlFor={props.name}>
                    <strong>{props.label}</strong>
                  </label>
                  <br />
                  <input {...props} />
                  <br />
                  <div
                    style={{
                      height: "1em",
                      color: "red"
                    }}
                  >
                    {props.error ? props.error : ""}
                  </div>
                </div>
              )}
            </Field>

            <Field error={errors["middleInitial"]} {...fields["middleInitial"]}>
              {props => (
                <div style={{ marginTop: "0.25em" }}>
                  <label htmlFor={props.name}>
                    <strong>{props.label}</strong>
                  </label>
                  <br />
                  <input {...props} />
                  <br />
                  <div
                    style={{
                      height: "1em",
                      color: "red"
                    }}
                  >
                    {props.error ? props.error : ""}
                  </div>
                </div>
              )}
            </Field>

            <Field error={errors["lastName"]} {...fields["lastName"]}>
              {props => (
                <div style={{ marginTop: "0.25em" }}>
                  <label htmlFor={props.name}>
                    <strong>{props.label}</strong>
                  </label>
                  <br />
                  <input {...props} />
                  <br />
                  <div
                    style={{
                      height: "1em",
                      color: "red"
                    }}
                  >
                    {props.error ? props.error : ""}
                  </div>
                </div>
              )}
            </Field>

            <Field error={errors["dob"]} {...fields["dob"]}>
              {props => (
                <div style={{ marginTop: "0.25em" }}>
                  <label htmlFor={props.name}>
                    <strong>{props.label}</strong>
                  </label>
                  <br />
                  <input {...props} />
                  <br />
                  <div
                    style={{
                      height: "1em",
                      color: "red"
                    }}
                  >
                    {props.error ? props.error : ""}
                  </div>
                </div>
              )}
            </Field>

            <Field
              error={errors["numberOfSiblings"]}
              {...fields["numberOfSiblings"]}
            >
              {props => (
                <div style={{ marginTop: "0.25em" }}>
                  <label htmlFor={props.name}>
                    <strong>{props.label}</strong>
                  </label>
                  <br />
                  <input {...props} />
                  <br />
                  <div
                    style={{
                      height: "1em",
                      color: "red"
                    }}
                  >
                    {props.error ? props.error : ""}
                  </div>
                </div>
              )}
            </Field>

            <Field
              error={errors["hasDriversLicense"]}
              {...fields["hasDriversLicense"]}
            >
              {props => (
                <div style={{ marginTop: "0.25em" }}>
                  <label htmlFor={props.name}>
                    <strong>{props.label}</strong>
                  </label>
                  <br />
                  <select {...props}>
                    {props.options.map((opt, i) => (
                      <option key={i} value={opt.value}>
                        {opt.text}
                      </option>
                    ))}
                  </select>
                  <br />
                  <div
                    style={{
                      height: "1em",
                      color: "red"
                    }}
                  >
                    {props.error ? props.error : ""}
                  </div>
                </div>
              )}
            </Field>

            <Field error={errors["upgrade"]} {...fields["upgrade"]}>
              {props => (
                <div style={{ marginTop: "0.25em" }}>
                  <legend htmlFor={props.name}>
                    <strong>{props.label}</strong>
                  </legend>
                  <br />
                  {props.options.map(({ text, ...option }) => {
                    return (
                      <div key={option.id}>
                        <label>
                          <input {...option} /> {text}
                        </label>
                      </div>
                    );
                  })}
                  <br />
                  <div
                    style={{
                      height: "1em",
                      color: "red"
                    }}
                  >
                    {props.error ? props.error : ""}
                  </div>
                </div>
              )}
            </Field>

            <Field error={errors["agree"]} {...fields["agree"]}>
              {props => (
                <div style={{ marginTop: "0.25em" }}>
                  <label htmlFor={props.name}>
                    <strong>{props.label}</strong>
                  </label>
                  <br />
                  <input {...props} />
                  <br />
                  <div
                    style={{
                      height: "1em",
                      color: "red"
                    }}
                  >
                    {props.error ? props.error : ""}
                  </div>
                </div>
              )}
            </Field>

            <hr />

            <button
              disabled={!isValid}
              onClick={validatedMethods.submit}
              type="button"
            >
              Submit
            </button>
            <button onClick={validatedMethods.reset} type="button">
              Reset
            </button>
          </form>
        </div>
      );
    }}
  </ValidatedForm>
);

export default Example;
