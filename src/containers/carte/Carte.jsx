import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
function Carte() {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <>
            <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <h1>je suis dans la page Carte</h1>
    </>
  );
}

export default Carte;
