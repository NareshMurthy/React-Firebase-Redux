import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-danger fixed-bottom ">
      <div className="container footer-div">
        <div className="d-flex justify-content-around">
          <a className="fb-ic">
            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a className="tw-ic">
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a className="gplus-ic">
            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a className="li-ic">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a className="ins-ic">
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <p>
            {" "}
            © 2019 Copyright:
            <a href="https://google.com"> myproject.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
