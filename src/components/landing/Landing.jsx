import { useState, useEffect } from "react";
import "./LandSlider.css";

// eslint-disable-next-line react/prop-types
const Header = ({ currentIndex, setCurrentIndex }) => {
  const initialContent = [
    {
      h4: "Découvrez le Vieux-Port de Toulon",
      h1: "Promenade au cœur de l'histoire maritime",
      p: "Explorez le charmant Vieux-Port de Toulon, imprégné d'histoire maritime. Admirez les bateaux de pêche, dégustez des fruits de mer frais et plongez-vous dans l'ambiance pittoresque de ce quartier emblématique.",
    },
    {
      h4: "Parcours artistique à travers le quartier du Mourillon",
      h1: "Rencontrez l'art local et la créativité",
      p: "Flânez dans les ruelles du Mourillon, quartier bohème de Toulon, où l'art et la créativité s'expriment. Découvrez des galeries d'art, des boutiques uniques et laissez-vous inspirer par l'atmosphère artistique de ce quartier animé.",
    },
    {
      h4: "Escapade naturelle au Mont Faron",
      h1: "Randonnée panoramique avec vue sur la ville",
      p: "Élevez-vous au-dessus de la ville en faisant une randonnée au Mont Faron. Profitez d'une vue imprenable sur Toulon, la mer Méditerranée et les îles environnantes. Une escapade naturelle qui offre une pause relaxante loin de l'agitation urbaine.",
    },
  ];

  // Utilisez maintenant 'baladesToulon' dans votre application ou site web pour présenter les différentes balades numériques sur la ville de Toulon.

  const [content, setContent] = useState(initialContent[currentIndex]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false); // Remove animation class
    setTimeout(() => {
      setAnimate(true); // Reapply a

      //animation class after a small delay
    }, 10);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % initialContent.length);
    }, 7000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Update content whenever currentIndex changes
  useEffect(() => {
    setContent(initialContent[currentIndex]);
  }, [currentIndex]);

  const titleClass = animate ? "title animated" : "title";
  const bigTitleClass = animate ? "big-title animated" : "big-title";
  const paragClass = animate ? "parag animated" : "parag";

  return (
    <>
      <div className="overlay"></div>

      <div className="introduction-text container">
        <div className={titleClass}>
          <h4>{content.h4}</h4>
        </div>
        <div className={bigTitleClass}>
          <h1>{content.h1}</h1>
        </div>
        <div className={paragClass}>
          <p>{content.p}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
