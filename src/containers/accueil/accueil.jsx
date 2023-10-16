import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
<<<<<<< HEAD
import Thumb from "../../components/thumb/Thumb";
import { data } from "../../data/data.js";
=======
import Thumb  from "../../components/thumb/Thumb"
>>>>>>> 214942de2e6445e719e2f67eccdb2d8d0c819cb2

import "./accueil.css";
import CurrentLocationMap from "../../components/current-location/CurrentLocationMap";
const Accueil = () => {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  console.log(data);
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
<<<<<<< HEAD
=======
    
       <CurrentLocationMap/>
       <Thumb/>
>>>>>>> 214942de2e6445e719e2f67eccdb2d8d0c819cb2

      <CurrentLocationMap className="container" />
      <div className=" thumbs-container">
        {data &&
          data.map((item) => (
            <Thumb
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
      </div>
    </>
  );
};
export default Accueil;
