import "./parcours.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import Lieux from "../../components/lieux/Lieux.jsx";
import LeafletMachine from "../../components/leafletRoutingMachine/LeafletMachine.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { divIcon } from "leaflet";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase"; 
import { FaDirections } from "react-icons/fa";
import { useMemo } from "react";


function Parcours() {
   const [position, setPosition] = useState([43.1204778356, 5.933236982047172]); 
   const [error, setError] = useState(null);

   useEffect(() => {
     if ("geolocation" in navigator) {
       navigator.geolocation.getCurrentPosition(
         (position) => {
           const { latitude, longitude } = position.coords;
           setPosition([latitude, longitude]);
         },
         (error) => setError(error.message)
       );
     } else {
       setError("Geolocation is not supported by your browser.");
     }
   }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

const [selectedMarkerId, setSelectedMarkerId] = useState(null);

const handleMarkerClick = (marker) => {
  setSelectedMarkerId(marker);

};
  const openGoogleMaps = () => {
    if (selectedMarkerId) {
      const { position } = selectedMarkerId;
      console.log(selectedMarkerId)
      const destination = `${position[0]},${position[1]}`;
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
      window.open(url, "_blank");
    }
  };


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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "places"));
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  const customIcons = [
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FOpe%CC%81ra.png?alt=media&token=cd494a14-6251-4453-9da8-c645331b2dc6" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FLiberte%CC%81.png?alt=media&token=1bcddf7b-7226-44b1-b09b-64b5a1d3ac37" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FSculpture-bateau.png?alt=media&token=38139be6-b14f-4ee4-b5dc-3513773eba9e" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),

    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FRue-alger.png?alt=media&token=76766c12-4089-41cb-8aca-6808fad3dfe5" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FCarre%CC%81e-du-port.png?alt=media&token=0d5ec8e8-1913-438a-b5dc-bd6568af8754" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FStade-Mayole.png?alt=media&token=87194f6a-98e5-45ab-9c01-98581b32eef9" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper alger"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FCourt-Lafayette.png?alt=media&token=591bcb68-28d6-4f1c-8b9c-d82cd2388bff" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FCathe%CC%81drale-de-toulon.png?alt=media&token=c94eb9e0-e88c-4448-b0d5-e239d8275d2a" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper alger"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FLavoir.png?alt=media&token=e46fb87e-bd9e-4cba-b02e-e2f6e0a37200" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),

    divIcon({
      html: '<div class="img-wrapper alger"><img class="custom-marker" src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FPlace-puget.png?alt=media&token=22e38f9f-53fe-4639-a125-6066b6296df6" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 8; // Adjust the threshold as needed

      setIsScrolled(scrollY > threshold && scrollY > prevScrollY);
      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
const customIcon = L.divIcon({
  className: "custom-icon",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
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
        <div className={`item-head ${isScrolled ? "scrolled" : ""}`}>
          <Link to="/">
            <IoIosArrowBack className="return-icon" />
          </Link>
          <h2> Parcours</h2>
          <IoIosArrowBack className="return-icon-transparent" />
        </div>

        {selectedMarkerId && (
          <div className="map-button container" onClick={openGoogleMaps}>
            <button className="button">
              {selectedMarkerId.title}
              <FaDirections className="bt-icon" />
            </button>
          </div>
        )}
      </div>

      <MapContainer center={[43.1204778356, 5.933236982047172]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Ma position</Popup>
        </Marker>

        {data &&
          data.map((marker) => (
            <Marker
              key={marker.id}
              position={[marker.position[0], marker.position[1]]}
              icon={customIcons[marker.id]}
              eventHandlers={{
                click: (e) => {
                  handleMarkerClick(marker);
                },
              }}
            ></Marker>
          ))}

        <LeafletMachine />
      </MapContainer>

      <Lieux />
    </>
  );
}

export default Parcours;
