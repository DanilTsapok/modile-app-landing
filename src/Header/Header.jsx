import React from "react";
import "./header-style.css";
import logo from "./icons/logo.png";

function Header() {
  return (
    <div>
      <header>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav">
          <a className="item" href="#">
            Create an account
          </a>
          <a className="item" href="#">
            How it works
          </a>
          <a className="item" href="#">
            Support
          </a>
          <a className="item" href="#">
            FAQ
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
