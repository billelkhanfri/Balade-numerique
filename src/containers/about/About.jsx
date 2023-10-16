import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";



function About() {
    const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  }
  return (
    <>
     <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

     <h1>je suis dans la page à propos</h1>
    
    </>
   
  )
}

export default About