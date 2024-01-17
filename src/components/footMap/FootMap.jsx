import React, { useState, useEffect, useRef } from "react";
import "./footMap.css";
import parcours from "../../assets/V2-Plan-Balade-Numerique-1.png";

function FootMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ kilometers: 0, steps: 0 });

  const countRef1 = useRef(null);
  const countRef2 = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const footMapHeight = document.querySelector(".footmap").offsetHeight;
      const threshold = footMapHeight / 2;

      if (scrollPosition > threshold) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const options = {
        start1: 0,
        end1: 269,
        start2: 0,
        end2: 5186,
        duration: 2,
        delay: 0.5,
        ratio: 8, // Adjust the ratio to control the speed difference
      };

      intervalRef.current = setInterval(() => {
        setCounts((prev) => ({
          kilometers: Math.min(prev.kilometers + 1, options.end1),
          steps: Math.min(prev.steps + options.ratio, options.end2),
        }));

        if (countRef1.current) {
          countRef1.current.innerText = Math.floor(counts.kilometers);
        }

        if (countRef2.current) {
          countRef2.current.innerText = Math.floor(counts.steps);
        }

        if (counts.kilometers >= options.end1 && counts.steps >= options.end2) {
          clearInterval(intervalRef.current);
        }
      }, (options.duration * 1000) / Math.max(options.end1 - options.start1, options.end2 - options.start2));

      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [isVisible, counts]);

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
