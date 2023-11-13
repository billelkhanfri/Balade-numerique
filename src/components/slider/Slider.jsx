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

   const openGoogleMaps = () => {
     const destination = "43.12566961111021,5.930514335632324";
     const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
     window.open(url, "_blank");
   };

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
        <div className="direction">
          <button
                  className="lieux-content-button"
                  onClick={openGoogleMaps}
                >
                  Embarquer
                </button>
      </div>
    </>
  );
}

export default Slider;
