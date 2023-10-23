import Navbar from "../../components/navbar/Navbar";
import Thumb from "../../components/thumb/Thumb";
import { data } from "../../data/data.js";
import "./accueil.css";
import Banner from "../../components/banner/Banner";

const Accueil = () => {
  return (
    <>
      <Banner />
      <div className=" thumbs-container">
        {data &&
          data.map((item) => (
            <Thumb
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              subtitle={item.subtitle}
              id={item.id}
              history_one={item.history_one}
              coup_coeur_title={item.coup_coeur_title}
              coup_coeur_text={item.coup_coeur_text}
              coup_coeur_title2={item.coup_coeur_title2}
              coup_coeur_text2={item.coup_coeur_text2}
              coup_coeur_title3={item.coup_coeur_title3}
              coup_coeur_text3={item.coup_coeur_text3}
              coup_coeur_title4={item.coup_coeur_title4}
              coup_coeur_text4={item.coup_coeur_text4}
              coup_coeur_title5={item.coup_coeur_title5}
              coup_coeur_text5={item.coup_coeur_text5}
            />
          ))}
      </div>
      <Navbar />
    </>
  );
};
export default Accueil;
