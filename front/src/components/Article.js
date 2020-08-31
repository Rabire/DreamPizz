import React from "react";

import "./Article.css";

import pizzaimage from "../assets/img/kebab.png";

function Article({ pizza }) {
  const iconsPath = require.context("../assets/img/", true);

  return (
    <div className="article-infos">
      <img className="pizza-img" src={pizzaimage} alt="pizza" height={90} />
      <h3 className="pizza-name">NOM DE LA PIZZA</h3>
      <div className="amount">
        <div className="add-rm-button">
          <h4 className="add-rm-button-txt">-</h4>
        </div>
        <h3 className="pizza-nb">10</h3>
        <div className="add-rm-button">
          <h4 className="add-rm-button-txt">+</h4>
        </div>
      </div>
    </div>
  );
}

export default Article;
