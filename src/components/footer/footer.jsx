import React from "react";
import "./footer-style.css";
import footer_icon from '../../assets/footer-icon.png';
function footer() {
  return (
    <>
      <footer>
        <div className="footer-icon">
            <img src={footer_icon} alt="" />
        </div>
        <div className="footer-items">
          <a href="#">How it works </a>
          <a href="#">Create an account </a>
          <a href="#">Support </a>
          <a href="#">FAQ</a>
          <a href="#">Twitter </a>
        </div>
        <div className="Copyright">
            <p>Copyright 2023 MeshApp. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default footer;
