import React from 'react'
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";



function circuit() {
  const [menuOpen, setMeuOpen] = useState(false);
const toggleMenu = () => {
  setMeuOpen(!menuOpen);
};
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

<h1>je suis dans la page Circuit</h1>
    </>
  
  )
}

export default circuit