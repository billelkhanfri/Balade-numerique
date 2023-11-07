import Navbar from "../../components/navbar/Navbar";
import Thumb from "../../components/thumb/Thumb";
import "./accueil.css";
import Banner from "../../components/banner/Banner";
import Weathers from "../../components/weather/Weather";
import { useEffect, useState } from "react";



const Accueil = () => {
    const [data, setData] = useState([]);
      const fetchData = async () => {
        try {
          const response = await fetch(
            "/DB/data.json"
          );
          if (!response) {
            throw new Error("il y'a un problem de connexion");
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error(" erreur du fetch ", error);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);

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
