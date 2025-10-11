import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#e01b6f",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h4 style={{ margin: 0 }}>© All Rights Reserved - Foodify</h4>

      <div style={{ display: "flex", gap: "15px", fontSize: "20px" }}>
        <a href="#" style={{ color: "white" }} aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" style={{ color: "white" }} aria-label="Facebook">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
