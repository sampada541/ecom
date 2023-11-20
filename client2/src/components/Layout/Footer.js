import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <table>
        <tr>
          <th>ABOUT</th>
          <th>HELP</th>
          <th>CONSUMER POLICY</th>
          <th>SOCIAL</th>
        </tr>
        <tr>
          <td><Link to="/contact" className="footer-link">Contact Us</Link></td>
          <td><Link to="#" className="footer-link">Payments</Link></td>
          <td><Link to="#" className="footer-link">Cancellation & Returns</Link></td>
          <td><Link to="#" className="footer-link">Facebook</Link></td>
        </tr>
        <tr>
          <td><Link to="/about" className="footer-link">About Us</Link></td>
          <td><Link to="#" className="footer-link">Shipping</Link></td>
          <td><Link to="#" className="footer-link">Terms Of Use</Link></td>
          <td><Link to="#" className="footer-link">Twitter</Link></td>
        </tr>
        <tr>
          <td><Link to="#" className="footer-link">Careers</Link></td>
          <td><Link to="#" className="footer-link">Cancellation & Returns</Link></td>
          <td></td>
          <td><Link to="#" className="footer-link">YouTube</Link></td>
        </tr>
        <tr>
          <td><Link to="#" className="footer-link">SynthGad Stories</Link></td>
          <td><Link to="#" className="footer-link">FAQ</Link></td>
          <td></td>
        </tr>
        <tr>
          <td><Link to="#" className="footer-link">Press</Link></td>
          <td><Link to="#" className="footer-link">Report Infringement</Link></td>
          <td></td>
        </tr>
        <tr>
          <td><Link to="#" className="footer-link">SynthGad Wholesale</Link></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><Link to="#" className="footer-link">Corporate Information</Link></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      {/* Uncomment the following social media links if needed */}
      {/* <div className="footer-social">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div> */}
      <p style={{ textAlign: "center" }}>&copy; 2023 SynthGad App. All rights reserved.</p>
    </div>
  );
};

export default Footer;

