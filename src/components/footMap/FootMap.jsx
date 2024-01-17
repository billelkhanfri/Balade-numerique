import React, { useState, useEffect, useRef } from "react";
import "./footMap.css";
import parcours from "../../assets/V2-Plan-Balade-Numerique-1.png";

function FootMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const countRef1 = useRef(null);
  const countRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const footMapHeight = document.querySelector(".counter").offsetHeight;
      const threshold = footMapHeight / 2;

      if (scrollPosition > threshold && !isVisible) {
        setIsVisible(true);
        setElapsedTime(0);

        const id = setInterval(() => {
          setElapsedTime((prev) => prev + 50); // Adjust the interval duration as needed
        }, 50); // Adjust the interval duration as needed

        setIntervalId(id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, [isVisible, intervalId]);

  // ...

  const options = {
    start1: 0,
    end1: 2.96, // Adjust the correct end value for kilometers
    start2: 0,
    end2: 5186, // Adjust the correct end value for steps
    ratio: 1, // Adjust the ratio to control the speed difference
  };

  const progress1 = Math.min((elapsedTime / 2000) * options.end1, options.end1); // Adjust the total duration as needed
  const progress2 = Math.min(
    (elapsedTime / 2000) * options.ratio * options.end2,
    options.end2
  );

  // ...

  useEffect(() => {
    if (countRef1.current) {
      countRef1.current.innerText = progress1.toFixed(2);
    }

    if (countRef2.current) {
      countRef2.current.innerText = Math.floor(progress2);
    }

    if (progress1 >= options.end1 && progress2 >= options.end2) {
      clearInterval(intervalId);
    }
  }, [progress1, progress2, intervalId, options.end1, options.end2]);

  return (
    <div className="footWrapper">
      <div className="footmap">
        <img src={parcours} alt="parcours" />
      </div>
      <div className="foottext">
        <h2>1 ITINÉRAIRE 2 EMBARQUEMENTS</h2>
        <p>
          Vous pourrez débuter votre parcours à tout moment, toutefois, deux
          points d’embarquements vous sont proposés : Place de la Liberté et
          l’Office de Tourisme. Un voyage de 3km qui comptabilise environ 5000
          pas, de quoi arpenter…
        </p>
      </div>
      <div className="counter">
        {isVisible && (
          <div className="counter">
            <div className="counter-text">
              <p className="count-up-text" ref={countRef1} />
              <p>Kilomètres</p>
            </div>
            <div className="counter-text">
              <p className="count-up-text" ref={countRef2} />
              <p>Petits pas</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FootMap;
