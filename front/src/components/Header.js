import React from "react";
import Logo from "../assets/img/Logo.png";
import "./Header.css";

import basket from "../assets/img/shopping-basket.png";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <a href="/">
          <img className="logo" src={Logo} alt="Logo of DreamPizz"></img>
        </a>
        <div>
          <a className="jsp" href="/menu">
            Menu
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Header;
