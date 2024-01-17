import Navbar from "../../components/navbar/Navbar";
import Thumb from "../../components/thumb/Thumb";
import FootMap from "../../components/footMap/FootMap";
import "./home.css";
import Banner from "../../components/banner/Banner";
import Weathers from "../../components/weather/Weather";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase"; // Adjust the path accordingly

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
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <>
      <Banner />
      <div className="container ">
        <div className="thumbs-wrapping">
          <Weathers />
          <FootMap/>
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
