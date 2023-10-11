import React from 'react'
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";


function Favoris() {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <> 
     <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

<h1> je suis dans Favoris</h1>
    </>
   
  )
}

export default Favoris