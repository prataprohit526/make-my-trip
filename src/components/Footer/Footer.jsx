import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contents">
        <div className="media-link">
          <h1>
            <a href="nj" target={"_blank"}>
              <FaTwitter />
            </a>
          </h1>
          <h1>
            <a href="ede" target={"_blank"}>
              <FaFacebookF />
            </a>
          </h1>
        </div>
        <div className="copyright">
          <h3>
            © 2024 <Link to={"/"}>MAKEMYTRIP CLONE</Link>
          </h3>{" "}
          by Rohit
          <br />
          Country{" "}
          <h3>
            <a
              href={
                "/https://www.linkedin.com/in/rohit-pratap-yadav-9b3780258/"
              }
            >
              India
            </a>
            USA UAE
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
