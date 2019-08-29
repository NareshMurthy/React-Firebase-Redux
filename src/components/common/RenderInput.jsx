import React from "react";

const RenderInput = props => {
  const { type, id, placeholder, onChange, error } = props;
  let borderBottom = "lightgray";

  error ? (borderBottom = "red") : (borderBottom = "green");
  return (
    <div className="field mb-4">
      <input
        style={{
          border: "none",
          borderBottom: "0.8px solid " + borderBottom,
          borderRadius: "0"
        }}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        required="required"
      />
      <div className="form-text">
        <small id={id} className="text-danger">
          {error}
        </small>
      </div>
    </div>
  );
};

export default RenderInput;
