import { FaFacebookF } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4> About Us</h4>
            <a href="a">
              <p>Employer</p>
            </a>
            <a href="a">
              <p>Health Plan</p>
            </a>
            <a href="a">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4> About Us</h4>
            <a href="a">
              <p>Employer</p>
            </a>
            <a href="a">
              <p>Health Plan</p>
            </a>
            <a href="a">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4> About Us</h4>
            <a href="a">
              <p>Employer</p>
            </a>
            <a href="a">
              <p>Health Plan</p>
            </a>
            <a href="a">
              <p>Individual</p>
            </a>
          </div>
              <div className="sb__footer-links-div">
            <h4> About Us</h4>
            <a href="a">
              <p>Employer</p>
            </a>
            <a href="a">
              <p>Health Plan</p>
            </a>
            <a href="a">
              <p>Individual</p>
            </a>
          </div>

          <div className="sb__footer-links-div">
            <h4> Coming soon on </h4>
            <div className="socialmedia">
              <p>
                <FaFacebookF size="3rem" />
              </p>
            </div>
          </div>
        </div>

        
      </div>

      <hr></hr>

      <div className="sb__footer-below">
        <div className="sb__footer-copyright">
          <p>@{new Date().getFullYear()} CodeInn. All right reserved</p>
        </div>
        <div className="sb__footer-below-links">
          <a href="a">
            <div>
              <p>Terms & Conditions</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
