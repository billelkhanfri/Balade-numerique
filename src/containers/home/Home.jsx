import Navbar from "../../components/navbar/Navbar";
import Thumb from "../../components/thumb/Thumb";
import FootMap from "../../components/footMap/FootMap";
import "./home.css";
import Banner from "../../components/banner/Banner";
import Weathers from "../../components/weather/Weather";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase"; // Adjust the path accordingly
import LandSlider from "../../components/landing/LandSlider";

import slide1 from "../../assets/landing/b242040aee3ecd460a939090058821e0wh800jpeg.jpeg";
import slide2 from "../../assets/landing/mmo9-1.webp";
import slide3 from "../../assets/landing/rade+toulon+chavaroche-7IRQNT4a.webp";
const slides = [slide1, slide2, slide3];
const Accueil = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "places"));
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <>
      <LandSlider slides={slides} />

      

      <div className="container ">
        <div className="thumbs-wrapping">
          <Weathers />
          <FootMap />
          <p className="parcours-points">Les points du parcours</p>

          <div className="thumbs-container">
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
      </div>
      <Navbar />
    </>
  );
};

export default Accueil;
