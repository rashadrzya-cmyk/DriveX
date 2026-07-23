import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}
        <div className="footer-section">
          <h2 className="footer-logo">
            Drive<span>X</span>
          </h2>

          <p>
            DriveX is your trusted destination
            for buying and renting premium cars
            with comfort, safety and style.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/buy">Buy</Link>
          <Link to="/rent">Rent</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt /> 6 October, Egypt
          </p>

          <p>
            <FaPhoneAlt /> +20 116 3570 
          </p>

          <p>
            <FaEnvelope /> rashadrzya@gmail.com
          </p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 DriveX. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;