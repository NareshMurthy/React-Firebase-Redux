import React from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
const Copyright = () => {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        My Project
      </Link>{" "}
      {new Date().getFullYear()}
      {". Donate "}
      <Link color="inherit" href="https://material-ui.com/">
        Patreon.
      </Link>
    </Typography>
  );
};

export default Copyright;
