import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Thumb from "../../components/thumb/Thumb";
import { data } from "../../data/data.js";
import "./accueil.css";
import Banner from "../../components/banner/Banner";
import CurrentLocationMap from "../../components/current-location/CurrentLocationMap";

const Accueil = () => {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };

  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* <CurrentLocationMap className="container" /> */}
      <Banner/>
      <div className=" thumbs-container">
        {data &&
          data.map((item) => (
            <Thumb
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              subtitle={item.subtitle}
              id ={item.id}
            />
          ))}
      </div>
    </>
  );
};
export default Accueil;
