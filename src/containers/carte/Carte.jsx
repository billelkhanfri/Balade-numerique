import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const markersData = [
  {
    id: 1,
    name: " Place de la Liberté",
    coordinates: [43.12566961111021, 5.930514335632324], // Latitude and longitude
    popupMessage: "Place de la Liberté",
  },
  {
    id: 2,
    name: "Bateau sculpture ",
    coordinates: [43.12314987182617, 5.931080341339111],
    popupMessage: "Bateau sculpture ",
  },
  {
    id: 3,
    name: "Rue d'Alger",
    coordinates: [43.1207308, 5.9314906],
    popupMessage: "Rue d'Alger",
  },
  {
    id: "Carré du Port ",
    name: "",
    coordinates: [43.11996078491211, 5.932811737060547],
    popupMessage: "Carré du Port ",
  },
];

function Carte() {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <MapContainer
        center={[43.12566961111021, 5.930514335632324]}
        zoom={15}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {markersData.map((marker) => (
          <Marker key={marker.id} position={marker.coordinates}>
            <Popup>{marker.popupMessage}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default Carte;
