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
      h4: "Découvrez les Halles de Toulon",
      h1: "Explorez la gastronomie locale",
      p: "Plongez dans l'atmosphère vibrante des Halles de Toulon, où les saveurs locales et la gastronomie méditerranéenne se rencontrent. Découvrez les étals remplis de produits frais, rencontrez les artisans passionnés et laissez-vous séduire par la richesse culinaire de la région.",
    },
    {
      h4: "Exploration de la vieille ville de Toulon",
      h1: "Découvrez l'histoire locale",
      p: "Plongez dans l'histoire en explorant la vieille ville de Toulon. Admirez la majestueuse cathédrale, imprégnez-vous de l'architecture ancienne et flânez dans les ruelles pittoresques. Découvrez les trésors cachés de la ville et ressentez son charme unique.",
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
          <h2>{content.h1}</h2>
        </div>
        <div className={paragClass}>
          <p>{content.p}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
