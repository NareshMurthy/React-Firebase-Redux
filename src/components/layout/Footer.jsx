import React from "react";
import Copyright from "./../common/Copyright";
import { makeStyles } from "@material-ui/core/styles";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className="bg-dark fixed-bottom">
      <div className="footer-div ">
        <Copyright className="ml-2"></Copyright>
        <div>
          Follow us on
          <a className="fb-ic mr-2 ml-2" href="#">
            <img src={facebook} width="25px" height="25px"></img>
          </a>
          <a className="ins-ic mr-2 ml-2" href="#">
            <img src={instagram} width="25px" height="25px"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
