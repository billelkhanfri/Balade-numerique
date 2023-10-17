import { useParams } from "react-router-dom"
import { data } from "../../data/data.js";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./lieu.css"

function Lieu() {
    const { lieuId } = useParams();
    const lieuData = data.find((lieu) => lieu.id == lieuId);
   const { title, imageUrl, subtitle } = lieuData;  

   const [menuOpen, setMeuOpen] = useState(false);
   const toggleMenu = () => {
  setMeuOpen(!menuOpen);
};
     
    return (
        <> 
         <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div> <h1>je suis dans {title}</h1></div></>
       
    );
  }
  
  export default Lieu;
  