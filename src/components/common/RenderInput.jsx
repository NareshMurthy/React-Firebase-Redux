import React from "react";

import TextField from "@material-ui/core/TextField";
const RenderInput = props => {
  const { type, id, label, placeholder, onChange, error } = props;

  return (
    <div>
      <TextField
        error={error}
        margin="dense"
        variant="outlined"
        required
        fullWidth
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        label={label}
        name={id}
        autoComplete={id}
      />

      <small id={id} className="text-danger">
        {error}
      </small>
    </div>
  );
};

export default RenderInput;
