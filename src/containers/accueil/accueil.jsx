import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Map from "../../components/map/Map"
import "./accueil.css";
const Accueil = () => {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    
       
        <Map/>
      
    </>
  );
};
export default Accueil;
