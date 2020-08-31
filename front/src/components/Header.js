import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <h1>Dream Pizz</h1>
        <a href="/">Commander</a>
        <a href="/users">Contact</a>
      </div>
      <br />
    </div>
  );
}

export default Header;
