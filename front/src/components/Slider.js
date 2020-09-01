import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Pizza1 from "../assets/img/pizzaImg/Pizza1.jpg";
import Pizza2 from "../assets/img/pizzaImg/Pizza2.jpg";
import Pizza3 from "../assets/img/pizzaImg/Pizza3.jpg";
import Pizza4 from "../assets/img/pizzaImg/Pizza4.jpg";
import Pizza5 from "../assets/img/pizzaImg/Pizza5.jpg";
import "./Slider.css";

const slideImages = [Pizza1, Pizza2, Pizza3, Pizza4, Pizza5];
// const [autoPlay, setAutoPlay] = useState(true);

const Slideshow = () => {
  return (
    <div className="Slidercontainer">
      <Slide easing="ease">
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              top: "-1000px",
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              top: "-1000px",
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              top: "-1000px",
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[3]})`,
              top: "-1000px",
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
      </Slide>
      <h1 className="titlePizza">Chez DreamPizz, la pizza de vos rêves !</h1>
    </div>
  );
};

export default Slideshow;
