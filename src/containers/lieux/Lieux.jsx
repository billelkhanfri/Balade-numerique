import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";


function Lieux() {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
<h1>Lieux</h1>
    </>
  );
}

export default Lieux;
