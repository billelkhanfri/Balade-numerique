import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

function Parcours() {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <h1>je suis dans la page à Parcours</h1>
    </>
  );
}

export default Parcours;
