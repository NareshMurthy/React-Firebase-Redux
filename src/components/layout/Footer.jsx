import React from "react";
import Copyright from "./../common/Copyright";

const Footer = () => {
  return (
    <footer className="bg-danger  fixed-bottom ">
      <div className="container footer-div">
        <div className="d-flex justify-content-around">
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
          <Copyright></Copyright>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
