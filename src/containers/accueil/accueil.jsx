import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

import "./accueil.css";
import CurrentLocationMap from "../../components/current-location/CurrentLocationMap";
const Accueil = () => {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    
       <CurrentLocationMap/>

      
    </>
  );
};
export default Accueil;
