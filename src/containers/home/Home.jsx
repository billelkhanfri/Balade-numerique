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



const Accueil = () => {
  // const slide1 = "https:rm83.fr/balade/wp-content/uploads/2024/01/les-halles-vue-arriere.jpg"
  const slide1 =
    "https://rm83.fr/balade/wp-content/uploads/2024/01/DSCN0015.jpg";
 const slide2 =
   "https:rm83.fr/balade/wp-content/uploads/2024/01/les-halles-vue-arriere.jpg";
  const slide3 =
    "https://rm83.fr/balade/wp-content/uploads/2024/01/DSCN0070.jpg";
 
  const slides = [slide1, slide2, slide3];
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
          <div className="banner-slogan-home">
            <p>
              Elle S'appelait <span className="telo">Telo</span>
            </p>
          </div>
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
