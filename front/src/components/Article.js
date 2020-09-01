import React from "react";

import NoImg from "../assets/img/no-img.png";

import "./Article.css";

function Article({ pizza, numberOfOccurences }) {
  const iconsPath = require.context("../assets/img/", true);

  return (
    <div className="article-infos">
      <img
        className="pizza-img"
        src={pizza.image ? iconsPath("./" + pizza.image) : NoImg}
        alt="pizza"
        height={90}
      />
      <h3 className="pizza-name">{pizza.name}</h3>
      <div className="amount">
        <div className="add-rm-button">
          <h4 className="add-rm-button-txt">-</h4>
        </div>
        <h3 className="pizza-nb">{numberOfOccurences}</h3>
        <div className="add-rm-button">
          <h4 className="add-rm-button-txt-plus">+</h4>
        </div>
      </div>
    </div>
  );
}

export default Article;
