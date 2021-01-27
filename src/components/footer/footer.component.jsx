import React from "react";
import "./footer.styles.scss";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-left">
        <h3>Support</h3>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Downloads</li>
        </ul>
      </div>
      <div className="footer-middle">
        <h3>News & Info</h3>
        <ul>
          <li>About Famazona</li>
          <li>Product Support</li>
          <li>Product Manuals</li>
          <li>Product Registration</li>
        </ul>
      </div>
      <div className="footer-middle">
        <h3>About Us</h3>
        <ul>
          <li>Promotions</li>
          <li>Partners</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact</h3>
        <ul>
          <li>Phone 054789587</li>
          <li>Email: orders@famazona.com</li>
          <li>On Social Media</li>
        </ul>
      </div>
    </div>
    <div className="footer-below">
      <p>&#169; 2020 Famazona using React Library</p>
    </div>
  </footer>
);

export default Footer;
