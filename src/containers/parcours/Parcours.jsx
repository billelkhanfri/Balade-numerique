import "./parcours.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import Lieux from "../../components/lieux/Lieux.jsx";
import LeafletMachine from "../../components/leafletRoutingMachine/LeafletMachine.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Loader from "../../components/loader/Loader";
import { data } from "../../data/data.js";


function Parcours() {
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

  return (
    <>
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
              <Marker key={index} position={marker.position} icon={marker.icon}>
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
