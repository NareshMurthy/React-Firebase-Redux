import React from "react";

import Link from "@material-ui/core/Link";
import react from "../../assets/react.svg";
import firebase from "../../assets/firebase.svg";

const Copyright = () => {
  return (
    <div className="ml-2">
      Built with
      <img src={react} className="ml-1 mr-1" width="25px" height="25px"></img>
      <img
        src={firebase}
        className="ml-1 mr-1"
        width="25px"
        height="25px"
      ></img>
      by{"     "}
      <Link href="#">Naresh</Link>
    </div>
  );
};

export default Copyright;
