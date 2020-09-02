import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Pizza1 from "../assets/img/slider/Pizza1.jpg";
import Pizza2 from "../assets/img/slider/Pizza2.jpg";
import Pizza3 from "../assets/img/slider/Pizza3.jpg";
import Pizza4 from "../assets/img/slider/Pizza4.jpg";
import Pizza5 from "../assets/img/slider/Pizza5.jpg";
import "./Slider.css";

const slideImages = [Pizza1, Pizza2, Pizza3, Pizza4, Pizza5];
// const [autoPlay, setAutoPlay] = useState(true);

const Slideshow = () => {
  return (
    <div className="Slidercontainer">
      <h1 className="welcome-parse">DreamPizz, la pizza de vos rêves !</h1>
      <Slide easing="ease">
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[3]})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
