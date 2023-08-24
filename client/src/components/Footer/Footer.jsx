import { Link } from "react-router-dom";
import "./Footer.scss";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer">
        <div className="left">
          <div className="socials">
            <Link to={"https://github.com/prataprohit526"} target={"_blank"}>
              <FaGithub />
            </Link>

            <Link
              to={"https://www.linkedin.com/in/rohit-pratap-yadav-9b3780258/"}
              target={"_blank"}
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="right">
          <div>MakeMyTrip Clone © 2023</div>
          <div>Created by Rohit</div>
        </div>
      </div>
      <div className="print-watermark">MakeMyTrip Clone by Rohit</div>
    </section>
  );
};

export default Footer;
