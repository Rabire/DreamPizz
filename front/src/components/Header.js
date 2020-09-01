import React from "react";
import Logo from "../assets/img/Logo3.png";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <a href="/">
          <img className="logo" src={Logo} alt="Logo of DreamPizz"></img>
        </a>
        <div>
          <a className="Atext" href="/menu">
            Menu
          </a>
          <a className="Atext" href="/commande">
            Commandes
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
