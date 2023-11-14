import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./lieu.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "../../components/slider/Slider.jsx";
import Collapse from "../../components/collapse/Collapse.jsx";
import AudioOrgan from "../../components/audio-organ/AudioOrgan.jsx";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase"; // Adjust the path accordingly

function Lieu() {
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

  const { lieuId } = useParams();

  const lieuData = data && data.find((lieu) => lieu.id == lieuId);
  const openGoogleMaps = () => {
    if (lieuData && lieuData.position) {
      console.log(lieuData.position);
      const destination = lieuData.position;
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
      window.open(url, "_blank");
    } else {
      console.error("Destination information not available for this location");
    }
  };

  return (
    <>
      {lieuData && (
        <>
          <div className="lieu-item">
            <div className="item-head">
              <Link to="/">
                <IoIosArrowBack className="return-icon" />
              </Link>
              <h2>{lieuData.title}</h2>
              <IoIosArrowBack className="return-icon-transparent" />
            </div>
            <Slider images={lieuData.images} />
            <div className="direction">
              <button className="lieux-content-button" onClick={openGoogleMaps}>
                Embarquer
              </button>
            </div>
          </div>
          <AudioOrgan lecture={lieuData.lecture} />
          <div className="texts-wrapper">
            <p> {lieuData.history_one}</p>
            <p>{lieuData.history_two}</p>
            <p>{lieuData.history_three}</p>
          </div>
          <div className="coup-wrapper">
            {lieuData.coup_coeurs && (
              <h2>
                {" "}
                Découvrire notre séléction <br />
                coup de coeur
              </h2>
            )}
          </div>
          <Collapse coup_coeurs={lieuData.coup_coeurs} id={lieuData.id} />{" "}
        </>
      )}

      <Navbar />
    </>
  );
}

export default Lieu;
