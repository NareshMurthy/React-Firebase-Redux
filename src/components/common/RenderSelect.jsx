import React from "react";

import Select from "react-select";
const RenderSelect = props => {
  const { id, options, onChange } = props;
  return (
    <div className="field mb-4">
      <Select
        id={id}
        placeholder={id}
        options={options}
        onChange={e => onChange(e, id)}
      />
    </div>
  );
};

export default RenderSelect;
