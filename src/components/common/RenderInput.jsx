import React from "react";
import { Form } from "semantic-ui-react";
const RenderInput = props => {
  const { type, id, placeholder, onChange, value, name } = props;

  return (
    <Form.Input
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default RenderInput;
