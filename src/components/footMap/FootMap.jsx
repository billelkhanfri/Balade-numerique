import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "./footMap.css";
import parcours from "../../assets/V2-Plan-Balade-Numerique-1.png";

function FootMap() {
  const [isVisible, setIsVisible] = useState(false);

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
              <CountUp start={0} end={269} duration={2} delay={0.5}>
                {({ countUpRef }) => (
                  <p className="count-up-text" ref={countUpRef} />
                )}
              </CountUp>
              <p>Kilomètres</p>
            </div>
            <div className="counter-text">
              <CountUp start={0} end={5186} duration={2} delay={0.5}>
                {({ countUpRef }) => (
                  <p className="count-up-text"  ref={countUpRef} />
                )}
              </CountUp>
              <p>Petits pas</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FootMap;
