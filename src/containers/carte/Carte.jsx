import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../../components/navbar/Navbar";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
// import { data } from "../../data/data.js";
import "./carte.css";
import MarkerCard from "../../components/markerCard/MarkerCard.jsx";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useEffect, useState } from "react";



function Carte() {
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

  const [selectedMarker, setSelectedMarker] = useState(null);
  const filtredata = data.flatMap((item) => {
    if (item.coup_coeurs) {
      return item.coup_coeurs;
    }
    return [];
  });

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const logo = divIcon({
    html: ' <div class="img-wrapper"> <img class="custom-marker" src="/src/assets/icones-pics/apple-touch-icon.png" alt="Custom Icon" /> <div/>',
    className: "custom-marker-icon",
  });

  return (
    <>
      <div className="lieu-item">
        <div className="item-head">
          <Link to="/">
            <IoIosArrowBack className="return-icon" />
          </Link>
          <h2>Coup de Coeur</h2>
          <IoIosArrowBack className="return-icon-transparent" />
        </div>
      </div>

      <MapContainer center={[43.1204778356, 5.933236982047172]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          style={{
            height: "500px",
            backgroundColo: "red",
          }}
        >
          {filtredata.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              icon={logo}
              eventHandlers={{
                click: () => handleMarkerClick(marker),
              }}
            >
              <Popup>{marker.title}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      {selectedMarker && (
        <MarkerCard
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
        />
      )}

      <Navbar />
    </>
  );
}

export default Carte;
