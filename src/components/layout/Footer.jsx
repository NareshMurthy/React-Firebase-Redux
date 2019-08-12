import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer font-small elegant-color fixed-bottom darken-3">
      <div className="container footer-div">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
