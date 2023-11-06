import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../../components/navbar/Navbar";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { data } from "../../data/data.js";

function Carte() {
const markers = data
  .map((item) => {
    if (item.coup_coeurs) {
      return item.coup_coeurs.map((x)=> x.position)
    }
    return [];
  })


console.log(markers);




  const logo = divIcon({
    html: ' <div  class="img-wrapper"> <img class ="custom-marker" src="/src/assets/icones-pics/apple-touch-icon.png" alt="Custom Icon" /> <div/>',
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

      {/* <MapContainer center={[43.1204778356, 5.933236982047172]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
      </MapContainer> */}
      

      <Navbar />
    </>
  );
}

export default Carte;
