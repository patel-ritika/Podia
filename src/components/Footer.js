import React from 'react';
import "../asset/styles/footer.css";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../asset/images/logo1.png'; // Import your logo

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      {/* Left side logo */}
      <div className="footer-logo">
        <img src={logo} alt="Podia Logo" />
      </div>

      {/* Lists in the footer */}
      <div className="footer-lists">
        {/* Platform */}
        <div className="footer-list">
          <h4>PLATFORM</h4>
          <ul>
            <li>Website builder</li>
            <li>Online store</li>
            <li>Email marketing</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Features */}
        <div className="footer-list">
          <h4>FEATURES</h4>
          <ul>
            <li>Online courses</li>
            <li>Digital downloads</li>
            <li>Webinars</li>
            <li>Coaching</li>
            <li>Landing pages</li>
            <li>Blogging</li>
            <li>Newsletters</li>
            <li>Automations</li>
            <li>Integration</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-list">
          <h4>RESOURCES</h4>
          <ul>
            <li>Changelog</li>
            <li>Podia alternatives</li>
            <li>Demo</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Podia */}
        <div className="footer-list">
          <h4>PODIA</h4>
          <ul>
            <li>About</li>
            <li>Branding</li>
            <li>Become an affiliate</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-list">
          <h4>SUPPORT</h4>
          <ul>
            <li>Contact us</li>
            <li>Help center</li>
            <li>Getting started</li>
            <li>Hire a Podia Pro</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom part with social media icons and copyright */}
    <div className="footer-bottom">
      <div className="social-icons">
        <FaTwitter />
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
      </div>
      <p>
        Podia Labs, Inc. &copy; 2024 &nbsp;|&nbsp; <a href="#">Terms</a> &nbsp;|&nbsp; <a href="#">Privacy</a>
      </p>
    </div>
  </footer>
  );
}

export default Footer;
