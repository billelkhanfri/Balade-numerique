import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Thumb  from "../../components/thumb/Thumb"

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
       <Thumb/>

      
    </>
  );
};
export default Accueil;
