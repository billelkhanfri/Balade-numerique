import "./slider.css";
import { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { FaDirections } from "react-icons/fa";

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {

    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => setCurrentIndex(index);
  useEffect(() => {});
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="imgs-wrapper">
        <img src={images[currentIndex]} alt="" />
      </div>
      <div className="dots-wrapper">
        {images.map((slide, index) => (
          <div
            key={index}
            className={`dots ${currentIndex === index ? "colored" : ""}`}
            onClick={() => goToSlide(index)}
          >
            {" "}
            <GoDotFill className="dots-svg" />{" "}
          </div>
        ))}
      </div>
      <div className="lieu-section-two">
        <div>
          <img src="/src/assets/images/Calque_1.svg" alt="Custom Icon" />
        </div>
        <div className="direction">
          <FaDirections className="itineraire-icon" />
          <div className="itinéraire">
            <p>Itinéraire</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
