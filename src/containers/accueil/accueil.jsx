import Navbar from "../../components/navbar/Navbar";
import Thumb from "../../components/thumb/Thumb";
import { data } from "../../data/data.js";
import "./accueil.css";
import Banner from "../../components/banner/Banner";
import Weathers from "../../components/weather/Weather";

const Accueil = () => {
  return (
    <>
      <Banner />
      <div className="thumbs-wrapping">
        <Weathers></Weathers>
        <div className=" thumbs-container">
          {data &&
            data.map((item) => (
              <Thumb
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                id={item.id}
                history_one={item.history_one}
                coup_coeurs={item.coup_coeurs}
              />
            ))}
        </div>
      </div>
      <Navbar />
    </>
  );
};
export default Accueil;
