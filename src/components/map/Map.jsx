import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "./map.css";

function Map() {
  return (
    <MapContainer center={[43.12566961111021, 5.930514335632324]} zoom={19}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
