import React from "react";

import { BarLoader } from "react-spinners";

const Spinner = props => {
  return (
    <BarLoader
      height={3}
      width={600}
      color={"rgb(255, 124, 83)"}
      loading={props.loading}
    />
  );
};

export default Spinner;
