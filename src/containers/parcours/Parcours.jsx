import "./parcours.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import Lieux from "../../components/lieux/Lieux.jsx";
import LeafletMachine from "../../components/leafletRoutingMachine/LeafletMachine.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Loader from "../../components/loader/Loader";
// import { data } from "../../data/data.js";
import { divIcon } from "leaflet";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase"; // Adjust the path accordingly

function Parcours() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const openGoogleMaps = () => {
    const destination = "43.12566961111021,5.930514335632324";
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
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

  const customIcons = [
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="/src/assets/icones-pics/Opéra.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="/src/assets/icones-pics/Liberté.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="/src/assets/icones-pics/Sculpture-bateau.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),

    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="/src/assets/icones-pics/Rue-Alger.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="/src/assets/icones-pics/Carrée-du-port.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="src/assets/icones-pics/Stade-Mayole.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper alger"><img class="custom-marker" src="/src/assets/icones-pics/Court-Lafayette.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="/src/assets/icones-pics/Cathédrale-de-toulon.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper alger"><img class="custom-marker" src="/src/assets/icones-pics/Lavoir.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),

    divIcon({
      html: '<div class="img-wrapper alger"><img class="custom-marker" src="/src/assets/icones-pics/Place-puget.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
  ];

  return (
    <>
      <div className="scrolling">
        <div className="scroll-to-top-icon" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
        <div className="scroll-to-bottom-icon" onClick={scrollToBottom}>
          <FaArrowDown />
        </div>
      </div>

      <div className="lieu-item">
        <div className="item-head">
          <Link to="/">
            <IoIosArrowBack className="return-icon" />
          </Link>
          <h2> Parcours</h2>
          <IoIosArrowBack className="return-icon-transparent" />
        </div>
        <div className="map-button container" onClick={openGoogleMaps}>
          <button className="button">Embarquer</button>
        </div>
      </div>

      <MapContainer center={[43.1204778356, 5.933236982047172]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data &&
          data.map((marker, index) => (
            <Marker
              key={index}
              position={[marker.position[0], marker.position[1]]}
              icon={customIcons[index]}
            >
              <Popup>{marker.popupContent}</Popup>
            </Marker>
          ))}
        <LeafletMachine />
      </MapContainer>

      <Lieux />
    </>
  );
}

export default Parcours;
