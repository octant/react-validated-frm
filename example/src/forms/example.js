import differenceInCalendarYears from "date-fns/difference_in_years";
import addYears from "date-fns/add_years";
import format from "date-fns/format";

const schema = {
  email: {
    type: "email",
    label: "Email Address",
    placeholder: "example@address.com",
    required: true,
    pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    message: "Improperly formatted email address"
  },

  firstName: {
    type: "text",
    label: "First Name",
    required: true,
    min: 3,
    pattern: /^[A-Z]/
  },

  middleInitial: {
    type: "text",
    label: "Initial",
    defaultValue: "",
    max: 1,
    pattern: /^[A-Z]$/
  },

  lastName: {
    type: "text",
    label: "Last Name",
    required: true,
    min: 3,
    pattern: /^[A-Z]/
  },

  dob: {
    type: "date",
    label: "Date of Birth",
    min: format(addYears(new Date(), -65), "YYYY-MM-DD"),
    max: format(new Date(), "YYYY-MM-DD"),
    required: true
  },

  numberOfSiblings: {
    type: "number",
    label: "# of Siblings",
    min: 0
  },

  hasDriversLicense: {
    type: "select",
    label: "Do you have a driver's license?",
    required: true,
    options: [
      {},
      { value: "true", text: "Yes" },
      { value: "false", text: "No" }
    ],
    custom: ({ dob, hasDriversLicense }) => {
      const ofDrivingAge = differenceInCalendarYears(new Date(), dob) >= 16;

      return hasDriversLicense === "true" ? ofDrivingAge && dob : true;
    },
    message: "You must be 16 to have a driver's license"
  },

  upgrade: {
    type: "radio",
    label: "Upgrade account?",
    required: true,
    options: [
      { value: "accept", text: "Yes, upgrade my account" },
      { value: "decline", text: "No, I'll keep what I have" }
    ]
  },

  agree: {
    type: "checkbox",
    required: true,
    label: "I agree to the terms and conditions",
    custom: ({ agree }) => agree === true,
    message: "You must agree to the terms and conditions"
  }
};

export default schema;
