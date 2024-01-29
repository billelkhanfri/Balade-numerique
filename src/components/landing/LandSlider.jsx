/* eslint-disable react/prop-types */
import { useState } from "react";
import Landing from "./Landing";
import "./LandSlider.css";
import { GoDotFill } from "react-icons/go";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Logo from "../../assets/images/android-chrome-192x192.png";


const LandSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => setCurrentIndex(index);

    return (
      <>
        <div
          className="landing-page"
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        >
          <div className="image-wrapper">
            <img src={Logo} alt="image de Toulon" />
          </div>

          <Landing
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          ></Landing>

          <div className="buttons">
            <button onClick={goToNext}>
              <AiOutlineArrowUp className="previous" />
            </button>
            <button onClick={goToPrevious}>
              <AiOutlineArrowDown className="previous" />
            </button>
          </div>

          <div className="dots-wrapper">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`dots ${currentIndex === index ? "circled" : ""}`}
                onClick={() => goToSlide(index)}
              >
                {" "}
                <GoDotFill />{" "}
              </div>
            ))}
          </div>
           
        </div>
      </>
    );
};

export default LandSlider;
