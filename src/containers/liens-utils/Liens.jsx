import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

function Liens() {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <> 
     <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    <h1> je suis dans la page Liens</h1></>
   
  )
}

export default Liens