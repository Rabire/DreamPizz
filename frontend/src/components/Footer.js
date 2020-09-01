import React from "react";
import map from "../assets/img/mapF.png";
import instagramIcon from "../assets/img/instagramIcon.png";
import twitterIcon from "../assets/img/TwitterIcon.png";
import facebookIcon from "../assets/img/facebookIcon.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h2 className=" txt-white">Contact</h2>
        <div className="container">
          <div className="addressContainer">
            <h3 className=" txt-white">DreamPizz</h3>
            <p className="addressText  txt-white">
              88 Rue de Gerland - 69007 - Lyon
            </p>
            <p className=" txt-white">Près du métro Place Jean Jaurès</p>
            <br />
            <p className="phoneMail txt-white">+33 4 12 34 56 78</p>
            <p className="phoneMail txt-white">dreampizz@pizza.com</p>
          </div>
          <div>
            <img
              className="map"
              src={map}
              alt="Position géographique de DreamPizz"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className=" txt-white">Réseaux sociaux</h2>
        <div className="addressContainer">
          <p className="networkText txt-white">
            Rejoignez-nous sur nos différents réseaux !
          </p>
          <div className="networksContainer">
            <a href="https://facebook.com">
              <img
                className="facebookIcon"
                src={facebookIcon}
                alt="Icone de twitter"
              />
            </a>
            <a href="https://instagram.com">
              <img
                className="instagramIcon"
                src={instagramIcon}
                alt="Icone de twitter"
              />
            </a>
            <a href="https://twitter.com">
              <img
                className="twitterIcon"
                src={twitterIcon}
                alt="Icone de twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
