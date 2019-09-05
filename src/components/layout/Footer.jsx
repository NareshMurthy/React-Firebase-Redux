import React from "react";
import Copyright from "./../common/Copyright";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
const Footer = () => {
  return (
    <footer className="bg-dark ">
      <div className="footer-div ">
        <Copyright className="ml-2"></Copyright>
        <div>
          Follow us on
          <a className="fb-ic mr-2 ml-2" href="#">
            <img
              src={facebook}
              alt="facebooklogo"
              width="25px"
              height="25px"
              href="#"
            ></img>
          </a>
          <a className="ins-ic mr-2 ml-2" href="#">
            <img
              src={instagram}
              alt="instagramlogo"
              width="25px"
              height="25px"
              href="#"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
