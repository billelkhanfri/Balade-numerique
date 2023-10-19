import Navbar from "../../components/navbar/Navbar";


import { divIcon } from "leaflet";
import "./carte.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerclusterGroup from "react-leaflet-cluster"

function Carte() {
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
    retryFetchLocation(); // Fetch location on initial load
  }, []);

  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };

  const bateauIcon = divIcon({
    html: ' <div  class="img-wrapper"> <img class ="custom-marker" src="/src/assets/icones-pics/Sculpture-bateau.png" alt="Custom Icon" /> <div/>',
  });

  const libertyIcon = divIcon({
    html: ' <div  class="img-wrapper"><img class ="custom-marker" src="/src/assets/icones-pics/Liberté.png" alt="Custom Icon" /><div/> ',
  });

  const mayolIcon = divIcon({
    html: ' <div  class="img-wrapper"><img class ="custom-marker" src="/src/assets/icones-pics/Stade-Mayole.png" alt="Custom Icon" /> <div/>',
  });
  const pugetIcon = divIcon({
    html: ' <div  class="img-wrapper"><img class ="custom-marker" src="/src/assets/icones-pics/Place-puget.png" alt="Custom Icon" /><div/> ',
  });
  const operaIcon = divIcon({
    html: ' <div  class="img-wrapper"><img class ="custom-marker" src="/src/assets/icones-pics/Opéra.png" alt="Custom Icon" /> <div/>',
  });
  const lavoirIcon = divIcon({
    html: ' <div  class="img-wrapper"><img class ="custom-marker" src="/src/assets/icones-pics/Lavoir.png" alt="Custom Icon" /> <div/>',
  });
  const algerIcon = divIcon({
    html: ' <div  class="img-wrapper  alger"><img class ="custom-marker" src="/src/assets/icones-pics/Rue-Alger.png" alt="Custom Icon" /> <div/>',
  });
  const cathIcon = divIcon({
    html: ' <div  class="img-wrapper"><img class ="custom-marker" src="/src/assets/icones-pics/Cathédrale-de-toulon.png" alt="Custom Icon" /><div/> ',
  });
  const fayetteIcon = divIcon({
    html: '<div  class="img-wrapper"> <img class ="custom-marker" src="/src/assets/icones-pics/Court-Lafayette.png" alt="Custom Icon" /><div/> ',
  });
  const portIcon = divIcon({
    html: ' <div  class="img-wrapper"><img class ="custom-marker" src="/src/assets/icones-pics/Carrée-du-port.png" alt="Custom Icon" /> <div/>',
  });
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

   
      {loading ? (
        <p>Loading...</p>
      ) : hasInternet ? (
        <MapContainer center={[43.12165469161616, 5.933974953667892]} zoom={16}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>Ma Position</Popup>
          </Marker>
          <Marker
          position={[43.12314987182617, 5.931080341339111]}
          icon={bateauIcon}
        >
          <Popup> Bateau sculpture + Rue des Arts </Popup>
        </Marker>
        <Marker
          position={[43.12566961111021, 5.930514335632324]}
          icon={libertyIcon}
        >
          <Popup>
            {" "}
            Place de la Liberté (+ Diagonale + Boulevard de Strasbourg) + Cinéma
            Le Royal (coup de coeur)
          </Popup>
        </Marker>
        <Marker position={[43.1207308, 5.9314906]} icon={algerIcon}>
          <Popup>Rue d Alger + Place Raimu</Popup>
        </Marker>
        <Marker
          position={[43.11996078491211, 5.932811737060547]}
          icon={portIcon}
        >
          <Popup>
            Carré du Port + Mairie d honneur - Atlante + Le Génie de la
            navigation{" "}
          </Popup>
        </Marker>
        <Marker
          position={[43.11900586846106, 5.936736189260646]}
          icon={mayolIcon}
        >
          <Popup>Stade Mayol + Felix Mayol + RCT </Popup>
        </Marker>
        <Marker
          position={[43.121326754622004, 5.934564640175547]}
          icon={fayetteIcon}
        >
          <Popup>
            Marché de Provence + Office de Tourisme + Eglise
            Saint-François-de-Paule (coup de coeur)+ Cours Lafayette + Musée
            vieux Toulon (petit pas) + Le Boulet{" "}
          </Popup>
        </Marker>
        <Marker
          position={[43.12165469161616, 5.933974953667892]}
          icon={cathIcon}
        >
          <Popup>Cathédrale + Boutique de jouet (coup de coeur) </Popup>
        </Marker>
        <Marker
          position={[43.12239778375607, 5.934633982047172]}
          icon={lavoirIcon}
        >
          <Popup>Place Saint Vincent + Les halles + Le lavoir + Portes </Popup>
        </Marker>
        <Marker
          position={[43.123485152129774, 5.932922946465119]}
          icon={pugetIcon}
        >
          <Popup>
            Place Puget + Fontaine des 3 dauphins + Le petit prince (coup de
            coeur) + La savonnerie (coup de coeur){" "}
          </Popup>
        </Marker>
        <Marker
          position={[43.1244893904978, 5.932467694145099]}
          icon={operaIcon}
        >
          <Popup>Opéra de Toulon </Popup>
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

export default Carte;
