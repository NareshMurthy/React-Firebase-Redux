import React from "react";
import Copyright from "./../common/Copyright";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

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
    <footer className="bg-danger fixed-bottom">
      <div className="footer-div ">
        <Copyright className="ml-2"></Copyright>
        <div>
          <a className="fb-ic" href="#">
            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a className="tw-ic" href="#">
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a className="gplus-ic" href="#">
            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a className="li-ic" href="#">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a className="ins-ic" href="#">
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
