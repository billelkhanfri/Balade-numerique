import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
 import {Icon} from "leaflet";
 import picto from "../../../src/assets/images/bateau.png"
 



function Carte() {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
   const bateauIcon = new Icon ({
    iconUrl:"../../../src/assets/icones-pics/Icone-Bateau-Sculpture-couleur.png",
    iconSize:[38,38]
   })
   const libertyIcon = new Icon ({
    iconUrl:"../../../src/assets/icones-pics/Icone-Liberte-couleur.png",
    iconSize:[38,38]
   })

   const mayolIcon = new Icon ({
    iconUrl:"../../../src/assets/images/bateau.svg",
    iconSize:[38,38]
   })
   const pugetIcon = new Icon ({
    iconUrl:"../../../src/assets/images/bateau.svg",
    iconSize:[38,38]
   })
   const operaIcon = new Icon ({
    iconUrl:"../../../src/assets/images/bateau.svg",
    iconSize:[38,38]
   })
   const lavoirIcon = new Icon ({
    iconUrl:"../../../src/assets/images/bateau.svg",
    iconSize:[38,38]
   })
   const algerIcon = new Icon ({
    iconUrl:"../../../src/assets/images/bateau.svg",
    iconSize:[38,38]
   })
   const cathIcon = new Icon ({
    iconUrl:"../../../src/assets/images/bateau.svg",
    iconSize:[38,38]
   })
   const fayetteIcon = new Icon ({
    iconUrl:"../../../src/assets/images/bateau.svg",
    iconSize:[38,38]
   })
   const portIcon = new Icon ({
    iconUrl:"../../../src/assets/images/bateau.svg",
    iconSize:[38,38]
   })
  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <MapContainer
        center={[43.12566961111021, 5.930514335632324]}
        zoom={19}
     
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

      
          <Marker  position={[43.12314987182617, 5.931080341339111]} icon={bateauIcon}>
            <Popup>  Bateau sculpture + Rue des Arts  </Popup>
          </Marker>
          <Marker  position={[43.12566961111021, 5.930514335632324]} icon={libertyIcon} >
            <Popup> Place de la Liberté (+ Diagonale + Boulevard de Strasbourg) + Cinéma Le Royal (coup de coeur)</Popup>
          </Marker>
          <Marker  position={[43.1207308, 5.9314906]} icon={algerIcon} >
            <Popup>Rue d'Alger + Place Raimu</Popup>
          </Marker>
          <Marker  position={[43.11996078491211, 5.932811737060547]} icon={portIcon}>
            <Popup>Carré du Port + Mairie d'honneur - Atlante + Le Génie de la navigation </Popup>
          </Marker>
          <Marker  position={[43.1209217, 5.9387857]} icon={mayolIcon} >
            <Popup>Stade Mayol + Felix Mayol + RCT </Popup>
          </Marker>
          <Marker  position={[43.121326754622004,  5.934564640175547]}icon={fayetteIcon} >
            <Popup>Marché de Provence + Office de Tourisme + Eglise Saint-François-de-Paule  (coup de coeur)+ Cours Lafayette + Musée vieux Toulon  (petit pas) + Le Boulet </Popup>
          </Marker>
          <Marker  position={[43.12165469161616, 5.933974953667892]} icon={cathIcon} >
            <Popup>Cathédrale + Boutique de jouet  (coup de coeur) </Popup>
          </Marker>
          <Marker  position={[43.12239778375607, 5.934633982047172]} icon={lavoirIcon}>
            <Popup>Place Saint Vincent + Les halles + Le lavoir + Portes </Popup>
          </Marker>
          <Marker  position={[43.123485152129774, 5.932922946465119]}  icon={pugetIcon}>
            <Popup>Place Puget + Fontaine des 3 dauphins + Le petit prince  (coup de coeur) + La savonnerie (coup de coeur) </Popup>
          </Marker>
          <Marker  position={[43.1244893904978, 5.932467694145099]}icon={operaIcon} >
            <Popup>L'opéra de Toulon </Popup>
          </Marker>

          
       
      </MapContainer>
    </>
  );
}

export default Carte;
