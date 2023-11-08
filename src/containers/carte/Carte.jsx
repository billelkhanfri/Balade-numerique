import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../../components/navbar/Navbar";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { data } from "../../data/data.js";
import { useState } from "react";
import "./carte.css";
import MarkerCard from "../../components/markerCard/MarkerCard.jsx";
import MarkerClusterGroup from "react-leaflet-cluster";


function Carte() {
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
