import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./CurrentLocationMap.css";

function CurrentLocationMap() {
  const [position, setPosition] = useState([43.125, 5.93]); // Default position
  const [loading, setLoading] = useState(true);
  const [hasInternet, setHasInternet] = useState(true); // Track internet connection status

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
    retryFetchLocation(); // Fetch location on initial load
  }, []);

  return (
    <>
      <h2>Ma position</h2>
      {loading ? (
        <p>Loading...</p>
      ) : hasInternet ? (
        <MapContainer center={position} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>Ma Position</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="offLigne-wrapper">
          <p>Vérifiez votre connexion internet, elle semble être coupée :) </p>
          <button onClick={retryFetchLocation}>Rafraichir</button>
        </div>
      )}
    </>
  );
}

export default CurrentLocationMap;
