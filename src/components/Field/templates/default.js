import React from "react";

class DefaultInput extends React.Component {
  checkbox() {
    return (
      <div>
        <input {...this.props} /> {this.props.label}
      </div>
    );
  }

  radio() {
    const { options } = this.props;
    return options.map(({ text, ...option }) => {
      return (
        <div key={option.id}>
          <input {...option} />
          <label htmlFor={option.id}>{text}</label>
        </div>
      );
    });
  }

  select() {
    return (
      <select {...this.props}>
        {this.props.options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    );
  }

  text() {
    return <input {...this.props} />;
  }

  field() {
    const type = this.props.type;

    switch (type) {
      case "checkbox":
        return this.checkbox();
      case "radio":
        return this.radio();
      case "select":
        return this.select();
      default:
        return this.text();
    }
  }

  render() {
    return this.field();
  }
}

export default DefaultInput;
