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


function Parcours() {
  const [scrollPosition, setScrollPosition] = useState(0);

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
  const fetchData = async () => {
    try {
      const response = await fetch("/DB/data.json");
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
  const [position, setPosition] = useState([43.125, 5.93]);
  const [loading, setLoading] = useState(true);
  const [hasInternet, setHasInternet] = useState(true);

  const retryFetchLocation = () => {
    setLoading(true);
    setHasInternet(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (geoLocation) => {
          const { latitude, longitude } = geoLocation.coords;
          setPosition([latitude, longitude]);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          setHasInternet(false);
        }
      );
    } else {
      setLoading(false);
      setHasInternet(false);
    }
  };

  useEffect(() => {
    retryFetchLocation();
  }, []);
  const customIcons = [
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
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="/src/assets/icones-pics/Opéra.png" alt="Custom Icon" /></div>',
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
        <div className="map-button container">
          <button className="button">Embarquer</button>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : hasInternet ? (
        <MapContainer center={[43.1204778356, 5.933236982047172]} zoom={16}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Ma Position</Popup>
          </Marker>
          {data &&
            data.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                icon={customIcons[index]}
              >
                <Popup>{marker.popupContent}</Popup>
              </Marker>
            ))}
          <LeafletMachine />
        </MapContainer>
      ) : (
        <div className="offLigne-wrapper">
          <p>Vérifiez votre connexion internet, elle semble être coupée :) </p>
          <button onClick={retryFetchLocation}>Rafraichir</button>
        </div>
      )}
      <Lieux />
    </>
  );
}

export default Parcours;
