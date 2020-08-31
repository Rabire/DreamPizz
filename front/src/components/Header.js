import React from "react";
import Logo from "../assets/img/Logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <img className="logo" src={Logo} alt="Logo of DreamPizz"></img>
        <a className="tilte" href="/">
          Dream Pizz
        </a>
      </div>
      <br />
    </div>
  );
}

export default Header;
