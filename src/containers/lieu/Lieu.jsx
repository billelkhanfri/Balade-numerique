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

import "leaflet/dist/leaflet.css";



import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



function Lieu() {
  const [data, setData] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);


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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 8; // Adjust the threshold as needed

      setIsScrolled(scrollY > threshold && scrollY > prevScrollY);
      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      {lieuData && (
        <>
          <div className="lieu-item">
            <div className={`item-head ${isScrolled ? "scrolled" : ""}`}>
              <Link to="/">
                <IoIosArrowBack className="return-icon" />
              </Link>
              <h2>{lieuData.title}</h2>
              <IoIosArrowBack className="return-icon-transparent" />
            </div>
            <Slider images={lieuData.images} />
          </div>
          <div className="container ">
            <AudioOrgan lecture={lieuData.lecture} />
            <div className="texts-wrapper">
              <p> {lieuData.history_one}</p>
              <p>{lieuData.history_two}</p>
              <p>{lieuData.history_three}</p>
            </div>
            <div className="container map-section">
              {lieuData && lieuData.position ? (
                <MapContainer
                  center={lieuData.position}
                  zoom={16}
                  scrollWheelZoom={false}
                  style={{ maxHeight: "250px" }} // Adjust the height as needed
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={lieuData.position}>
                    <Popup>{lieuData.title}</Popup>
                  </Marker>
                </MapContainer>
              ) : null}
              <div className="direction" id="direction">
                <button
                  className="lieux-content-button"
                  onClick={openGoogleMaps}
                >
                  Embarquer
                </button>
              </div>
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
            <Collapse
              coup_coeurs={lieuData.coup_coeurs}
              id={lieuData.id}
            />{" "}
          </div>
        </>
      )}

      <Navbar />
    </>
  );
}

export default Lieu;
