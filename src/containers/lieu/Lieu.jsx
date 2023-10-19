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
const itemWrapperStyle = {
  backgroundImage: `url(${imageUrl})`,
  height: `448px`,
  position:`relative`,
  width: `100%`,

backgroundPosition:  `center center, center `,
backgroundRepeat: `no-repeat`,
backgroundSize: `cover`,
marginBottom:`370px`,

};
    return (
        <> 
        <div className="lieu-item">
         <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
         <div className="item-head">
        <h2> {title}</h2>
    </div>
    <div className="item-wrapper" style={itemWrapperStyle}>
     
<div className="img-text">
  <p style={{ opacity: 1 }}>C’est en 1858, à l’initiative du ministère de la Guerre, que cette grande place est créée. Elle symbolise à l’époque le ‘’Centre du Toulon Moderne’ . En 1875 sont construits l’hôtel de la subdivision ainsi que le cercle militaire. C’est alors en 1889 qu’elle prend le nom de «place de la Liberté». <br/>  <br/>

Au centre de la place se trouve la Fontaine de la Fédération, taillée dans la pierre de Calissanne. Réalisée la même année par les frères sculpteurs Allar, elle représente le départ de la statue de la Liberté vers les États-Unis. Elle est alors inaugurée par le président Carnot en 1890, et rassemble trois figures représentant la France, la Force et la Justice.<br/> <br/>

Situé derrière la statue, l’emblématique immeuble de l’ancien Grand Hôtel héberge désormais le Théâtre Liberté, dirigé par Charles et Philippe Berling depuis son inauguration en septembre 2011.</p>
</div>
    </div>
    <div className="circle "> </div>
    <div className="coup-coeur">
    <h3>Découvrir notre sélection 
coup de coeur</h3>

    </div>
    
    <div className="underline s"></div>
   
    
    <div className="triangle"></div>
    
<div className="historic-text">
  <h4>CINEMA LE ROYAL</h4>
  <p>
  Situé au 2 rue du Docteur Jean Bertholet et construit dans les années 1930, il était au départ un simple cinéma de quartier doté d'une seule salle. Ouvert pour la première fois en 1935, il finit alors par se transformer en complexe de 3 salles distinctes 40 ans plus tard.


  </p>
  <p>En 1993, il se convertit dans le domaine des arts et essais, proposant ainsi divers films d'auteurs en VO (version originale), rencontres et avant-premières.</p>
  <p>Hébergé dans un bâtiment de style Art Déco, le Royal est le plus ancien cinéma toulonnais encore en activité.
Pour la petite anecdote, le cinéma a rencontré quelques moments difficiles entre les années 1970 et 1980, à cause de l’intégration de films pour adultes.</p>
</div>
<div className="breaker"></div>
</div>
    </>
       
    );
  }
  
  export default Lieu;
  