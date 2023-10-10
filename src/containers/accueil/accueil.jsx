import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./accueil.css";
const Accueil = () => {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="white-section"></div>{" "}
      <div className={`container section ${menuOpen ? "menu-open" : ""}`}>
        <h1>je suis dans la page Accueil</h1>
      </div>
    </>
  );
};
export default Accueil;
