import React from "react";

class ReactValidatedForm extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;

    const validProps = {};
    const passedValues = this.props.values || {};

    for (const key in props.schema.schemaDefinition) {
      if (passedValues.hasOwnProperty(key)) {
        validProps[key] = props.values[key] === null ? "" : props.values[key];
      }
    }

    this.state = { ...props.schema.defaultValues(), ...validProps };
  }

  componentDidMount() {
    if (this.props.onInit !== undefined) {
      this.props.onInit(this.state);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.onChange !== undefined && Object.keys(props.values).length > 0) {
      return { ...state, ...props.values };
    } else {
      return null;
    }
  }

  change = (key, value) => {
    if (this.props.onChange !== undefined) {
      this.props.onChange(key, value);
    } else {
      this.setState(() => ({ [key]: value }));
    }
  };

  reset = () => {
    this.setState(() => this.props.schema.defaultValues());
  };

  submit = () => {
    this.props.onSubmit({ ...this.state });
  };

  fields() {
    const { schemaDefinition } = this.props.schema;
    const fields = {};

    Object.keys(schemaDefinition).forEach(name => {
      const field = {
        definition: schemaDefinition[name],
        methods: {
          change: this.change
        },
        name,
        value: this.state[name]
      };
      fields[name] = field;
    });

    return fields;
  }

  render() {
    return this.props.children({
      customTemplates: this.props.customTemplates,
      buttons: this.props.buttons,
      fields: this.fields(),
      values: { ...this.state },
      errors: this.props.schema.validate(this.state),
      isValid: this.props.schema.isValid(this.state),
      validatedMethods: {
        change: this.change,
        reset: this.reset,
        submit: this.submit
      }
    });
  }
}

export default ReactValidatedForm;
