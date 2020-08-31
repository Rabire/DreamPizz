import React from "react";
import Logo from "../assets/img/Logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <a href="/accueil">
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
