import "./slider.css";
import { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => setCurrentIndex(index);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX !== null) {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchEndX - touchStartX;

      // Adjust the sensitivity by changing the threshold value (e.g., 50)
      if (deltaX > 50) {
        goToPrevious();
        setTouchStartX(null);
      } else if (deltaX < -50) {
        goToNext();
        setTouchStartX(null);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  

  return (
    <>
      <div
        className="imgs-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
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
      
    </>
  );
}

export default Slider;
