import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Handicrafts</span>
          <span>Textiles</span>
          <span>Accessories</span>
          <span>DIY</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
          <div className="item">
        <Link to="/about" style={{textDecoration: "none"}}>
            <h1>About</h1>
            <span>
            At Kalakari, we are on a mission to empower local Indian artisans, craftsmen, small shop owners, and DIY enthusiasts by providing them with a thriving platform to showcase and sell their exceptional creations.
            </span>
        </Link>
          </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Email: support@craftvillageindia.com</span>
          <span>Phone: +91-123-456-7890</span>
          <span>Address</span>
          <span>CraftVillageIndia, 123, Artisan's Lane</span>
          <span>Craftsville, India 56789</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Kalakari</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/Assets/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;